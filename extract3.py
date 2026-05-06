path = r'C:\Users\admin\.gemini\antigravity\brain\3db7c708-e114-439d-a4bb-79af18208824\.system_generated\logs\overview.txt'
with open(path, 'r', encoding='utf-8') as f: text = f.read()

def restore(search, end_search, out_file):
    idx1 = text.find(search)
    idx2 = text.find(end_search, idx1)
    if idx1 != -1 and idx2 != -1:
        raw = text[idx1 + 15:idx2]
        val = raw.replace('\\\\n', '\n').replace('\\\"', '\"').replace('\\\\', '\\')
        
        # In overview.txt, newlines in the tool call might be literal newlines OR double-escaped ones.
        # Since we use simple string replacement, we might need to fix extra quotes at the start/end
        if val.startswith('"'): val = val[1:]
        if val.endswith('"'): val = val[:-1]
        
        with open('app/' + out_file, 'w', encoding='utf-8') as f: 
            f.write(val)
        print('Restored', out_file)
    else:
        print('Could not find', out_file)

restore('"CodeContent":"\\"use client\\";\\n\\nimport { useState', '","Description":"\\"Main dashboard page', 'page.tsx')
restore('"CodeContent":"@import url(\\"https://fonts.googleapis.com', '","Description":"\\"Initialized global styles', 'globals.css')
restore('"CodeContent":"import \\"./globals.css\\";\\nimport type', '","Description":"\\"Created root layout', 'layout.tsx')
