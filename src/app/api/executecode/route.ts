import { NextResponse } from 'next/server';
import * as dotenv from 'dotenv';

dotenv.config();

interface body {
    "lang": string, // language
    "source": string, // code
    "input": string, // inputs
    "memory_limit"?: number,
    "time_limit"?: number,
    "context"?: string | Object,
    "callback"?: string,
    "id"?: string
}

interface header {
    "Content-type": string,
    "client-secret": string | undefined
}

interface firstRes {
    'request_status': {
        'code': string,
        'message': string,
    }
    'he_id': string,
    'result': {
        'run_status': {
            'status': string
        },
        'compile_status': string
    },
    'contest': string,
    'status_update_url': string
}

interface secondRes {
    "request_status": {
      "message": string,
      "code": string
    },
    "errors": {},
    "he_id": string,
    "status_update_url": string,
    "context": string,
    "result": {
      "run_status"?: {
        "memory_used": string,
        "status": string,
        "time_used": string,
        "signal": string,
        "exit_code": string,
        "status_detail": string,
        "stderr": string,
        "output": string,
        "request_NOT_OK_reason": string,
        "request_OK": string
      },
      "compile_status": string
    }
  }

interface gotError {
    "message": string,
    "error" : Object 
}
/*
{'result': 
    {'run_status': 
        {'status': 'NA'}, 
        'compile_status': 'Compiling...'
    }, 
    'he_id': '3064ee0f-9189-499b-be2c-f0fc68c8c9ab', 
    'status_update_url': 'https://api.hackerearth.com/v4/partner/code-evaluation/submissions/3064ee0f-9189-499b-be2c-f0fc68c8c9ab/', 
    'request_status': {'code': 'REQUEST_QUEUED', 'message': 'Your request has been queued in the evaluation pipeline'}
}
*/

function isError(object: any): object is gotError {
    return 'message' in object;
}

export async function POST(request: Request) {

    try {
        const req = await request.json();
        
        const newBody:body = {
            "lang": req.lang,
            "source": req.source,
            "input": req.input,
            'time_limit': 5,
            'memory_limit': 246323,
            'callback': req.callback,
            'id': "OCEC"
        }

        const url = "https://api.hackerearth.com/v4/partner/code-evaluation/submissions/";
        
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('Content-Type', 'application/json');
        requestHeaders.set('client-secret', process.env.CLIENT_SECRET_KEY!)

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(newBody),
            headers: requestHeaders,
        }).then(response => response.json());

        if (response.message) 
        {            
            return NextResponse.json(response);
        }

        // Now we wait
        const waitTime = 10; // 10 seconds
        const timer = (ms:number) => new Promise(res => setTimeout(res, ms));
        var 
            REQUEST_QUEUED = 'REQUEST_QUEUED',
            CODE_COMPILED = 'CODE_COMPILED',
            REQUEST_COMPLETED = 'REQUEST_COMPLETED',
            REQUEST_FAILED = 'REQUEST_FAILED';

        var executionCount = 0;
        while(executionCount < waitTime){
            const response_2 = await fetch(response.status_update_url, {
                headers: requestHeaders
            }).then(response_2 => response_2.json());            

            if (response_2.request_status.code === REQUEST_QUEUED)
            {
                // do smth i guess
            }
            else if (response_2.request_status.code === CODE_COMPILED) 
            {
                // how the hell will i inform the front end that its compiled, i can use sockets
                if (response_2.result.compile_status === "OK") {
                    // ok good
                }
                else {
                    // does this make sense 
                    return NextResponse.json(response_2);
                }
            }
            else if (response_2.request_status.code === REQUEST_COMPLETED)
            {
                return NextResponse.json(response_2);
            }
            else if (response_2.request_status.code === REQUEST_FAILED)
            {
                return NextResponse.json(response_2);
            }

            executionCount++;
            await timer(1000);
        }

        throw new Error('unable to resolve data');
    } catch (err: any) {        
        return NextResponse.json({name: 'error', error: err});
    }
}