from flask import Flask, jsonify, request
from flask_cors import CORS
from routes.stories import stories_bp

def create_app():
    app = Flask(__name__)
    CORS(app)  # Enable CORS for all routes
    
    # Register blueprints
    app.register_blueprint(stories_bp, url_prefix='/api/stories')


    @app.route('/')
    def hello_world():
        return 'Hello from Flask!'
        
    return app

app = create_app()

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)