swaggerDef = {
    "swaggerDefinition": {
            "info": {
            "title": "Kiowa Backend",
            "version": "1.0.0",
            },
            "host": 'localhost:5000',
            "basePath": '/',
            "securityDefinitions": {
                "APIKeyHeader": {
                    "type": 'apiKey',
                    "name": 'session',
                    "in": 'header',
                    },
                },
            },
        "apis": ['./db/schemas/admin.js', './db/schemas/course.js', './db/schemas/event.js', './db/schemas/student.js', './db/schemas/teacher.js', './routes/event.js', './routes/course.js', './routes/student.js', './routes/admin.js', './routes/teacher.js']
    }
    
    module.exports = swaggerDef;