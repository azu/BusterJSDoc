/**
 * Created by azu.
 * Date: 12/03/02 23:26
 * License: MIT License
 */

var buster = {};
buster._getGlobal = function(){
    function getGlobal(){
        return this;
    }

    return getGlobal();
}

buster.console = {};
buster.console.log = function(target){
}
/**
 * Returns a testContext that can be run with buster.testRunner.
 * @param name {String} name is an arbitrary string
 * @param tests {Object} The tests object can contain test functions, nested test cases, setup and teardown.
 */
buster.testCase = function testCase(name, tests){
}

// ------------------ Spec ----------------------//
// http://busterjs.org/docs/test/spec/index.html //
buster.spec = {};
buster.spec.expose = function(){
    var global = buster._getGlobal();
    var keys = Object.keys(buster.spec);
    for (var i = 0, len = keys.length; i < len; i++){
        var key = keys[i];
        global[key] = buster.spec[key];
    }
}
/**
 * Creates a specification
 * @param name {String}
 * @param callback {Object}
 * @see spec.describe
 */
buster.spec.describe = function describe(name, callback){

}
/**
 * callback functions are called before every test
 * @param callback
 */
function before(callback){
}
/**
 * callback functions are called after every test
 * @param callback
 */
function after(callback){
}
/**
 *
 * @param name
 * @param tests
 */
function should(name, tests){
}

// ---------------- buster.assertions -------------- //
// http://busterjs.org/docs/assertions/              //
buster.assertions = {};
/**
 * buster-eventEmitter.
 * @param event "pass","failure"
 * @param handler
 */
buster.assertions.on = function on(event, handler){

}
/**
 * Fails if actual is falsy (0, "", null, undefined, NaN).
 * @param actual actual is falsy (0, "", null, undefined, NaN)
 * @param [message]

 */
function assert(actual, message){

}
buster.assertions.assert = assert;
/**
 * Fails if actual is not the same object (===) as expected
 * @param expected
 * @param actual
 * @param [message]
 */
buster.assertions.assert.same = function same(expected, actual, message){

}
/**
 * Compares actual to expected property by property.
 * @param expected
 * @param actual
 * @param [message]
 */
buster.assertions.assert.equals = function equals(expected, actual, message){
}
/**
 * Fails if typeof object is not expected
 * @param object
 * @param expected typeof result
 * @param [message]
 */
buster.assertions.assert.typeOf = function typeOf(object, expected, message){
};
/**
 * Fails if object is undefined.
 * @param object
 * @param [message]
 */
buster.assertions.assert.defined = function defined(object, message){
};
/**
 * Fails if object is not null
 * @param object
 * @param [message]
 */
buster.assertions.assert.isNull = function isNull(object, message){
}
/**
 * Fails if matcher is not a partial match for actual
 * @param actual
 * @param matcher String,Boolean,Regexp,NUmber,Function,Object,DOM
 * @param [message]
 */
buster.assertions.assert.match = function match(actual, matcher, message){

}
/**
 * Fails if object is not an object or if it is null.
 * @param object
 * @param [message]
 */
buster.assertions.assert.isObject = function isObject(object, message){
}
/**
 * Fails if actual is not a function.
 * @param actual
 * @param [message]
 */
buster.assertions.assert.isFunction = function isFunction(actual, message){
};
/**
 * Fails if actual is not a Boolean.
 * @param actual
 * @param [message]
 */
buster.assertions.assert.isBoolean = function isBoolean(actual, message){
};
/**
 * Fails if actual is not a Number.
 * @param actual
 * @param [message]
 */
buster.assertions.assert.isNumber = function isNumber(actual, message){
};
/**
 * Fails if actual is not a Undefined.
 * @param actual
 * @param [message]
 */
buster.assertions.assert.isUndefined = function isUndefined(actual, message){
};
/**
 * Fails if actual is not a NaN.
 * @param actual
 * @param [message]
 */
buster.assertions.assert.isNaN = function isNaN(actual, message){
};
/**
 * Fails if actual is not a Array.
 * @param actual
 * @param [message]
 */
buster.assertions.assert.isArray = function isArray(actual, message){
};
/**
 * Fails if actual is not a ArrayLike.
 * @param actual
 * @param [message]
 */
buster.assertions.assert.isArrayLike = function isArrayLike(actual, message){
};
/**
 * Fails if callback does not throw an exception
 * @param callback {Function}
 * @param [type] Error Typo
 */

