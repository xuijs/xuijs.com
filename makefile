deploy:
	git push joyent master

min:
	java -jar ./lib/yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar ./public/grid.css -o ./public/grid.min.css
	java -jar ./lib/yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar ./public/app.css -o ./public/app.min.css
	java -jar ./lib/yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar ./public/prettify.css -o ./public/prettify.min.css
	java -jar ./lib/yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar ./public/prettify.js -o ./public/prettify.min.js

# i recognize this could be better...
# the only thing better than better is being done
copy-docs:
	mkdir -p ./views/docs
	cp ./../xui/doc/ejs/* ./views/docs

copy-downloads:
	cp ./../xui/lib/xui-2.0.0.js 		./public/downloads/xui-2.0.0.js	
	cp ./../xui/lib/xui-2.0.0.min.js	./public/downloads/xui-2.0.0.min.js
	cp ./../xui/lib/xui-bb-2.0.0.js		./public/downloads/xui-bb-2.0.0.js
	cp ./../xui/lib/xui-bb-2.0.0.min.js	./public/downloads/xui-bb-2.0.0.min.js
	cp ./../xui/lib/xui-ie-2.0.0.js		./public/downloads/xui-ie-2.0.0.js
	cp ./../xui/lib/xui-ie-2.0.0.min.js ./public/downloads/xui-ie-2.0.0.min.js

# warning: do not copy submodules around! that REALLY fucks up git
copy-tests:
	rm -rf ./public/tests/*
	mkdir -p ./public/tests/packages/qunit/qunit
	cp ./../xui/packages/qunit/qunit/qunit.css ./public/tests/packages/qunit/qunit/qunit.css
	cp ./../xui/packages/qunit/qunit/qunit.js ./public/tests/packages/qunit/qunit/qunit.js 
	cp -r ./../xui/spec ./public/tests/tests
	cp -r ./../xui/lib  ./public/tests/lib

.PHONY: all 
