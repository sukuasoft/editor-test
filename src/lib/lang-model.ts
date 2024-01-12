interface langModel {
    'hackerearthapi': string;
    'mode_ace': string;
    'boilerplate': string;
    'extension' : string;
}

const lang_model:{[key: string] : langModel} = {
    'C' : {
        'hackerearthapi' : 'C',
        'mode_ace' : 'c_cpp',
        'boilerplate' : '#include<stdio.h>\n\nint main()\n{\n\n\tprintf("Olá mundo, Arotec! linguagem C");\n\treturn 0;\n}',
        'extension' : '.c'
    },
    'C++ 14' : {
        'hackerearthapi' : 'CPP14',
        'mode_ace' : 'c_cpp',
        'boilerplate' : '#include<iostream>\n\nint main()\n{\n\n\tstd::cout << \"Olá mundo , Arotec! linguagem C++ 14\";\n\treturn 0;\n}',
        'extension' : '.cpp'
    },
    'C++ 17' : {
        'hackerearthapi' : 'CPP17',
        'mode_ace' : 'c_cpp',
        'boilerplate' : '#include<iostream>\n\nint main()\n{\n\n\tstd::cout << \"Olá mundo, Arotec! linguagem C++ 17\";\n\treturn 0;\n}',
        'extension' : '.cpp'
    },
    'Python 2' : {
        'hackerearthapi' : 'PYTHON',
        'mode_ace' : 'python',
        'boilerplate' : 'print "Olá mundo, Arotec! linguagem Python 2"',
        'extension' : '.py'
    },
    'Python 3' : {
        'hackerearthapi' : 'PYTHON3',
        'mode_ace' : 'python',
        'boilerplate' : 'print("Olá mundo, Arotec! linguagem Python 3")',
        'extension' : '.py'
    },
    'Python 3.8' : {
        'hackerearthapi' : 'PYTHON3_8',
        'mode_ace' : 'python',
        'boilerplate' : 'print("Olá mundo, Arotec! linguagem Python 3.8")',
        'extension' : '.py'
    },
    'Java 8' : {
        'hackerearthapi' : 'JAVA8',
        'mode_ace' : 'java',
        'boilerplate' : 'public class Main {\n\tpublic static void main(String args[]) {\n\t\tSystem.out.print("Olá mundo, Arotec! linguagem Java 8");\n\t}\n}',
        'extension' : '.java'
    },
    'Java 14' : {
        'hackerearthapi' : 'JAVA14',
        'mode_ace' : 'java',
        'boilerplate' : 'public class Main {\n\tpublic static void main(String args[]) {\n\t\tSystem.out.print("Olá mundo, Arotec! linguagem Java 14");\n\t}\n}',
        'extension' : '.java'
    },
    'Javascript(NodeJS)' : {
        'hackerearthapi' : 'JAVASCRIPT_NODE',
        'mode_ace' : 'java',
        'boilerplate' : 'console.log("Olá mundo, Arotec! linguagem Javascript(NodeJS)");',
        'extension' : '.js'
    }
}

export default lang_model;