buster.assertions.assert.exception = function exception(callback, type){
}
/**
 * Fails if the element either does not specify a tagName property, or if its value is not a case-insensitive match with the expected tagName
 * @param element
 * @param tagName
 * @param [message]
 */
buster.assertions.assert.tagName = function tagName(element, tagName, message){

}
/**
 * Fails if the element either does not specify a className property, or if its value is not a space-separated list of all class names in classNames.
 * @param element
 * @param className
 * @param [message]
 */
buster.assertions.assert.className = function className(element, className, message){
}

// no document

buster.assertions.assert.hasPrototype = function hasPrototype(){
}
buster.assertions.assert.inDelta = function inDelta(){
}

// ---------------------- spy --------------------------//
/**
 * Fails if the spy has never been called.
 * @param spy
 * @param [message]
 */
var spy = sinon.spy();
buster.assertions.assert.called = function assert.called(spy, message){

}
/**
 * Fails if the spies were not called in the specified order.
 * @param spy
 */
buster.assertions.assert.callOrder = function callOrder(spy){

}
/**
 * Fails if the spy has never been called or if it was called more than once.
 * @param spy
 */
buster.assertions.assert.calledOnce = function calledOnce(spy){

};
/**
 * Only passes if the spy has been called exactly three times.
 * @param spy
 */
buster.assertions.assert.calledTwice = function calledTwice(spy){

};
/**
 * Passes if the spy was called exactly once and with the specified arguments.
 * @param spy
 * @param [arg1]
 */
buster.assertions.assert.calledWith = function calledWith(spy, arg1){

}
/**
 * Fails if actual is truthy.
 * @param actual
 * @param [message]
 */
function refute(actual, message){

}
buster.assertions.refute = refute;
// senseless...
(function(){

    var keys = Object.keys(buster.assertions.assert);
    for (var i = 0, len = keys.length; i < len; i++){
        var key = keys[i];
        buster.assertions.refute[key] = function(arg){
            return !buster.assertions.assert[key](arg);
        }
    }
})();
/**
 * Pass if actual is not the same object (===) as expected
 * @param expected
 * @param actual
 * @param [message]
 */
buster.assertions.refute.same = function same(expected, actual, message){

}
/**
 * Compares actual to expected property by property.
 * @param expected
 * @param actual
 * @param [message]
 */
buster.assertions.refute.equals = function equals(expected, actual, message){
}
/**
 * Pass if typeof object is not expected
 * @param object
 * @param expected typeof result
 * @param [message]
 */
buster.assertions.refute.typeOf = function typeOf(object, expected, message){
};
/**
 * Pass if object is undefined.
 * @param object
 * @param [message]
 */
buster.assertions.refute.defined = function defined(object, message){
};
/**
 * Pass if object is not null
 * @param object
 * @param [message]
 */
buster.assertions.refute.isNull = function isNull(object, message){
}
/**
 * Pass if matcher is not a partial match for actual
 * @param actual
 * @param matcher String,Boolean,Regexp,NUmber,Function,Object,DOM
 * @param [message]
 */
buster.assertions.refute.match = function match(actual, matcher, message){

}
/**
 * Pass if object is not an object or if it is null.
 * @param object
 * @param [message]
 */
buster.assertions.refute.isObject = function isObject(object, message){
}
/**
 * Pass if actual is not a function.
 * @param actual
 * @param [message]
 */
buster.assertions.refute.isFunction = function isFunction(actual, message){
};
/**
 * Pass if actual is not a Boolean.
 * @param actual
 * @param [message]
 */
buster.assertions.refute.isBoolean = function isBoolean(actual, message){
};
/**
 * Pass if actual is not a Number.
 * @param actual
 * @param [message]
 */
buster.assertions.refute.isNumber = function isNumber(actual, message){
};
/**
 * Pass if actual is not a Undefined.
 * @param actual
 * @param [message]
 */
buster.assertions.refute.isUndefined = function isUndefined(actual, message){
};
/**
 * Pass if actual is not a NaN.
 * @param actual
 * @param [message]
 */
buster.assertions.refute.isNaN = function isNaN(actual, message){
};
/**
 * Pass if actual is not a Array.
 * @param actual
 * @param [message]
 */
buster.assertions.refute.isArray = function isArray(actual, message){
};
/**
 * Pass if actual is not a ArrayLike.
 * @param actual
 * @param [message]
 */
buster.assertions.refute.isArrayLike = function isArrayLike(actual, message){
};
/**
 * Pass if callback does not throw an exception
 * @param callback {Function}
 * @param [type] Error Typo
 */

