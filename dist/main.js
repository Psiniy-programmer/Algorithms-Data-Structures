/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Lists/DoublyLinkedList.js":
/*!***************************************!*\
  !*** ./src/Lists/DoublyLinkedList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DoublyLinkedList; });\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.js */ \"./src/Lists/List.js\");\n\n\nclass Node {\n    /**\n     * Create new ones Node\n     * @param {number} value - data which node will contain\n     * @param {Node} next - link to the following node\n     * @param {Node} prev - link to the previous node\n     */\n    constructor(value, next, prev) {\n        this.value = value;\n        this.next = next;\n        this.prev = prev;\n    }\n}\n\nclass DoublyLinkedList extends _List_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    /**\n     * Create new empty List \n     */\n    constructor() {\n        super();\n    }\n    /**\n     * Insert new node at head\n     * @param {number} value - new node value\n     */\n    insertFirst(value) {\n        if (!this.size) this.head = this.tail = new Node(value, this.head, this.tail);\n        else {\n            let prev = this.head;\n            this.head = new Node(value, this.head, null);\n            prev.prev = this.head;\n        }\n        this.size++;\n    }\n    /**\n     * Insert new node at tail\n     * @param {number} value - new node value\n     */\n    insertLast(value) {\n        if (!this.head) return this.insertFirst(value);\n        let cur = this.head;\n        let prev;\n        while (cur.next) {\n            prev = cur;\n            cur = cur.next;\n        }\n        cur.next = this.tail = new Node(value, null, prev);\n        this.size++;\n    }\n    /**\n     * Insert new node at index in linked list\n     * @param {number} index - index by which the node will be added\n     * @param {number} value - new node value\n     */\n    insertAtIndex(index, value) {\n        if (index < 0 || index > this.size) throw Error(\"Index out of range\")\n        let cur = this.head;\n        let prev;\n\n        for (let i = 0; i < index; i++) {\n            prev = cur;\n            cur = cur.next;\n        }\n        prev.next = new Node(value, cur, prev);\n        cur.prev = prev.next;\n        this.size++;\n    }\n    /**\n     * Removing elemet at index from linked list\n     * @param {number} index - the index by which you want to delete the node\n     * @returns {Node.value} removed node\n     */\n    removeAtIndex(index) {\n        if (index < 0 || index > this.size) throw Error(\"Index out of range Linked List\");\n        let cur = this.head;\n        let prev;\n\n        for (let i = 0; i < index; i++) {\n            prev = cur;\n            cur = cur.next;\n        }\n        prev.next = cur.next;\n        if (index === this.size) this.tail = prev;\n        this.size--;\n    }\n    /**\n     * Sequential list output from head to tail;\n     */\n    showListFromHead() {\n        let cur = this.head;\n        for (let i = 0; i < this.size; i++) {\n            console.log(`[${i}] :`, cur.value);\n            cur = cur.next;\n        }\n    }\n    /**\n     * Sequential list output from tail to head;\n     */\n    showListFromTail() {\n        let cur = this.tail;\n        for (let i = this.size; i > 0; i--) {\n            console.log(`[${i-1}] :`, cur.value);\n            cur = cur.prev;\n        }\n    }\n    /**\n     * Reverse DoublyLinkedList nodes\n     * From Head->Tail to Tail->head\n     */\n    reverse() {\n        let cur = this.head;\n        let prev, next = null;\n        let saver;\n        this.tail = cur;\n        while (cur) {\n            saver = cur.next;\n            cur.next = prev;\n            cur.prev = next;\n            prev = cur;\n            next = cur.next;\n            cur = saver;\n        }\n        this.head = prev;\n    }\n}\n\n//# sourceURL=webpack:///./src/Lists/DoublyLinkedList.js?");

/***/ }),

