import re

with open('src/data/locationsData.ts', 'r', encoding='utf-8') as f:
    content = f.read()

updates = {
    'dwarka': 'HOD Building, Basement, Parmanand Colony, Block B, Sector 12, Dwarka, New Delhi - 110078',
    'rajouri-garden': 'WZ 153, Next to Cambridge Foundation School, Block J, Rajouri Garden, New Delhi - 110027',
    'janakpuri': 'C1/3, Block C1, Janak Puri, New Delhi - 110058, Opposite Mata Chandan Devi Hospital',
    'vikaspuri': '139, H1 Block, Vikas Puri, New Delhi - 110018',
    'punjabi-bagh': 'NWA 10, Club Road, Punjabi Bagh, Delhi - 110026',
    'paschim-vihar': 'A, Pizza Hut, Building 1, Shubham Enclave, Reserve Bank Enclave, Paschim Vihar, Delhi - 110087',
    'rohini': 'D13, 1st Floor, Prashant Vihar, Near Axis Bank, Sector 14, Rohini, New Delhi - 110085',
    'kirti-nagar': '42, Basement, Opposite Singh Chicken, DLE Industrial Area, Kirti Nagar, New Delhi - 110015'
}

for branch_id, new_address in updates.items():
    pattern = r'(id:\s*\"' + branch_id + r'\"[\s\S]*?address:\s*\")[^\"]+(\")'
    content = re.sub(pattern, r'\g<1>' + new_address + r'\g<2>', content)

content = re.sub(r'weekdays:\s*\"[^\"]+\"', 'weekdays: \"7:00 AM - 12:30 PM, 5:00 PM - 9:00 PM\"', content)
content = re.sub(r'weekends:\s*\"[^\"]+\"', 'weekends: \"Closed\"', content)

with open('src/data/locationsData.ts', 'w', encoding='utf-8') as f:
    f.write(content)
