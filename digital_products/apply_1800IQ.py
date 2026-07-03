import os

scripts = [f"generate_product_{i}.py" for i in range(1, 11)]

for script in scripts:
    with open(script, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Switch to 1800IQ builder
    content = content.replace("from document_builder import DocumentBuilder", "from document_builder_1800IQ import DocumentBuilder")
    
    with open(script, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Updated all scripts to use 1800IQ builder.")
