from flask import Flask
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint

APP = Flask(__name__)

### swagger specific ###
SWAGGER_URL = '/swagger'
API_URL = ''
SWAGGERUI_BLUEPRINT = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': "Sagger Portal"
    }
)
APP.register_blueprint(SWAGGERUI_BLUEPRINT, url_prefix=SWAGGER_URL)
### end swagger specific ###


if __name__ == '__main__':
    CORS = CORS(APP)
    APP.run(host='0.0.0.0', port=4003, debug=True)
