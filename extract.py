import re
import ast
import json

path = r'C:\Users\admin\.gemini\antigravity\brain\3db7c708-e114-439d-a4bb-79af18208824\.system_generated\logs\overview.txt'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

def extract(line_idx, target):
    try:
        line = lines[line_idx]
        match = re.search(r'"CodeContent":"(.*?)","Description"', line)
        if match:
            raw_val = match.group(1)
            val = ast.literal_eval('"' + raw_val + '"')
            val = ast.literal_eval(val)
            with open('app/' + target, 'w', encoding='utf-8') as out:
                out.write(val)
            print('Success regex for', target)
        else:
            print('No match for', target)
    except Exception as e:
        print('Error extracting', target, e)

extract(10, 'page.tsx')
extract(8, 'globals.css')
extract(7, 'layout.tsx')
