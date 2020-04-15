install:
	npm install

start:
	node bin/brain-even.js
publish:
	npm publish --dry-run

lint:
	npx eslint .

lintfix: 
	npx eslint . --fix
	