/***/ "./src/Lists/LinkedList.js":
/*!*********************************!*\
  !*** ./src/Lists/LinkedList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LinkedList; });\n/* harmony import */ var _List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.js */ \"./src/Lists/List.js\");\n\n\nclass Node {\n    /**\n     * Create new ones Node\n     * @param {number} value - data which node will contain\n     * @param {Node} next - link to the following node\n     */\n    constructor(value, next) {\n        this.value = value;\n        this.next = next;\n    }\n}\n\nclass LinkedList extends _List_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    /**\n     * Create new empty List \n     */\n    constructor() {\n        super();\n    }\n    /**\n     * Insert new node at head\n     * @param {number} value - new node value\n     */\n    insertFirst(value) {\n        if (!this.size) this.head = this.tail = new Node(value, this.head);\n        else {\n            this.head = new Node(value, this.head);\n        }\n        this.size++;\n    }\n    /**\n     * Insert new node at tail\n     * @param {number} value - new node value\n     */\n    insertLast(value) {\n        if (!this.head) return this.insertFirst(value);\n        let node = new Node(value);\n        let cur = this.head;\n\n        while (cur.next) {\n            cur = cur.next;\n        }\n        cur.next = this.tail = node;\n        this.size++;\n    }\n    /**\n     * Insert new node at index in linked list\n     * @param {number} index - index by which the node will be added\n     * @param {number} value - new node value\n     */\n    insertAtIndex(index, value) {\n        if (index < 0 || index > this.size) throw Error(\"Index out of range\");\n        if (index === 0) return this.insertFirst(value);\n\n        let cur = this.head;\n        let temp;\n\n        for (let i = 0; i < this.size; i++) {\n            if (i + 1 === index) {\n                temp = cur.next;\n                cur.next = new Node(value, temp);\n                break;\n            }\n            cur = cur.next;\n        }\n        this.size++;\n    }\n    /**\n     * Removing elemet at index from linked list\n     * @param {number} index - the index by which you want to delete the node\n     * @returns {Node.value} removed node\n     */\n    removeAtIndex(index) {\n        if (index < 0 || index > this.size) throw Error(\"Index out of range Linked List\");\n        let cur = this.head;\n        let prevNode;\n\n        if (index === 0) {\n            this.size--;\n            return this.head = cur.next;\n        }\n\n        for (let i = 0; i < index; i++) {\n            prevNode = cur;\n            cur = cur.next;\n        }\n        prevNode.next = cur.next;\n        this.size--;\n        if (index === this.size) this.tail = prevNode;\n        return cur.value;\n    }\n    /**\n     * Sequential list output from head to tail;\n     */\n    showList() {\n        let cur = this.head;\n        for (let i = 0; i < this.size; i++) {\n            console.log(`[${i}] : ${cur.value}`);\n            cur = cur.next;\n        }\n    }\n    /**\n     * Reverse List nodes\n     * From Head->Tail to Tail->head\n     */\n    reverse() {\n        let cur = this.head;\n        let prev = null;\n        let saver;\n        this.tail = cur;\n        while (cur) {\n            saver = cur.next; // save next node\n            cur.next = prev; // change link cur.next to prev link\n            prev = cur; // save cur node for next step\n            cur = saver; // change cur node on saved node\n        }\n        this.head = prev;\n    }\n}\n\n//# sourceURL=webpack:///./src/Lists/LinkedList.js?");

/***/ }),