buster.assertions.refute.exception = function exception(callback, type){
}
/**
 * Pass if the element either does not specify a tagName property, or if its value is not a case-insensitive match with the expected tagName
 * @param element
 * @param tagName
 * @param [message]
 */
buster.assertions.refute.tagName = function tagName(element, tagName, message){

}
/**
 * Pass if the element either does not specify a className property, or if its value is not a space-separated list of all class names in classNames.
 * @param element
 * @param className
 * @param [message]
 */
buster.assertions.refute.className = function className(element, className, message){
}

// no document

buster.assertions.refute.hasPrototype = function hasPrototype(){
}
buster.assertions.refute.inDelta = function inDelta(){
}

// ---------------------- spy --------------------------//
/**
 * Pass if the spy has never been called.
 * @param spy
 * @param [message]
 */
buster.assertions.refute.called = function assert.called(spy, message){

}
/**
 * Pass if the spies were not called in the specified order.
 * @param spy
 */
buster.assertions.refute.callOrder = function callOrder(spy){

}
/**
 * Pass if the spy has never been called or if it was called more than once.
 * @param spy
 */
buster.assertions.refute.calledOnce = function calledOnce(spy){

};
/**
 * Only passes if the spy has been called exactly three times.
 * @param spy
 */
buster.assertions.refute.calledTwice = function calledTwice(spy){

};
/**
 * Fail if the spy was called exactly once and with the specified arguments.
 * @param spy
 * @param [arg1]
 */
buster.assertions.refute.calledWith = function calledWith(spy, arg1){

}
// -------------- Method --------------------- //
buster.assertions.fail = function fail(message){
}
/**
 * buster-format
 * @param object
 */
buster.assertions.format = function format(object){

}
/**
 * Add a custom assertion
 * @param name
 * @param options
 */
buster.assertions.add = function add(name, options){
    buster.assertions[name] = options;
}
// ------------- Supporting utilities -------------- //
/**
 * Returns true if the object is a DOM node.
 * @param object
 */
buster.isNode = function isNode(object){

}
/**
 * Returns true if the object is a DOM element.
 * @param object
 */
buster.isElement = function isElement(object){

}
/**
 * Returns true if the argument is an arguments object.
 * @param object
 */
buster.isArguments = function isArguments(object){

}
/**
 * Cross-browser implementation of Object.keys.
 * @param object
 */
buster.keys = function keys(object){

}
// ------------------ Properties ----------------//
/**
 * he assertion counter can be reset to any number at your convenience.
 * @param num
 */
buster.assertions.count = function count(num){

}
buster.assertions.throwOnFailure = function throwOnFailure(boolean){

}

// ------------------- Core ---------------------- //
// http://busterjs.org/docs/core/
/**
 * Binds a function to an object, such that its this value is fixed regardless of how it's called
 * Function.prototype.bind
 * @param object
 * @param methodOrString
 */
buster.bind = function bind(object, methodOrString){

}
/**
 * Cross-browser implementation of Object.create
 * @param object
 */
buster.create = function create(object){

}
/**
 * Extends the target object by copying all the properties of all the sources onto it.
 * @param target
 * @param [source1]
 */
buster.extend = function extend(target, source1){

}
/**
 * Calls the callback on the next tick of the event loop.
 * @param callback
 */
buster.nextTick = function nextTick(callback){

}
/**
 * Returns the name of the function, or an empty string if the function is a falsy value.
 * 1. Return func.displayName
 * 2. Return func.name
 * 3. Attempt to infer the name through func.toString()
 * @param func
 */
buster.functionName = function functionName(func){

}


// ------------------- Event emitter ----------------- //
buster.eventEmitter = require("buster-event-emitter");
var emitter = buster.eventEmitter.create();
/**
 * Alias to addListener.
 * @param event
 * @param listener
 * @param [thisObject]
 */
emitter.on = function on(event, listener, thisObject){

}
/**
 * Alias to addListener.
 * @param event
 * @param listener
 * @param [thisObject]
 */
emitter.once = function once(event, listener, thisObject){

}
/**
 * Emits the event, triggering all the listeners with the given arguments.
 * @param event
 * @param [arg1]
 */
emitter.emit = function emit(event, arg1){
}
/**
 * Removes the listener for that event.
 * @param event
 * @param listener
 */
emitter.removeLister = function removeListener(event, listener){

}
/**
 * Tests if the event emitter has the given listener for that event, optionally a listener for the given thisObject.
 * @param event
 * @param listener
 * @param [thisObject]
 */
emitter.hasListener = function hasListener(event, listener, thisObject){

}

