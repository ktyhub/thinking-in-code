/**
 * 网页翻译工具 v1.8
 * https://github.com/xnx3/translate
 */
var translate = {
	/**
	 * 当前的翻译引擎。支持：
	 * google : 谷歌翻译
	 * baidu : 百度翻译
	 */
	translateEngine: 'google',
	/**
	 * google翻译使用的密钥
	 */
	apiKey: '',
	/**
	 * 源语言，默认是自动识别
	 * 中文: zh-CN
	 * 英语: en
	 * 更多语言请查阅 : https://cloud.google.com/translate/docs/languages
	 */
	from: 'zh-CN',
	/**
	 * 要翻译为的目标语言
	 * 中文: zh-CN
	 * 英语: en
	 * 更多语言请查阅 : https://cloud.google.com/translate/docs/languages
	 */
	to: 'en',
	/**
	 * 翻译时忽略的一些元素，不会翻译这些元素
	 * 传入元素的id或class，比如 id="xxx" 那么这里就传入 #xxx
	 * 如果是 class="test" 那么这里就传入 .test
	 * 多个选择器传入数组即可
	 */
	ignore: [
		'.md-footer-copyright',
		'.md-source__repository',
		'pre',
		'code',
		'.language-switcher',
		'.bpmn-btn svg',
		'.no-translate'
	],
	/**
	 * 当前页面中被翻译过的元素的class标记，会自动加上这个class
	 */
	translateFlag: 'translate-element',
	/**
	 * 设置Cookie的过期时间，单位是秒
	 * 默认是24小时，也就是86400秒
	 */
	cookieExpiresTime: 86400,
	/**
	 * 初始化并进行翻译
	 * @param {Object} args 可传入参数覆盖默认参数值
	 */
	execute: function(args) {
		if(args != null){
			for(var key in args){
				if(this[key] != null){
					this[key] = args[key];
				}
			}
		}

		// 首先判断是否已经有翻译记录
		var translateCookieValue = this.getCookie('translateState');
		if(translateCookieValue == null || translateCookieValue.length == 0) {
			// 没有，默认是关闭状态，不翻译
		} else {
			// 有，那就将当前页面翻译过来
			this.translatePage();
		}

		// 将翻译图标加入到页面中
		this.appendTranslateIcon();
	},
	/**
	 * 切换翻译/取消翻译
	 */
	toggle: function() {
		var translateCookieValue = this.getCookie('translateState');
		if(translateCookieValue == null || translateCookieValue.length == 0) {
			// 没有，默认是关闭状态，那么要设置为翻译状态
			this.setCookie('translateState', 'on');
			// 翻译当前页面
			this.translatePage();
			// 更改图标状态
			document.getElementById('translateIcon').src = 'https://res.zvo.cn/translate/translate_on.png';
		} else {
			// 有，那就将当前页面取消翻译
			this.setCookie('translateState', '');
			// 取消当前页面的翻译
			this.restore();
			// 更改图标状态
			document.getElementById('translateIcon').src = 'https://res.zvo.cn/translate/translate.png';
		}
	},
	/**
	 * 翻译整个页面的文本
	 */
	translatePage: function() {
		if(this.to.length == 0) {
			return;
		}

		// 获取页面中的所有元素
		var elements = document.querySelectorAll('body *');

		// 存放要翻译的元素
		var translateElementsArray = [];

		// 遍历所有元素
		for(var i = 0; i < elements.length; i++) {
			var element = elements[i];

			// 如果在忽略的元素里，那么跳过
			if(this.isIgnoreElement(element)) {
				continue;
			}

			// 已经被翻译过了，跳过
			if(element.classList.contains(this.translateFlag)) {
				continue;
			}

			// 只考虑有文本的节点
			if(element.childNodes.length == 1 && element.childNodes[0].nodeType == 3) {
				var text = element.innerText.trim();
				if(text.length > 0) {
					translateElementsArray.push(element);
				}
			}
		}

		// 进行翻译
		if(translateElementsArray.length > 0) {
			// 标记这些元素已经被翻译
			for(var i = 0; i < translateElementsArray.length; i++) {
				translateElementsArray[i].classList.add(this.translateFlag);
			}

			// 开始翻译
			if(this.translateEngine == 'google') {
				this.googleTranslate(translateElementsArray);
			} else if(this.translateEngine == 'baidu') {
				this.baiduTranslate(translateElementsArray);
			}
		}
	},
	/**
	 * 使用谷歌翻译
	 */
	googleTranslate: function(elements) {
		// 谷歌翻译API
		var apiUrl = 'https://translation.googleapis.com/language/translate/v2?key=' + this.apiKey;
		var self = this;

		// 将所有元素内容组成数组
		var textsArray = [];
		for(var i = 0; i < elements.length; i++) {
			textsArray.push(elements[i].innerText);
		}

		// 发送翻译请求
		var xhr = new XMLHttpRequest();
		xhr.open('POST', apiUrl, true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
				var response = JSON.parse(xhr.responseText);
				var translations = response.data.translations;

				// 将翻译结果应用到元素
				for(var i = 0; i < elements.length; i++) {
					if(translations[i]) {
						elements[i].setAttribute('data-original-text', elements[i].innerText);
						elements[i].innerText = translations[i].translatedText;
					}
				}
			}
		};

		var data = {
			q: textsArray,
			source: this.from.length > 0 ? this.from : 'auto',
			target: this.to
		};

		xhr.send(JSON.stringify(data));
	},
	/**
	 * 使用百度翻译
	 */
	baiduTranslate: function(elements) {
		// 这里使用免费API，仅作演示
		var apiUrl = 'https://fanyi-api.baidu.com/api/trans/vip/translate';
		// 实际使用请替换为您自己的百度翻译应用ID和密钥

		// 具体实现逻辑类似谷歌翻译...
	},
	/**
	 * 恢复页面为原始的未翻译状态
	 */
	restore: function() {
		// 获取所有被翻译过的元素
		var translatedElements = document.querySelectorAll('.' + this.translateFlag);

		// 恢复这些元素的原始文本
		for(var i = 0; i < translatedElements.length; i++) {
			var element = translatedElements[i];
			var originalText = element.getAttribute('data-original-text');
			if(originalText) {
				element.innerText = originalText;
			}
			element.classList.remove(this.translateFlag);
		}
	},
	/**
	 * 判断元素是否是被忽略的元素
	 */
	isIgnoreElement: function(element) {
		if(this.ignore.length == 0) {
			return false;
		}

		for(var i = 0; i < this.ignore.length; i++) {
			var selector = this.ignore[i];
			var ignoreElements = document.querySelectorAll(selector);
			for(var j = 0; j < ignoreElements.length; j++) {
				if(element == ignoreElements[j] || element.closest(selector)) {
					return true;
				}
			}
		}
		return false;
	},
	/**
	 * 在页面右下角添加一个翻译图标
	 */
	appendTranslateIcon: function() {
		var div = document.createElement('div');
		div.style.position = 'fixed';
		div.style.right = '50px';
		div.style.bottom = '50px';
		div.style.zIndex = '9999';
		div.style.cursor = 'pointer';

		var img = document.createElement('img');
		img.id = 'translateIcon';
		img.width = 32;
		img.height = 32;

		// 判断当前翻译状态
		var translateCookieValue = this.getCookie('translateState');
		if(translateCookieValue == null || translateCookieValue.length == 0) {
			img.src = 'https://res.zvo.cn/translate/translate.png';
		} else {
			img.src = 'https://res.zvo.cn/translate/translate_on.png';
		}

		var self = this;
		div.onclick = function() {
			self.toggle();
		};

		div.appendChild(img);
		document.body.appendChild(div);
	},
	/**
	 * 设置Cookie
	 */
	setCookie: function(name, value) {
		var exp = new Date();
		exp.setTime(exp.getTime() + this.cookieExpiresTime * 1000);
		document.cookie = name + '=' + value + ';expires=' + exp.toGMTString() + ';path=/';
	},
	/**
	 * 获取Cookie值
	 */
	getCookie: function(name) {
		var arr, reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
		if(arr = document.cookie.match(reg)) {
			return arr[2];
		} else {
			return null;
		}
	}
};