/***/ "./src/Lists/List.js":
/*!***************************!*\
  !*** ./src/Lists/List.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return List; });\nclass List {\n    /**\n     * Create new empty List \n     */\n    constructor() {\n        this.head = null;\n        this.tail = null;\n        this.size = 0;\n    }\n    /**\n     * Checking whether the list is empty\n     * @return {boolean}\n     */\n    isEmpty() {\n        return !this.size ? true : false;\n    }\n    /**\n     * @return {number} - Size of LinkedList\n     */\n    getSize() {\n        return this.size;\n    }\n    /**\n     * Delete all nodes of linked list\n     */\n    clearList() {\n        this.size = 0;\n        this.head = null;\n        this.tail = null;\n    }\n    /**\n     * Get the value of the tail of the list\n     * @returns {number} - Linked list tail value\n     */\n    getTail() {\n        console.log(`[tail] :`, this.tail.value);\n        return this.tail.value;\n    }\n    /**\n     * Get the value of the head of the list\n     * @returns {number} - Linked list head value\n     */\n    getHead() {\n        console.log(`[head] :`, this.head.value);\n        return this.head.value;\n    }\n    /**\n     * Get node value by index in linked list\n     * @param {number} index - index by which the cell will be found\n     * @returns {number} - Node value\n     */\n    getAtIndex(index) {\n        let cur = this.head;\n\n        for (let i = 0; i < this.size; i++) {\n            if (i === index) {\n                console.log(`[${index}] :`, cur.value);\n                return cur.value;\n            }\n            cur = cur.next;\n        }\n        throw Error(\"Node not found in linked list\");\n    }\n}\n\n//# sourceURL=webpack:///./src/Lists/List.js?");

/***/ }),

/***/ "./src/Queue/Queue.js":
/*!****************************!*\
  !*** ./src/Queue/Queue.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Queue; });\nclass Node {\n    /**\n     * Create new ones Node\n     * @param {number} value - data which node will contain\n     * @param {Node} next - link to the following node\n     */\n    constructor(value, next) {\n        this.value = value;\n        this.next = next;\n    }\n}\n\nclass Queue {\n    /**\n     * Creating a new one Queue\n     */\n    constructor() {\n        this.front = null;\n        this.size = 0;\n    }\n    /**\n     * Insert new item in queue\n     * @param {*} value \n     */\n    insert(value) {\n        this.front = new Node(value, this.front);\n        this.size++;\n    }\n    /**\n     * Take front item in queue and remove him\n     * @return {number}\n     */\n    removeFront() {\n        if (this.isEmpty) throw new Error('Queue is empty!');\n        let value = this.front.value;\n        this.front = this.front.next;\n        this.size--;\n        return value;\n    }\n    /**\n     * @return {Node} \n     */\n    getFront() {\n        if (this.isEmpty) throw new Error('Queue is empty!');\n        return this.front;\n    }\n    /**\n     * Show queue\n     */\n    show() {\n        if (this.isEmpty) return console.log('Queue is empty');\n        let cur = this.front;\n        for (let i = 0; i < this.size; i++) {\n            console.log(`[${i}] :`, cur.value);\n            cur = cur.next;\n        }\n    }\n    /**\n     * Delete all nodes of queue\n     */\n    clear() {\n        this.front = null;\n        this.size = 0;\n    }\n    /**\n     * Checking whether the queue is empty\n     * @return {boolean}\n     */\n    isEmpty() {\n        return !this.size ? true : false;\n    }\n}\n\n//# sourceURL=webpack:///./src/Queue/Queue.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Lists_LinkedList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lists/LinkedList */ \"./src/Lists/LinkedList.js\");\n/* harmony import */ var _Lists_DoublyLinkedList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lists/DoublyLinkedList */ \"./src/Lists/DoublyLinkedList.js\");\n/* harmony import */ var _Queue_Queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Queue/Queue */ \"./src/Queue/Queue.js\");\n\n\n\n\nconst queue = new _Queue_Queue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\nqueue.insert(2);\nqueue.insert(3);\nqueue.show();\nconsole.log(queue.removeFront())\nqueue.show();\nqueue.clear();\nqueue.removeFront();\nqueue.show();\n// const secList = new DoublyLinkedList();\n// secList.insertFirst(99);\n// secList.insertLast(0);\n// secList.insertAtIndex(1, 50);\n// secList.insertFirst(22);\n// secList.showListFromHead();\n// secList.reverse();\n// console.log('reverse')\n// secList.showListFromHead();\n// secList.getHead();\n// secList.getTail();\n\n// const List = new LinkedList();\n// List.insertFirst(1);\n// List.insertFirst(2);\n// List.insertFirst(3);\n// List.insertFirst(4);\n// List.insertFirst(5);\n// List.insertAtIndex(0, 10);\n// List.showList();\n// List.reverse();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });