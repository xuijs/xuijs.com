deploy:
	git push joyent master

min:
	java -jar ~/Repo/yuicompressor-2.4.2/build/yuicompressor-2.4.2.jar ./public/app.css -o ./public/app.min.css

# i recognize this could be better...
# the only thing better than better is being done
copy-docs:
	cp ./../xui/doc/base.js.html ./views/basics.ejs
	cp ./../xui/doc/js_dom.js.html ./views/dom.ejs 
	cp ./../xui/doc/js_event.js.html ./views/event.ejs
	cp ./../xui/doc/js_fx.js.html ./views/fx.ejs
	cp ./../xui/doc/js_style.js.html ./views/style.ejs
	cp ./../xui/doc/js_xhr.js.html ./views/xhr.ejs

.PHONY: all 
