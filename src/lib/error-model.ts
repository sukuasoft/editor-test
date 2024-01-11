const rtError : {[key:string]: any} = {
    AC: { NA: 'Accepted. The code executed successfully.' },
    MLE: { NA: 'Memory Limit Exceeded. Execution of the compiled code used more memory that the memory limit' },
    TLE: { NA: 'Time Limit Exceeded. Execution of the compiled code took more time than the passed time limit' },
    RE: {
        SIGXFSZ: 'The output file size exceeded beyond allowed system value',
        SIGSEGV: 'Invalid memory reference or segmentation fault',
        SIGFPE: 'Division by 0',
        SIGBUS: 'Accessed memory location that has not been physically mapped. The address is valid but we failed to read/write.',
        SIGABRT: 'Aborting due to a fatal error.',
        NZEC: 'code execution stopped because of unknown reason.',
        OTHER: 'code execution stopped because of unknown reason.'
    }
}

export default rtError;