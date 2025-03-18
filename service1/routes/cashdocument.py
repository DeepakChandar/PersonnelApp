from flask import Blueprint, jsonify, request

cash_bp = Blueprint('cash', __name__)

# Dummy data
cash_documents = [
    {"id": 1, "amount": 1000.00, "currency": "USD", "date": "2023-08-01", "description": "Cash deposit"},
    {"id": 2, "amount": 500.50, "currency": "EUR", "date": "2023-08-02", "description": "Cash withdrawal"}
]

# Read all cash documents
@cash_bp.route('/', methods=['GET'])
def get_all_cash_documents():
    return jsonify(cash_documents)

# Read single cash document
@cash_bp.route('/<int:doc_id>', methods=['GET'])
def get_cash_document(doc_id):
    document = next((doc for doc in cash_documents if doc["id"] == doc_id), None)
    if document:
        return jsonify(document)
    return jsonify({"error": "Document not found"}), 404

# Create new cash document
@cash_bp.route('/', methods=['POST'])
def create_cash_document():
    if not request.json:
        return jsonify({"error": "No data provided"}), 400
    
    new_doc = {
        "id": len(cash_documents) + 1,
        "amount": request.json.get('amount'),
        "currency": request.json.get('currency'),
        "date": request.json.get('date'),
        "description": request.json.get('description')
    }
    cash_documents.append(new_doc)
    return jsonify(new_doc), 201

# Update cash document
@cash_bp.route('/<int:doc_id>', methods=['PUT'])
def update_cash_document(doc_id):
    document = next((doc for doc in cash_documents if doc["id"] == doc_id), None)
    if not document:
        return jsonify({"error": "Document not found"}), 404
    
    document.update({
        "amount": request.json.get('amount', document["amount"]),
        "currency": request.json.get('currency', document["currency"]),
        "date": request.json.get('date', document["date"]),
        "description": request.json.get('description', document["description"])
    })
    return jsonify(document)

# Delete cash document
@cash_bp.route('/<int:doc_id>', methods=['DELETE'])
def delete_cash_document(doc_id):
    document = next((doc for doc in cash_documents if doc["id"] == doc_id), None)
    if not document:
        return jsonify({"error": "Document not found"}), 404
    
    cash_documents.remove(document)
    return jsonify({"message": "Document deleted successfully"})