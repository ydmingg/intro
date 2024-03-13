
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35731/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var home = {
    index: "<div class=\"home font-size-28 font-weight-xl color-gray-600 p-40\">\u9875\u9762\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85\uFF01</div>",
};

var check = function (eleid) {
    var ele = document.getElementById(eleid);
    return ele ? true : false;
};
var mount = function (eleid, codes) {
    var ele = document.getElementById(eleid);
    ele.innerHTML = codes;
};
var ele = {
    check: check,
    mount: mount
};

var LEFT_DELIMITER = "{{";
var RIGHT_DELIMITER = "}}";
var FOR_CYCLE = "v-for";
var CHECK_MARK = function (ele) {
    if (ele == undefined) {
        return "";
    }
    if (ele.getAttribute("v-if") != undefined) {
        return "if";
    }
    if (ele.getAttribute("v-else-if") != undefined) {
        return "elseif";
    }
    if (ele.getAttribute("v-else") != undefined) {
        return "else";
    }
    if (ele.getAttribute("v-for") != undefined) {
        return "for";
    }
    return "";
};
var mark = {
    LEFT_DELIMITER: LEFT_DELIMITER,
    RIGHT_DELIMITER: RIGHT_DELIMITER,
    FOR_CYCLE: FOR_CYCLE,
    CHECK_MARK: CHECK_MARK
};

var global_data;
var parseIf = function (eles, data) {
    var attr_name = eles[0].getAttribute("v-if").split("==")[0];
    var attr_val = eles[0].getAttribute("v-if").split("==")[1];
    global_data = new Map(Object.entries(data));
    var match_val = global_data.get(attr_name);
    if (match_val == attr_val) {
        eles[0].removeAttribute("v-if");
        return _reflect_data(eles[0].outerHTML);
    }
    for (var index = 1; index < eles.length - 1; index++) {
        attr_val = eles[index].getAttribute("v-else-if").split("==")[1];
        if (match_val == attr_val) {
            eles[index].removeAttribute("v-else-if");
            return _reflect_data(eles[index].outerHTML);
        }
    }
    eles[(eles.length - 1)].removeAttribute("v-else");
    return _reflect_data(eles[(eles.length - 1)].outerHTML);
};
var parseFor = function (eles, data) {
    global_data = new Map(Object.entries(data));
    return _reflect_data(eles.outerHTML);
};
var parseNormal = function (eles, data) {
    global_data = new Map(Object.entries(data));
    return _reflect_data(eles.outerHTML);
};
var _render_data = function (keys, words) {
    if (global_data.get(words) != undefined) {
        return global_data.get(words);
    }
    return keys;
};
var _reflect_data = function (htmlcodes) {
    return htmlcodes.replace(new RegExp("{{\\s*([a-zA-Z\d_]+)\\s*}}", "g"), _render_data);
};
var process = {
    parseIf: parseIf,
    parseFor: parseFor,
    parseNormal: parseNormal
};

var _renderList = function (nodes, data) {
    var htmlstr = "";
    for (var index = 0; index < nodes.length; index++) {
        var mark_key = mark.CHECK_MARK(nodes[index]);
        if (mark_key == "if") {
            var wait_parse_nodes = new Array();
            var temp_index = 0;
            wait_parse_nodes.push(nodes[index]);
            temp_index++;
            if (mark.CHECK_MARK(nodes[index + temp_index]) == "elseif") {
                do {
                    if (mark.CHECK_MARK(nodes[index + temp_index]) == "elseif") {
                        wait_parse_nodes.push(nodes[index + temp_index]);
                    }
                    temp_index++;
                } while (mark.CHECK_MARK(nodes[index + temp_index]) == "elseif");
            }
            if (mark.CHECK_MARK(nodes[index + temp_index]) == "else") {
                wait_parse_nodes.push(nodes[index + temp_index]);
                htmlstr = htmlstr + process.parseIf(wait_parse_nodes, data);
                index = index + temp_index;
                continue;
            }
            index = index + temp_index - 1;
            htmlstr = htmlstr + process.parseIf(wait_parse_nodes, data);
            continue;
        }
        if (mark_key == "") {
            htmlstr = htmlstr + process.parseNormal(nodes[index], data);
        }
    }
    return htmlstr;
};
var RenderHtml = function (str, data) {
    var parse = new DOMParser();
    var parsehtml = parse.parseFromString(str, "text/html");
    var nodes = parsehtml.body.children;
    return _renderList(nodes, data);
};
var HtmlFor = function (str, items) {
    var parse = new DOMParser();
    var parsehtml = parse.parseFromString(str, "text/html");
    var nodes = parsehtml.body.children;
    var htmlstr = "";
    for (var index = 0; index < items.length; index++) {
        for (var i = 0; i < nodes.length; i++) {
            htmlstr += process.parseNormal(nodes[i], items[index]);
        }
    }
    return htmlstr;
};
var html = {
    RenderHtml: RenderHtml,
    HtmlFor: HtmlFor
};

var tplhtml = function (codes, data) {
    return html.RenderHtml(codes, data);
};
var render = function (codes, data, app) {
    if (!ele.check(app)) {
        console.log("未找到挂载点");
        return;
    }
    var source = html.RenderHtml(codes, data);
    ele.mount(app, source);
};
var renderFor = function (codes, data, app) {
    if (!ele.check(app)) {
        console.log("未找到挂载点");
        return;
    }
    var source = html.HtmlFor(codes, data);
    ele.mount(app, source);
};
var nodeRender = function (codes, data, node) {
    var htmlSource = html.RenderHtml(codes, data);
    node.innerHTML = htmlSource;
};
var nodeRenderFor = function (codes, data, node) {
    var htmlSource = html.HtmlFor(codes, data);
    node.innerHTML = htmlSource;
};
var nodeAfterbeginRender = function (codes, data, node) {
    var htmlSource = html.RenderHtml(codes, data);
    node.insertAdjacentHTML('afterbegin', htmlSource);
};
var nodeBeforeendRender = function (codes, data, node) {
    var htmlSource = html.RenderHtml(codes, data);
    node.insertAdjacentHTML('beforeend', htmlSource);
};
var nodeAfterbeginRenderFor = function (codes, data, node) {
    var htmlSource = html.HtmlFor(codes, data);
    node.insertAdjacentHTML('afterbegin', htmlSource);
};
var nodeBeforeendRenderFor = function (codes, data, node) {
    var htmlSource = html.HtmlFor(codes, data);
    node.insertAdjacentHTML('beforeend', htmlSource);
};
var template = {
    render: render,
    renderFor: renderFor,
    tplhtml: tplhtml,
    nodeRender: nodeRender,
    nodeRenderFor: nodeRenderFor,
    nodeAfterbeginRender: nodeAfterbeginRender,
    nodeBeforeendRender: nodeBeforeendRender,
    nodeAfterbeginRenderFor: nodeAfterbeginRenderFor,
    nodeBeforeendRenderFor: nodeBeforeendRenderFor
};

function homePage() {
    template.render(home.index, {}, "app");
}

var pages = function () {
    homePage();
};

pages();
