(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Tangram = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/array/from"), __esModule: true };
},{"core-js/library/fn/array/from":26}],2:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":27}],3:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/is-iterable"), __esModule: true };
},{"core-js/library/fn/is-iterable":28}],4:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/map"), __esModule: true };
},{"core-js/library/fn/map":29}],5:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/math/log2"), __esModule: true };
},{"core-js/library/fn/math/log2":30}],6:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":31}],7:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":32}],8:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":33}],9:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":34}],10:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/freeze"), __esModule: true };
},{"core-js/library/fn/object/freeze":35}],11:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/get-own-property-descriptor"), __esModule: true };
},{"core-js/library/fn/object/get-own-property-descriptor":36}],12:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":37}],13:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":38}],14:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/promise"), __esModule: true };
},{"core-js/library/fn/promise":39}],15:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":40}],16:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":41}],17:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":42}],18:[function(_dereq_,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],19:[function(_dereq_,module,exports){
"use strict";

var _Object$defineProperty = _dereq_("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":9}],20:[function(_dereq_,module,exports){
"use strict";

var _Object$defineProperty = _dereq_("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = function (obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":9}],21:[function(_dereq_,module,exports){
"use strict";

var _Object$getOwnPropertyDescriptor = _dereq_("babel-runtime/core-js/object/get-own-property-descriptor")["default"];

exports["default"] = function get(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;
    _again = false;
    if (object === null) object = Function.prototype;

    var desc = _Object$getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        _x = parent;
        _x2 = property;
        _x3 = receiver;
        _again = true;
        desc = parent = undefined;
        continue _function;
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/get-own-property-descriptor":11}],22:[function(_dereq_,module,exports){
"use strict";

var _Object$create = _dereq_("babel-runtime/core-js/object/create")["default"];

var _Object$setPrototypeOf = _dereq_("babel-runtime/core-js/object/set-prototype-of")["default"];

exports["default"] = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

exports.__esModule = true;
},{"babel-runtime/core-js/object/create":7,"babel-runtime/core-js/object/set-prototype-of":13}],23:[function(_dereq_,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],24:[function(_dereq_,module,exports){
"use strict";

var _getIterator = _dereq_("babel-runtime/core-js/get-iterator")["default"];

var _isIterable = _dereq_("babel-runtime/core-js/is-iterable")["default"];

exports["default"] = (function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (_isIterable(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/is-iterable":3}],25:[function(_dereq_,module,exports){
"use strict";

var _Array$from = _dereq_("babel-runtime/core-js/array/from")["default"];

exports["default"] = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return _Array$from(arr);
  }
};

exports.__esModule = true;
},{"babel-runtime/core-js/array/from":1}],26:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.string.iterator');
_dereq_('../../modules/es6.array.from');
module.exports = _dereq_('../../modules/$.core').Array.from;
},{"../../modules/$.core":51,"../../modules/es6.array.from":103,"../../modules/es6.string.iterator":115}],27:[function(_dereq_,module,exports){
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.string.iterator');
module.exports = _dereq_('../modules/core.get-iterator');
},{"../modules/core.get-iterator":101,"../modules/es6.string.iterator":115,"../modules/web.dom.iterable":119}],28:[function(_dereq_,module,exports){
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.string.iterator');
module.exports = _dereq_('../modules/core.is-iterable');
},{"../modules/core.is-iterable":102,"../modules/es6.string.iterator":115,"../modules/web.dom.iterable":119}],29:[function(_dereq_,module,exports){
_dereq_('../modules/es6.object.to-string');
_dereq_('../modules/es6.string.iterator');
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.map');
_dereq_('../modules/es7.map.to-json');
module.exports = _dereq_('../modules/$.core').Map;
},{"../modules/$.core":51,"../modules/es6.map":105,"../modules/es6.object.to-string":112,"../modules/es6.string.iterator":115,"../modules/es7.map.to-json":117,"../modules/web.dom.iterable":119}],30:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.math.log2');
module.exports = _dereq_('../../modules/$.core').Math.log2;
},{"../../modules/$.core":51,"../../modules/es6.math.log2":106}],31:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.assign');
module.exports = _dereq_('../../modules/$.core').Object.assign;
},{"../../modules/$.core":51,"../../modules/es6.object.assign":107}],32:[function(_dereq_,module,exports){
var $ = _dereq_('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":76}],33:[function(_dereq_,module,exports){
var $ = _dereq_('../../modules/$');
module.exports = function defineProperties(T, D){
  return $.setDescs(T, D);
};
},{"../../modules/$":76}],34:[function(_dereq_,module,exports){
var $ = _dereq_('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":76}],35:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.freeze');
module.exports = _dereq_('../../modules/$.core').Object.freeze;
},{"../../modules/$.core":51,"../../modules/es6.object.freeze":108}],36:[function(_dereq_,module,exports){
var $ = _dereq_('../../modules/$');
_dereq_('../../modules/es6.object.get-own-property-descriptor');
module.exports = function getOwnPropertyDescriptor(it, key){
  return $.getDesc(it, key);
};
},{"../../modules/$":76,"../../modules/es6.object.get-own-property-descriptor":109}],37:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.keys');
module.exports = _dereq_('../../modules/$.core').Object.keys;
},{"../../modules/$.core":51,"../../modules/es6.object.keys":110}],38:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.set-prototype-of');
module.exports = _dereq_('../../modules/$.core').Object.setPrototypeOf;
},{"../../modules/$.core":51,"../../modules/es6.object.set-prototype-of":111}],39:[function(_dereq_,module,exports){
_dereq_('../modules/es6.object.to-string');
_dereq_('../modules/es6.string.iterator');
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.promise');
module.exports = _dereq_('../modules/$.core').Promise;
},{"../modules/$.core":51,"../modules/es6.object.to-string":112,"../modules/es6.promise":113,"../modules/es6.string.iterator":115,"../modules/web.dom.iterable":119}],40:[function(_dereq_,module,exports){
_dereq_('../modules/es6.object.to-string');
_dereq_('../modules/es6.string.iterator');
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.set');
_dereq_('../modules/es7.set.to-json');
module.exports = _dereq_('../modules/$.core').Set;
},{"../modules/$.core":51,"../modules/es6.object.to-string":112,"../modules/es6.set":114,"../modules/es6.string.iterator":115,"../modules/es7.set.to-json":118,"../modules/web.dom.iterable":119}],41:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.symbol');
_dereq_('../../modules/es6.object.to-string');
module.exports = _dereq_('../../modules/$.core').Symbol;
},{"../../modules/$.core":51,"../../modules/es6.object.to-string":112,"../../modules/es6.symbol":116}],42:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.string.iterator');
_dereq_('../../modules/web.dom.iterable');
module.exports = _dereq_('../../modules/$.wks')('iterator');
},{"../../modules/$.wks":99,"../../modules/es6.string.iterator":115,"../../modules/web.dom.iterable":119}],43:[function(_dereq_,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],44:[function(_dereq_,module,exports){
module.exports = function(){ /* empty */ };
},{}],45:[function(_dereq_,module,exports){
var isObject = _dereq_('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":69}],46:[function(_dereq_,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = _dereq_('./$.cof')
  , TAG = _dereq_('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":47,"./$.wks":99}],47:[function(_dereq_,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],48:[function(_dereq_,module,exports){
'use strict';
var $            = _dereq_('./$')
  , hide         = _dereq_('./$.hide')
  , redefineAll  = _dereq_('./$.redefine-all')
  , ctx          = _dereq_('./$.ctx')
  , strictNew    = _dereq_('./$.strict-new')
  , defined      = _dereq_('./$.defined')
  , forOf        = _dereq_('./$.for-of')
  , $iterDefine  = _dereq_('./$.iter-define')
  , step         = _dereq_('./$.iter-step')
  , ID           = _dereq_('./$.uid')('id')
  , $has         = _dereq_('./$.has')
  , isObject     = _dereq_('./$.is-object')
  , setSpecies   = _dereq_('./$.set-species')
  , DESCRIPTORS  = _dereq_('./$.descriptors')
  , isExtensible = Object.isExtensible || isObject
  , SIZE         = DESCRIPTORS ? '_s' : 'size'
  , id           = 0;

var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!$has(it, ID)){
    // can't set id to frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
};

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      strictNew(that, C, NAME);
      that._i = $.create(null); // index
      that._f = undefined;      // first entry
      that._l = undefined;      // last entry
      that[SIZE] = 0;           // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./$":76,"./$.ctx":52,"./$.defined":53,"./$.descriptors":54,"./$.for-of":59,"./$.has":62,"./$.hide":63,"./$.is-object":69,"./$.iter-define":72,"./$.iter-step":74,"./$.redefine-all":83,"./$.set-species":87,"./$.strict-new":91,"./$.uid":98}],49:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var forOf   = _dereq_('./$.for-of')
  , classof = _dereq_('./$.classof');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    var arr = [];
    forOf(this, false, arr.push, arr);
    return arr;
  };
};
},{"./$.classof":46,"./$.for-of":59}],50:[function(_dereq_,module,exports){
'use strict';
var $              = _dereq_('./$')
  , global         = _dereq_('./$.global')
  , $export        = _dereq_('./$.export')
  , fails          = _dereq_('./$.fails')
  , hide           = _dereq_('./$.hide')
  , redefineAll    = _dereq_('./$.redefine-all')
  , forOf          = _dereq_('./$.for-of')
  , strictNew      = _dereq_('./$.strict-new')
  , isObject       = _dereq_('./$.is-object')
  , setToStringTag = _dereq_('./$.set-to-string-tag')
  , DESCRIPTORS    = _dereq_('./$.descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
  } else {
    C = wrapper(function(target, iterable){
      strictNew(target, C, NAME);
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)$.setDesc(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./$":76,"./$.descriptors":54,"./$.export":57,"./$.fails":58,"./$.for-of":59,"./$.global":61,"./$.hide":63,"./$.is-object":69,"./$.redefine-all":83,"./$.set-to-string-tag":88,"./$.strict-new":91}],51:[function(_dereq_,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],52:[function(_dereq_,module,exports){
// optional / simple context binding
var aFunction = _dereq_('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":43}],53:[function(_dereq_,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],54:[function(_dereq_,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !_dereq_('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":58}],55:[function(_dereq_,module,exports){
var isObject = _dereq_('./$.is-object')
  , document = _dereq_('./$.global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./$.global":61,"./$.is-object":69}],56:[function(_dereq_,module,exports){
// all enumerable object keys, includes symbols
var $ = _dereq_('./$');
module.exports = function(it){
  var keys       = $.getKeys(it)
    , getSymbols = $.getSymbols;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = $.isEnum
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
  }
  return keys;
};
},{"./$":76}],57:[function(_dereq_,module,exports){
var global    = _dereq_('./$.global')
  , core      = _dereq_('./$.core')
  , ctx       = _dereq_('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":51,"./$.ctx":52,"./$.global":61}],58:[function(_dereq_,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],59:[function(_dereq_,module,exports){
var ctx         = _dereq_('./$.ctx')
  , call        = _dereq_('./$.iter-call')
  , isArrayIter = _dereq_('./$.is-array-iter')
  , anObject    = _dereq_('./$.an-object')
  , toLength    = _dereq_('./$.to-length')
  , getIterFn   = _dereq_('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":45,"./$.ctx":52,"./$.is-array-iter":67,"./$.iter-call":70,"./$.to-length":96,"./core.get-iterator-method":100}],60:[function(_dereq_,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = _dereq_('./$.to-iobject')
  , getNames  = _dereq_('./$').getNames
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return getNames(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.get = function getOwnPropertyNames(it){
  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
  return getNames(toIObject(it));
};
},{"./$":76,"./$.to-iobject":95}],61:[function(_dereq_,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],62:[function(_dereq_,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],63:[function(_dereq_,module,exports){
var $          = _dereq_('./$')
  , createDesc = _dereq_('./$.property-desc');
module.exports = _dereq_('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":76,"./$.descriptors":54,"./$.property-desc":82}],64:[function(_dereq_,module,exports){
module.exports = _dereq_('./$.global').document && document.documentElement;
},{"./$.global":61}],65:[function(_dereq_,module,exports){
// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};
},{}],66:[function(_dereq_,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _dereq_('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":47}],67:[function(_dereq_,module,exports){
// check on default Array iterator
var Iterators  = _dereq_('./$.iterators')
  , ITERATOR   = _dereq_('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":75,"./$.wks":99}],68:[function(_dereq_,module,exports){
// 7.2.2 IsArray(argument)
var cof = _dereq_('./$.cof');
module.exports = Array.isArray || function(arg){
  return cof(arg) == 'Array';
};
},{"./$.cof":47}],69:[function(_dereq_,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],70:[function(_dereq_,module,exports){
// call something on iterator step with safe closing on error
var anObject = _dereq_('./$.an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./$.an-object":45}],71:[function(_dereq_,module,exports){
'use strict';
var $              = _dereq_('./$')
  , descriptor     = _dereq_('./$.property-desc')
  , setToStringTag = _dereq_('./$.set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_dereq_('./$.hide')(IteratorPrototype, _dereq_('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./$":76,"./$.hide":63,"./$.property-desc":82,"./$.set-to-string-tag":88,"./$.wks":99}],72:[function(_dereq_,module,exports){
'use strict';
var LIBRARY        = _dereq_('./$.library')
  , $export        = _dereq_('./$.export')
  , redefine       = _dereq_('./$.redefine')
  , hide           = _dereq_('./$.hide')
  , has            = _dereq_('./$.has')
  , Iterators      = _dereq_('./$.iterators')
  , $iterCreate    = _dereq_('./$.iter-create')
  , setToStringTag = _dereq_('./$.set-to-string-tag')
  , getProto       = _dereq_('./$').getProto
  , ITERATOR       = _dereq_('./$.wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./$":76,"./$.export":57,"./$.has":62,"./$.hide":63,"./$.iter-create":71,"./$.iterators":75,"./$.library":78,"./$.redefine":84,"./$.set-to-string-tag":88,"./$.wks":99}],73:[function(_dereq_,module,exports){
var ITERATOR     = _dereq_('./$.wks')('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ safe = true; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};
},{"./$.wks":99}],74:[function(_dereq_,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],75:[function(_dereq_,module,exports){
module.exports = {};
},{}],76:[function(_dereq_,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],77:[function(_dereq_,module,exports){
var $         = _dereq_('./$')
  , toIObject = _dereq_('./$.to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = $.getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./$":76,"./$.to-iobject":95}],78:[function(_dereq_,module,exports){
module.exports = true;
},{}],79:[function(_dereq_,module,exports){
var global    = _dereq_('./$.global')
  , macrotask = _dereq_('./$.task').set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = _dereq_('./$.cof')(process) == 'process'
  , head, last, notify;

var flush = function(){
  var parent, domain, fn;
  if(isNode && (parent = process.domain)){
    process.domain = null;
    parent.exit();
  }
  while(head){
    domain = head.domain;
    fn     = head.fn;
    if(domain)domain.enter();
    fn(); // <- currently we use it only for Promise - try / catch not required
    if(domain)domain.exit();
    head = head.next;
  } last = undefined;
  if(parent)parent.enter();
};

// Node.js
if(isNode){
  notify = function(){
    process.nextTick(flush);
  };
// browsers with MutationObserver
} else if(Observer){
  var toggle = 1
    , node   = document.createTextNode('');
  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
  notify = function(){
    node.data = toggle = -toggle;
  };
// environments with maybe non-completely correct, but existent Promise
} else if(Promise && Promise.resolve){
  notify = function(){
    Promise.resolve().then(flush);
  };
// for other environments - macrotask based on:
// - setImmediate
// - MessageChannel
// - window.postMessag
// - onreadystatechange
// - setTimeout
} else {
  notify = function(){
    // strange IE + webpack dev server bug - use .call(global)
    macrotask.call(global, flush);
  };
}

module.exports = function asap(fn){
  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
  if(last)last.next = task;
  if(!head){
    head = task;
    notify();
  } last = task;
};
},{"./$.cof":47,"./$.global":61,"./$.task":93}],80:[function(_dereq_,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var $        = _dereq_('./$')
  , toObject = _dereq_('./$.to-object')
  , IObject  = _dereq_('./$.iobject');

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = _dereq_('./$.fails')(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;
},{"./$":76,"./$.fails":58,"./$.iobject":66,"./$.to-object":97}],81:[function(_dereq_,module,exports){
// most Object methods by ES6 should accept primitives
var $export = _dereq_('./$.export')
  , core    = _dereq_('./$.core')
  , fails   = _dereq_('./$.fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":51,"./$.export":57,"./$.fails":58}],82:[function(_dereq_,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],83:[function(_dereq_,module,exports){
var redefine = _dereq_('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":84}],84:[function(_dereq_,module,exports){
module.exports = _dereq_('./$.hide');
},{"./$.hide":63}],85:[function(_dereq_,module,exports){
// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};
},{}],86:[function(_dereq_,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var getDesc  = _dereq_('./$').getDesc
  , isObject = _dereq_('./$.is-object')
  , anObject = _dereq_('./$.an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = _dereq_('./$.ctx')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./$":76,"./$.an-object":45,"./$.ctx":52,"./$.is-object":69}],87:[function(_dereq_,module,exports){
'use strict';
var core        = _dereq_('./$.core')
  , $           = _dereq_('./$')
  , DESCRIPTORS = _dereq_('./$.descriptors')
  , SPECIES     = _dereq_('./$.wks')('species');

module.exports = function(KEY){
  var C = core[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":76,"./$.core":51,"./$.descriptors":54,"./$.wks":99}],88:[function(_dereq_,module,exports){
var def = _dereq_('./$').setDesc
  , has = _dereq_('./$.has')
  , TAG = _dereq_('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":76,"./$.has":62,"./$.wks":99}],89:[function(_dereq_,module,exports){
var global = _dereq_('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":61}],90:[function(_dereq_,module,exports){
// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = _dereq_('./$.an-object')
  , aFunction = _dereq_('./$.a-function')
  , SPECIES   = _dereq_('./$.wks')('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};
},{"./$.a-function":43,"./$.an-object":45,"./$.wks":99}],91:[function(_dereq_,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],92:[function(_dereq_,module,exports){
var toInteger = _dereq_('./$.to-integer')
  , defined   = _dereq_('./$.defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":53,"./$.to-integer":94}],93:[function(_dereq_,module,exports){
var ctx                = _dereq_('./$.ctx')
  , invoke             = _dereq_('./$.invoke')
  , html               = _dereq_('./$.html')
  , cel                = _dereq_('./$.dom-create')
  , global             = _dereq_('./$.global')
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listner = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(_dereq_('./$.cof')(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listner;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listner, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};
},{"./$.cof":47,"./$.ctx":52,"./$.dom-create":55,"./$.global":61,"./$.html":64,"./$.invoke":65}],94:[function(_dereq_,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],95:[function(_dereq_,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = _dereq_('./$.iobject')
  , defined = _dereq_('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":53,"./$.iobject":66}],96:[function(_dereq_,module,exports){
// 7.1.15 ToLength
var toInteger = _dereq_('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":94}],97:[function(_dereq_,module,exports){
// 7.1.13 ToObject(argument)
var defined = _dereq_('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":53}],98:[function(_dereq_,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],99:[function(_dereq_,module,exports){
var store  = _dereq_('./$.shared')('wks')
  , uid    = _dereq_('./$.uid')
  , Symbol = _dereq_('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":61,"./$.shared":89,"./$.uid":98}],100:[function(_dereq_,module,exports){
var classof   = _dereq_('./$.classof')
  , ITERATOR  = _dereq_('./$.wks')('iterator')
  , Iterators = _dereq_('./$.iterators');
module.exports = _dereq_('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":46,"./$.core":51,"./$.iterators":75,"./$.wks":99}],101:[function(_dereq_,module,exports){
var anObject = _dereq_('./$.an-object')
  , get      = _dereq_('./core.get-iterator-method');
module.exports = _dereq_('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":45,"./$.core":51,"./core.get-iterator-method":100}],102:[function(_dereq_,module,exports){
var classof   = _dereq_('./$.classof')
  , ITERATOR  = _dereq_('./$.wks')('iterator')
  , Iterators = _dereq_('./$.iterators');
module.exports = _dereq_('./$.core').isIterable = function(it){
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    || Iterators.hasOwnProperty(classof(O));
};
},{"./$.classof":46,"./$.core":51,"./$.iterators":75,"./$.wks":99}],103:[function(_dereq_,module,exports){
'use strict';
var ctx         = _dereq_('./$.ctx')
  , $export     = _dereq_('./$.export')
  , toObject    = _dereq_('./$.to-object')
  , call        = _dereq_('./$.iter-call')
  , isArrayIter = _dereq_('./$.is-array-iter')
  , toLength    = _dereq_('./$.to-length')
  , getIterFn   = _dereq_('./core.get-iterator-method');
$export($export.S + $export.F * !_dereq_('./$.iter-detect')(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , $$      = arguments
      , $$len   = $$.length
      , mapfn   = $$len > 1 ? $$[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        result[index] = mapping ? mapfn(O[index], index) : O[index];
      }
    }
    result.length = index;
    return result;
  }
});

},{"./$.ctx":52,"./$.export":57,"./$.is-array-iter":67,"./$.iter-call":70,"./$.iter-detect":73,"./$.to-length":96,"./$.to-object":97,"./core.get-iterator-method":100}],104:[function(_dereq_,module,exports){
'use strict';
var addToUnscopables = _dereq_('./$.add-to-unscopables')
  , step             = _dereq_('./$.iter-step')
  , Iterators        = _dereq_('./$.iterators')
  , toIObject        = _dereq_('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = _dereq_('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./$.add-to-unscopables":44,"./$.iter-define":72,"./$.iter-step":74,"./$.iterators":75,"./$.to-iobject":95}],105:[function(_dereq_,module,exports){
'use strict';
var strong = _dereq_('./$.collection-strong');

// 23.1 Map Objects
_dereq_('./$.collection')('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);
},{"./$.collection":50,"./$.collection-strong":48}],106:[function(_dereq_,module,exports){
// 20.2.2.22 Math.log2(x)
var $export = _dereq_('./$.export');

$export($export.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});
},{"./$.export":57}],107:[function(_dereq_,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = _dereq_('./$.export');

$export($export.S + $export.F, 'Object', {assign: _dereq_('./$.object-assign')});
},{"./$.export":57,"./$.object-assign":80}],108:[function(_dereq_,module,exports){
// 19.1.2.5 Object.freeze(O)
var isObject = _dereq_('./$.is-object');

_dereq_('./$.object-sap')('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(it) : it;
  };
});
},{"./$.is-object":69,"./$.object-sap":81}],109:[function(_dereq_,module,exports){
// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = _dereq_('./$.to-iobject');

_dereq_('./$.object-sap')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});
},{"./$.object-sap":81,"./$.to-iobject":95}],110:[function(_dereq_,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = _dereq_('./$.to-object');

_dereq_('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":81,"./$.to-object":97}],111:[function(_dereq_,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = _dereq_('./$.export');
$export($export.S, 'Object', {setPrototypeOf: _dereq_('./$.set-proto').set});
},{"./$.export":57,"./$.set-proto":86}],112:[function(_dereq_,module,exports){

},{}],113:[function(_dereq_,module,exports){
'use strict';
var $          = _dereq_('./$')
  , LIBRARY    = _dereq_('./$.library')
  , global     = _dereq_('./$.global')
  , ctx        = _dereq_('./$.ctx')
  , classof    = _dereq_('./$.classof')
  , $export    = _dereq_('./$.export')
  , isObject   = _dereq_('./$.is-object')
  , anObject   = _dereq_('./$.an-object')
  , aFunction  = _dereq_('./$.a-function')
  , strictNew  = _dereq_('./$.strict-new')
  , forOf      = _dereq_('./$.for-of')
  , setProto   = _dereq_('./$.set-proto').set
  , same       = _dereq_('./$.same-value')
  , SPECIES    = _dereq_('./$.wks')('species')
  , speciesConstructor = _dereq_('./$.species-constructor')
  , asap       = _dereq_('./$.microtask')
  , PROMISE    = 'Promise'
  , process    = global.process
  , isNode     = classof(process) == 'process'
  , P          = global[PROMISE]
  , Wrapper;

var testResolve = function(sub){
  var test = new P(function(){});
  if(sub)test.constructor = Object;
  return P.resolve(test) === test;
};

var USE_NATIVE = function(){
  var works = false;
  function P2(x){
    var self = new P(x);
    setProto(self, P2.prototype);
    return self;
  }
  try {
    works = P && P.resolve && testResolve();
    setProto(P2, P);
    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
    // actual Firefox has broken subclass support, test that
    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
      works = false;
    }
    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
    if(works && _dereq_('./$.descriptors')){
      var thenableThenGotten = false;
      P.resolve($.setDesc({}, 'then', {
        get: function(){ thenableThenGotten = true; }
      }));
      works = thenableThenGotten;
    }
  } catch(e){ works = false; }
  return works;
}();

// helpers
var sameConstructor = function(a, b){
  // library wrapper special case
  if(LIBRARY && a === P && b === Wrapper)return true;
  return same(a, b);
};
var getConstructor = function(C){
  var S = anObject(C)[SPECIES];
  return S != undefined ? S : C;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var PromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve),
  this.reject  = aFunction(reject)
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(record, isReject){
  if(record.n)return;
  record.n = true;
  var chain = record.c;
  asap(function(){
    var value = record.v
      , ok    = record.s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , result, then;
      try {
        if(handler){
          if(!ok)record.h = true;
          result = handler === true ? value : handler(value);
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    chain.length = 0;
    record.n = false;
    if(isReject)setTimeout(function(){
      var promise = record.p
        , handler, console;
      if(isUnhandled(promise)){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      } record.a = undefined;
    }, 1);
  });
};
var isUnhandled = function(promise){
  var record = promise._d
    , chain  = record.a || record.c
    , i      = 0
    , reaction;
  if(record.h)return false;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var $reject = function(value){
  var record = this;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  record.v = value;
  record.s = 2;
  record.a = record.c.slice();
  notify(record, true);
};
var $resolve = function(value){
  var record = this
    , then;
  if(record.d)return;
  record.d = true;
  record = record.r || record; // unwrap
  try {
    if(record.p === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      asap(function(){
        var wrapper = {r: record, d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      record.v = value;
      record.s = 1;
      notify(record, false);
    }
  } catch(e){
    $reject.call({r: record, d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  P = function Promise(executor){
    aFunction(executor);
    var record = this._d = {
      p: strictNew(this, P, PROMISE),         // <- promise
      c: [],                                  // <- awaiting reactions
      a: undefined,                           // <- checked in isUnhandled reactions
      s: 0,                                   // <- state
      d: false,                               // <- done
      v: undefined,                           // <- value
      h: false,                               // <- handled rejection
      n: false                                // <- notify
    };
    try {
      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
    } catch(err){
      $reject.call(record, err);
    }
  };
  _dereq_('./$.redefine-all')(P.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction = new PromiseCapability(speciesConstructor(this, P))
        , promise  = reaction.promise
        , record   = this._d;
      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      record.c.push(reaction);
      if(record.a)record.a.push(reaction);
      if(record.s)notify(record, false);
      return promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
_dereq_('./$.set-to-string-tag')(P, PROMISE);
_dereq_('./$.set-species')(PROMISE);
Wrapper = _dereq_('./$.core')[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = new PromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof P && sameConstructor(x.constructor, this))return x;
    var capability = new PromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && _dereq_('./$.iter-detect')(function(iter){
  P.all(iter)['catch'](function(){});
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject
      , values     = [];
    var abrupt = perform(function(){
      forOf(iterable, false, values.push, values);
      var remaining = values.length
        , results   = Array(remaining);
      if(remaining)$.each.call(values, function(promise, index){
        var alreadyCalled = false;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled = true;
          results[index] = value;
          --remaining || resolve(results);
        }, reject);
      });
      else resolve(results);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = getConstructor(this)
      , capability = new PromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});
},{"./$":76,"./$.a-function":43,"./$.an-object":45,"./$.classof":46,"./$.core":51,"./$.ctx":52,"./$.descriptors":54,"./$.export":57,"./$.for-of":59,"./$.global":61,"./$.is-object":69,"./$.iter-detect":73,"./$.library":78,"./$.microtask":79,"./$.redefine-all":83,"./$.same-value":85,"./$.set-proto":86,"./$.set-species":87,"./$.set-to-string-tag":88,"./$.species-constructor":90,"./$.strict-new":91,"./$.wks":99}],114:[function(_dereq_,module,exports){
'use strict';
var strong = _dereq_('./$.collection-strong');

// 23.2 Set Objects
_dereq_('./$.collection')('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./$.collection":50,"./$.collection-strong":48}],115:[function(_dereq_,module,exports){
'use strict';
var $at  = _dereq_('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
_dereq_('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":72,"./$.string-at":92}],116:[function(_dereq_,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var $              = _dereq_('./$')
  , global         = _dereq_('./$.global')
  , has            = _dereq_('./$.has')
  , DESCRIPTORS    = _dereq_('./$.descriptors')
  , $export        = _dereq_('./$.export')
  , redefine       = _dereq_('./$.redefine')
  , $fails         = _dereq_('./$.fails')
  , shared         = _dereq_('./$.shared')
  , setToStringTag = _dereq_('./$.set-to-string-tag')
  , uid            = _dereq_('./$.uid')
  , wks            = _dereq_('./$.wks')
  , keyOf          = _dereq_('./$.keyof')
  , $names         = _dereq_('./$.get-names')
  , enumKeys       = _dereq_('./$.enum-keys')
  , isArray        = _dereq_('./$.is-array')
  , anObject       = _dereq_('./$.an-object')
  , toIObject      = _dereq_('./$.to-iobject')
  , createDesc     = _dereq_('./$.property-desc')
  , getDesc        = $.getDesc
  , setDesc        = $.setDesc
  , _create        = $.create
  , getNames       = $names.get
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , setter         = false
  , HIDDEN         = wks('_hidden')
  , isEnum         = $.isEnum
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , useNative      = typeof $Symbol == 'function'
  , ObjectProto    = Object.prototype;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(setDesc({}, 'a', {
    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = getDesc(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  setDesc(it, key, D);
  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
} : setDesc;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol.prototype);
  sym._k = tag;
  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
    configurable: true,
    set: function(value){
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    }
  });
  return sym;
};

var isSymbol = function(it){
  return typeof it == 'symbol';
};

var $defineProperty = function defineProperty(it, key, D){
  if(D && has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return setDesc(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key);
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
    ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  var D = getDesc(it = toIObject(it), key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
  return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var names  = getNames(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
  return result;
};
var $stringify = function stringify(it){
  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
  var args = [it]
    , i    = 1
    , $$   = arguments
    , replacer, $replacer;
  while($$.length > i)args.push($$[i++]);
  replacer = args[1];
  if(typeof replacer == 'function')$replacer = replacer;
  if($replacer || !isArray(replacer))replacer = function(key, value){
    if($replacer)value = $replacer.call(this, key, value);
    if(!isSymbol(value))return value;
  };
  args[1] = replacer;
  return _stringify.apply($JSON, args);
};
var buggyJSON = $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
});

// 19.4.1.1 Symbol([description])
if(!useNative){
  $Symbol = function Symbol(){
    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
  };
  redefine($Symbol.prototype, 'toString', function toString(){
    return this._k;
  });

  isSymbol = function(it){
    return it instanceof $Symbol;
  };

  $.create     = $create;
  $.isEnum     = $propertyIsEnumerable;
  $.getDesc    = $getOwnPropertyDescriptor;
  $.setDesc    = $defineProperty;
  $.setDescs   = $defineProperties;
  $.getNames   = $names.get = $getOwnPropertyNames;
  $.getSymbols = $getOwnPropertySymbols;

  if(DESCRIPTORS && !_dereq_('./$.library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }
}

var symbolStatics = {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    return keyOf(SymbolRegistry, key);
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
};
// 19.4.2.2 Symbol.hasInstance
// 19.4.2.3 Symbol.isConcatSpreadable
// 19.4.2.4 Symbol.iterator
// 19.4.2.6 Symbol.match
// 19.4.2.8 Symbol.replace
// 19.4.2.9 Symbol.search
// 19.4.2.10 Symbol.species
// 19.4.2.11 Symbol.split
// 19.4.2.12 Symbol.toPrimitive
// 19.4.2.13 Symbol.toStringTag
// 19.4.2.14 Symbol.unscopables
$.each.call((
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
  'species,split,toPrimitive,toStringTag,unscopables'
).split(','), function(it){
  var sym = wks(it);
  symbolStatics[it] = useNative ? sym : wrap(sym);
});

setter = true;

$export($export.G + $export.W, {Symbol: $Symbol});

$export($export.S, 'Symbol', symbolStatics);

$export($export.S + $export.F * !useNative, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});

// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./$":76,"./$.an-object":45,"./$.descriptors":54,"./$.enum-keys":56,"./$.export":57,"./$.fails":58,"./$.get-names":60,"./$.global":61,"./$.has":62,"./$.is-array":68,"./$.keyof":77,"./$.library":78,"./$.property-desc":82,"./$.redefine":84,"./$.set-to-string-tag":88,"./$.shared":89,"./$.to-iobject":95,"./$.uid":98,"./$.wks":99}],117:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = _dereq_('./$.export');

$export($export.P, 'Map', {toJSON: _dereq_('./$.collection-to-json')('Map')});
},{"./$.collection-to-json":49,"./$.export":57}],118:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = _dereq_('./$.export');

$export($export.P, 'Set', {toJSON: _dereq_('./$.collection-to-json')('Set')});
},{"./$.collection-to-json":49,"./$.export":57}],119:[function(_dereq_,module,exports){
_dereq_('./es6.array.iterator');
var Iterators = _dereq_('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":75,"./es6.array.iterator":104}],120:[function(_dereq_,module,exports){
(function (global){
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = _dereq_("./runtime");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

module.exports = { "default": module.exports, __esModule: true };

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./runtime":121}],121:[function(_dereq_,module,exports){
(function (process,global){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

"use strict";

var _Symbol = _dereq_("babel-runtime/core-js/symbol")["default"];

var _Symbol$iterator = _dereq_("babel-runtime/core-js/symbol/iterator")["default"];

var _Object$create = _dereq_("babel-runtime/core-js/object/create")["default"];

var _Promise = _dereq_("babel-runtime/core-js/promise")["default"];

!(function (global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var iteratorSymbol = typeof _Symbol === "function" && _Symbol$iterator || "@@iterator";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = _Object$create((outerFn || Generator).prototype);

    generator._invoke = makeInvokeMethod(innerFn, self || null, new Context(tryLocsList || []));

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    genFun.__proto__ = GeneratorFunctionPrototype;
    genFun.prototype = _Object$create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function (arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    // This invoke function is written in a style that assumes some
    // calling function (or Promise) will handle exceptions.
    function invoke(method, arg) {
      var result = generator[method](arg);
      var value = result.value;
      return value instanceof AwaitArgument ? _Promise.resolve(value.arg).then(invokeNext, invokeThrow) : _Promise.resolve(value).then(function (unwrapped) {
        // When a yielded Promise is resolved, its final value becomes
        // the .value of the Promise<{value,done}> result for the
        // current iteration. If the Promise is rejected, however, the
        // result for this iteration will be rejected with the same
        // reason. Note that rejections of yielded Promises are not
        // thrown back into the generator function, as is the case
        // when an awaited Promise is rejected. This difference in
        // behavior between yield and await is important, because it
        // allows the consumer to decide what to do with the yielded
        // rejection (swallow it and continue, manually .throw it back
        // into the generator, abandon iteration, whatever). With
        // await, by contrast, there is no opportunity to examine the
        // rejection reason outside the generator function, so the
        // only option is to throw it from the await expression, and
        // let the generator function handle the exception.
        result.value = unwrapped;
        return result;
      });
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var invokeNext = invoke.bind(generator, "next");
    var invokeThrow = invoke.bind(generator, "throw");
    var invokeReturn = invoke.bind(generator, "return");
    var previousPromise;

    function enqueue(method, arg) {
      var enqueueResult =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(function () {
        return invoke(method, arg);
      }) : new _Promise(function (resolve) {
        resolve(invoke(method, arg));
      });

      // Avoid propagating enqueueResult failures to Promises returned by
      // later invocations of the iterator.
      previousPromise = enqueueResult["catch"](function (ignored) {});

      return enqueueResult;
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          if (state === GenStateSuspendedYield) {
            context.sent = arg;
          } else {
            context.sent = undefined;
          }
        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }
        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
// Among the various tricks for obtaining a reference to the global
// object, this seems to be the most reliable technique that does not
// use indirect eval (which violates Content Security Policy).
typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : undefined);
}).call(this,_dereq_('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"_process":137,"babel-runtime/core-js/object/create":7,"babel-runtime/core-js/promise":14,"babel-runtime/core-js/symbol":16,"babel-runtime/core-js/symbol/iterator":17}],122:[function(_dereq_,module,exports){
'use strict'

module.exports = boxIntersectWrapper

var pool = _dereq_('typedarray-pool')
var sweep = _dereq_('./lib/sweep')
var boxIntersectIter = _dereq_('./lib/intersect')

function boxEmpty(d, box) {
  for(var j=0; j<d; ++j) {
    if(!(box[j] <= box[j+d])) {
      return true
    }
  }
  return false
}

//Unpack boxes into a flat typed array, remove empty boxes
function convertBoxes(boxes, d, data, ids) {
  var ptr = 0
  var count = 0
  for(var i=0, n=boxes.length; i<n; ++i) {
    var b = boxes[i]
    if(boxEmpty(d, b)) {
      continue
    }
    for(var j=0; j<2*d; ++j) {
      data[ptr++] = b[j]
    }
    ids[count++] = i
  }
  return count
}

//Perform type conversions, check bounds
function boxIntersect(red, blue, visit, full) {
  var n = red.length
  var m = blue.length

  //If either array is empty, then we can skip this whole thing
  if(n <= 0 || m <= 0) {
    return
  }

  //Compute dimension, if it is 0 then we skip
  var d = (red[0].length)>>>1
  if(d <= 0) {
    return
  }

  var retval

  //Convert red boxes
  var redList  = pool.mallocDouble(2*d*n)
  var redIds   = pool.mallocInt32(n)
  n = convertBoxes(red, d, redList, redIds)

  if(n > 0) {
    if(d === 1 && full) {
      //Special case: 1d complete
      sweep.init(n)
      retval = sweep.sweepComplete(
        d, visit, 
        0, n, redList, redIds,
        0, n, redList, redIds)
    } else {

      //Convert blue boxes
      var blueList = pool.mallocDouble(2*d*m)
      var blueIds  = pool.mallocInt32(m)
      m = convertBoxes(blue, d, blueList, blueIds)

      if(m > 0) {
        sweep.init(n+m)

        if(d === 1) {
          //Special case: 1d bipartite
          retval = sweep.sweepBipartite(
            d, visit, 
            0, n, redList,  redIds,
            0, m, blueList, blueIds)
        } else {
          //General case:  d>1
          retval = boxIntersectIter(
            d, visit,    full,
            n, redList,  redIds,
            m, blueList, blueIds)
        }

        pool.free(blueList)
        pool.free(blueIds)
      }
    }

    pool.free(redList)
    pool.free(redIds)
  }

  return retval
}

//User-friendly wrapper, handle full input and no-visitor cases
function boxIntersectWrapper(arg0, arg1, arg2) {
  var result
  switch(arguments.length) {
    case 1:
      result = []
      boxIntersect(arg0, arg0, function(i,j) {
        result.push([i, j])
      }, true)
      return result
    case 2:
      if(typeof arg1 === 'function') {
        var visit = arg1
        return boxIntersect(arg0, arg0, visit, true)
      } else {
        result = []
        boxIntersect(arg0, arg1, function(i,j) {
          result.push([i, j])
        }, false)
        return result
      }
    case 3:
      return boxIntersect(arg0, arg1, arg2, false)
    default:
      throw new Error('box-intersect: Invalid arguments')
  }
}
},{"./lib/intersect":124,"./lib/sweep":128,"typedarray-pool":131}],123:[function(_dereq_,module,exports){
'use strict'

var DIMENSION   = 'd'
var AXIS        = 'ax'
var VISIT       = 'vv'
var FLIP        = 'fp'

var ELEM_SIZE   = 'es'

var RED_START   = 'rs'
var RED_END     = 're'
var RED_BOXES   = 'rb'
var RED_INDEX   = 'ri'
var RED_PTR     = 'rp'

var BLUE_START  = 'bs'
var BLUE_END    = 'be'
var BLUE_BOXES  = 'bb'
var BLUE_INDEX  = 'bi'
var BLUE_PTR    = 'bp'

var RETVAL      = 'rv'

var INNER_LABEL = 'Q'

var ARGS = [
  DIMENSION,
  AXIS,
  VISIT,
  RED_START,
  RED_END,
  RED_BOXES,
  RED_INDEX,
  BLUE_START,
  BLUE_END,
  BLUE_BOXES,
  BLUE_INDEX
]

function generateBruteForce(redMajor, flip, full) {
  var funcName = 'bruteForce' + 
    (redMajor ? 'Red' : 'Blue') + 
    (flip ? 'Flip' : '') +
    (full ? 'Full' : '')

  var code = ['function ', funcName, '(', ARGS.join(), '){',
    'var ', ELEM_SIZE, '=2*', DIMENSION, ';']

  var redLoop = 
    'for(var i=' + RED_START + ',' + RED_PTR + '=' + ELEM_SIZE + '*' + RED_START + ';' +
        'i<' + RED_END +';' +
        '++i,' + RED_PTR + '+=' + ELEM_SIZE + '){' +
        'var x0=' + RED_BOXES + '[' + AXIS + '+' + RED_PTR + '],' +
            'x1=' + RED_BOXES + '[' + AXIS + '+' + RED_PTR + '+' + DIMENSION + '],' +
            'xi=' + RED_INDEX + '[i];'

  var blueLoop = 
    'for(var j=' + BLUE_START + ',' + BLUE_PTR + '=' + ELEM_SIZE + '*' + BLUE_START + ';' +
        'j<' + BLUE_END + ';' +
        '++j,' + BLUE_PTR + '+=' + ELEM_SIZE + '){' +
        'var y0=' + BLUE_BOXES + '[' + AXIS + '+' + BLUE_PTR + '],' +
            (full ? 'y1=' + BLUE_BOXES + '[' + AXIS + '+' + BLUE_PTR + '+' + DIMENSION + '],' : '') +
            'yi=' + BLUE_INDEX + '[j];'

  if(redMajor) {
    code.push(redLoop, INNER_LABEL, ':', blueLoop)
  } else {
    code.push(blueLoop, INNER_LABEL, ':', redLoop)
  }

  if(full) {
    code.push('if(y1<x0||x1<y0)continue;')
  } else if(flip) {
    code.push('if(y0<=x0||x1<y0)continue;')
  } else {
    code.push('if(y0<x0||x1<y0)continue;')
  }

  code.push('for(var k='+AXIS+'+1;k<'+DIMENSION+';++k){'+
    'var r0='+RED_BOXES+'[k+'+RED_PTR+'],'+
        'r1='+RED_BOXES+'[k+'+DIMENSION+'+'+RED_PTR+'],'+
        'b0='+BLUE_BOXES+'[k+'+BLUE_PTR+'],'+
        'b1='+BLUE_BOXES+'[k+'+DIMENSION+'+'+BLUE_PTR+'];'+
      'if(r1<b0||b1<r0)continue ' + INNER_LABEL + ';}' +
      'var ' + RETVAL + '=' + VISIT + '(')

  if(flip) {
    code.push('yi,xi')
  } else {
    code.push('xi,yi')
  }

  code.push(');if(' + RETVAL + '!==void 0)return ' + RETVAL + ';}}}')

  return {
    name: funcName, 
    code: code.join('')
  }
}

function bruteForcePlanner(full) {
  var funcName = 'bruteForce' + (full ? 'Full' : 'Partial')
  var prefix = []
  var fargs = ARGS.slice()
  if(!full) {
    fargs.splice(3, 0, FLIP)
  }

  var code = ['function ' + funcName + '(' + fargs.join() + '){']

  function invoke(redMajor, flip) {
    var res = generateBruteForce(redMajor, flip, full)
    prefix.push(res.code)
    code.push('return ' + res.name + '(' + ARGS.join() + ');')
  }

  code.push('if(' + RED_END + '-' + RED_START + '>' +
                    BLUE_END + '-' + BLUE_START + '){')

  if(full) {
    invoke(true, false)
    code.push('}else{')
    invoke(false, false)
  } else {
    code.push('if(' + FLIP + '){')
    invoke(true, true)
    code.push('}else{')
    invoke(true, false)
    code.push('}}else{if(' + FLIP + '){')
    invoke(false, true)
    code.push('}else{')
    invoke(false, false)
    code.push('}')
  }
  code.push('}}return ' + funcName)

  var codeStr = prefix.join('') + code.join('')
  var proc = new Function(codeStr)
  return proc()
}


exports.partial = bruteForcePlanner(false)
exports.full    = bruteForcePlanner(true)
},{}],124:[function(_dereq_,module,exports){
'use strict'

module.exports = boxIntersectIter

var pool = _dereq_('typedarray-pool')
var bits = _dereq_('bit-twiddle')
var bruteForce = _dereq_('./brute')
var bruteForcePartial = bruteForce.partial
var bruteForceFull = bruteForce.full
var sweep = _dereq_('./sweep')
var findMedian = _dereq_('./median')
var genPartition = _dereq_('./partition')

//Twiddle parameters
var BRUTE_FORCE_CUTOFF    = 128       //Cut off for brute force search
var SCAN_CUTOFF           = (1<<22)   //Cut off for two way scan
var SCAN_COMPLETE_CUTOFF  = (1<<22)  

//Partition functions
var partitionInteriorContainsInterval = genPartition(
  '!(lo>=p0)&&!(p1>=hi)', 
  ['p0', 'p1'])

var partitionStartEqual = genPartition(
  'lo===p0',
  ['p0'])

var partitionStartLessThan = genPartition(
  'lo<p0',
  ['p0'])

var partitionEndLessThanEqual = genPartition(
  'hi<=p0',
  ['p0'])

var partitionContainsPoint = genPartition(
  'lo<=p0&&p0<=hi',
  ['p0'])

var partitionContainsPointProper = genPartition(
  'lo<p0&&p0<=hi',
  ['p0'])

//Frame size for iterative loop
var IFRAME_SIZE = 6
var DFRAME_SIZE = 2

//Data for box statck
var INIT_CAPACITY = 1024
var BOX_ISTACK  = pool.mallocInt32(INIT_CAPACITY)
var BOX_DSTACK  = pool.mallocDouble(INIT_CAPACITY)

//Initialize iterative loop queue
function iterInit(d, count) {
  var levels = (8 * bits.log2(count+1) * (d+1))|0
  var maxInts = bits.nextPow2(IFRAME_SIZE*levels)
  if(BOX_ISTACK.length < maxInts) {
    pool.free(BOX_ISTACK)
    BOX_ISTACK = pool.mallocInt32(maxInts)
  }
  var maxDoubles = bits.nextPow2(DFRAME_SIZE*levels)
  if(BOX_DSTACK < maxDoubles) {
    pool.free(BOX_DSTACK)
    BOX_DSTACK = pool.mallocDouble(maxDoubles)
  }
}

//Append item to queue
function iterPush(ptr,
  axis, 
  redStart, redEnd, 
  blueStart, blueEnd, 
  state, 
  lo, hi) {

  var iptr = IFRAME_SIZE * ptr
  BOX_ISTACK[iptr]   = axis
  BOX_ISTACK[iptr+1] = redStart
  BOX_ISTACK[iptr+2] = redEnd
  BOX_ISTACK[iptr+3] = blueStart
  BOX_ISTACK[iptr+4] = blueEnd
  BOX_ISTACK[iptr+5] = state

  var dptr = DFRAME_SIZE * ptr
  BOX_DSTACK[dptr]   = lo
  BOX_DSTACK[dptr+1] = hi
}

//Special case:  Intersect single point with list of intervals
function onePointPartial(
  d, axis, visit, flip,
  redStart, redEnd, red, redIndex,
  blueOffset, blue, blueId) {

  var elemSize = 2 * d
  var bluePtr  = blueOffset * elemSize
  var blueX    = blue[bluePtr + axis]

red_loop:
  for(var i=redStart, redPtr=redStart*elemSize; i<redEnd; ++i, redPtr+=elemSize) {
    var r0 = red[redPtr+axis]
    var r1 = red[redPtr+axis+d]
    if(blueX < r0 || r1 < blueX) {
      continue
    }
    if(flip && blueX === r0) {
      continue
    }
    var redId = redIndex[i]
    for(var j=axis+1; j<d; ++j) {
      var r0 = red[redPtr+j]
      var r1 = red[redPtr+j+d]
      var b0 = blue[bluePtr+j]
      var b1 = blue[bluePtr+j+d]
      if(r1 < b0 || b1 < r0) {
        continue red_loop
      }
    }
    var retval
    if(flip) {
      retval = visit(blueId, redId)
    } else {
      retval = visit(redId, blueId)
    }
    if(retval !== void 0) {
      return retval
    }
  }
}

//Special case:  Intersect one point with list of intervals
function onePointFull(
  d, axis, visit,
  redStart, redEnd, red, redIndex,
  blueOffset, blue, blueId) {

  var elemSize = 2 * d
  var bluePtr  = blueOffset * elemSize
  var blueX    = blue[bluePtr + axis]

red_loop:
  for(var i=redStart, redPtr=redStart*elemSize; i<redEnd; ++i, redPtr+=elemSize) {
    var redId = redIndex[i]
    if(redId === blueId) {
      continue
    }
    var r0 = red[redPtr+axis]
    var r1 = red[redPtr+axis+d]
    if(blueX < r0 || r1 < blueX) {
      continue
    }
    for(var j=axis+1; j<d; ++j) {
      var r0 = red[redPtr+j]
      var r1 = red[redPtr+j+d]
      var b0 = blue[bluePtr+j]
      var b1 = blue[bluePtr+j+d]
      if(r1 < b0 || b1 < r0) {
        continue red_loop
      }
    }
    var retval = visit(redId, blueId)
    if(retval !== void 0) {
      return retval
    }
  }
}

//The main box intersection routine
function boxIntersectIter(
  d, visit, initFull,
  xSize, xBoxes, xIndex,
  ySize, yBoxes, yIndex) {

  //Reserve memory for stack
  iterInit(d, xSize + ySize)

  var top  = 0
  var elemSize = 2 * d
  var retval

  iterPush(top++,
      0,
      0, xSize,
      0, ySize,
      initFull ? 16 : 0, 
      -Infinity, Infinity)
  if(!initFull) {
    iterPush(top++,
      0,
      0, ySize,
      0, xSize,
      1, 
      -Infinity, Infinity)
  }

  while(top > 0) {
    top  -= 1

    var iptr = top * IFRAME_SIZE
    var axis      = BOX_ISTACK[iptr]
    var redStart  = BOX_ISTACK[iptr+1]
    var redEnd    = BOX_ISTACK[iptr+2]
    var blueStart = BOX_ISTACK[iptr+3]
    var blueEnd   = BOX_ISTACK[iptr+4]
    var state     = BOX_ISTACK[iptr+5]

    var dptr = top * DFRAME_SIZE
    var lo        = BOX_DSTACK[dptr]
    var hi        = BOX_DSTACK[dptr+1]

    //Unpack state info
    var flip      = (state & 1)
    var full      = !!(state & 16)

    //Unpack indices
    var red       = xBoxes
    var redIndex  = xIndex
    var blue      = yBoxes
    var blueIndex = yIndex
    if(flip) {
      red         = yBoxes
      redIndex    = yIndex
      blue        = xBoxes
      blueIndex   = xIndex
    }

    if(state & 2) {
      redEnd = partitionStartLessThan(
        d, axis,
        redStart, redEnd, red, redIndex,
        hi)
      if(redStart >= redEnd) {
        continue
      }
    }
    if(state & 4) {
      redStart = partitionEndLessThanEqual(
        d, axis,
        redStart, redEnd, red, redIndex,
        lo)
      if(redStart >= redEnd) {
        continue
      }
    }
    
    var redCount  = redEnd  - redStart
    var blueCount = blueEnd - blueStart

    if(full) {
      if(d * redCount * (redCount + blueCount) < SCAN_COMPLETE_CUTOFF) {
        retval = sweep.scanComplete(
          d, axis, visit, 
          redStart, redEnd, red, redIndex,
          blueStart, blueEnd, blue, blueIndex)
        if(retval !== void 0) {
          return retval
        }
        continue
      }
    } else {
      if(d * Math.min(redCount, blueCount) < BRUTE_FORCE_CUTOFF) {
        //If input small, then use brute force
        retval = bruteForcePartial(
            d, axis, visit, flip,
            redStart,  redEnd,  red,  redIndex,
            blueStart, blueEnd, blue, blueIndex)
        if(retval !== void 0) {
          return retval
        }
        continue
      } else if(d * redCount * blueCount < SCAN_CUTOFF) {
        //If input medium sized, then use sweep and prune
        retval = sweep.scanBipartite(
          d, axis, visit, flip, 
          redStart, redEnd, red, redIndex,
          blueStart, blueEnd, blue, blueIndex)
        if(retval !== void 0) {
          return retval
        }
        continue
      }
    }
    
    //First, find all red intervals whose interior contains (lo,hi)
    var red0 = partitionInteriorContainsInterval(
      d, axis, 
      redStart, redEnd, red, redIndex,
      lo, hi)

    //Lower dimensional case
    if(redStart < red0) {

      if(d * (red0 - redStart) < BRUTE_FORCE_CUTOFF) {
        //Special case for small inputs: use brute force
        retval = bruteForceFull(
          d, axis+1, visit,
          redStart, red0, red, redIndex,
          blueStart, blueEnd, blue, blueIndex)
        if(retval !== void 0) {
          return retval
        }
      } else if(axis === d-2) {
        if(flip) {
          retval = sweep.sweepBipartite(
            d, visit,
            blueStart, blueEnd, blue, blueIndex,
            redStart, red0, red, redIndex)
        } else {
          retval = sweep.sweepBipartite(
            d, visit,
            redStart, red0, red, redIndex,
            blueStart, blueEnd, blue, blueIndex)
        }
        if(retval !== void 0) {
          return retval
        }
      } else {
        iterPush(top++,
          axis+1,
          redStart, red0,
          blueStart, blueEnd,
          flip,
          -Infinity, Infinity)
        iterPush(top++,
          axis+1,
          blueStart, blueEnd,
          redStart, red0,
          flip^1,
          -Infinity, Infinity)
      }
    }

    //Divide and conquer phase
    if(red0 < redEnd) {

      //Cut blue into 3 parts:
      //
      //  Points < mid point
      //  Points = mid point
      //  Points > mid point
      //
      var blue0 = findMedian(
        d, axis, 
        blueStart, blueEnd, blue, blueIndex)
      var mid = blue[elemSize * blue0 + axis]
      var blue1 = partitionStartEqual(
        d, axis,
        blue0, blueEnd, blue, blueIndex,
        mid)

      //Right case
      if(blue1 < blueEnd) {
        iterPush(top++,
          axis,
          red0, redEnd,
          blue1, blueEnd,
          (flip|4) + (full ? 16 : 0),
          mid, hi)
      }

      //Left case
      if(blueStart < blue0) {
        iterPush(top++,
          axis,
          red0, redEnd,
          blueStart, blue0,
          (flip|2) + (full ? 16 : 0),
          lo, mid)
      }

      //Center case (the hard part)
      if(blue0 + 1 === blue1) {
        //Optimization: Range with exactly 1 point, use a brute force scan
        if(full) {
          retval = onePointFull(
            d, axis, visit,
            red0, redEnd, red, redIndex,
            blue0, blue, blueIndex[blue0])
        } else {
          retval = onePointPartial(
            d, axis, visit, flip,
            red0, redEnd, red, redIndex,
            blue0, blue, blueIndex[blue0])
        }
        if(retval !== void 0) {
          return retval
        }
      } else if(blue0 < blue1) {
        var red1
        if(full) {
          //If full intersection, need to handle special case
          red1 = partitionContainsPoint(
            d, axis,
            red0, redEnd, red, redIndex,
            mid)
          if(red0 < red1) {
            var redX = partitionStartEqual(
              d, axis,
              red0, red1, red, redIndex,
              mid)
            if(axis === d-2) {
              //Degenerate sweep intersection:
              //  [red0, redX] with [blue0, blue1]
              if(red0 < redX) {
                retval = sweep.sweepComplete(
                  d, visit,
                  red0, redX, red, redIndex,
                  blue0, blue1, blue, blueIndex)
                if(retval !== void 0) {
                  return retval
                }
              }

              //Normal sweep intersection:
              //  [redX, red1] with [blue0, blue1]
              if(redX < red1) {
                retval = sweep.sweepBipartite(
                  d, visit,
                  redX, red1, red, redIndex,
                  blue0, blue1, blue, blueIndex)
                if(retval !== void 0) {
                  return retval
                }
              }
            } else {
              if(red0 < redX) {
                iterPush(top++,
                  axis+1,
                  red0, redX,
                  blue0, blue1,
                  16,
                  -Infinity, Infinity)
              }
              if(redX < red1) {
                iterPush(top++,
                  axis+1,
                  redX, red1,
                  blue0, blue1,
                  0,
                  -Infinity, Infinity)
                iterPush(top++,
                  axis+1,
                  blue0, blue1,
                  redX, red1,
                  1,
                  -Infinity, Infinity)
              }
            }
          }
        } else {
          if(flip) {
            red1 = partitionContainsPointProper(
              d, axis,
              red0, redEnd, red, redIndex,
              mid)
          } else {
            red1 = partitionContainsPoint(
              d, axis,
              red0, redEnd, red, redIndex,
              mid)
          }
          if(red0 < red1) {
            if(axis === d-2) {
              if(flip) {
                retval = sweep.sweepBipartite(
                  d, visit,
                  blue0, blue1, blue, blueIndex,
                  red0, red1, red, redIndex)
              } else {
                retval = sweep.sweepBipartite(
                  d, visit,
                  red0, red1, red, redIndex,
                  blue0, blue1, blue, blueIndex)
              }
            } else {
              iterPush(top++,
                axis+1,
                red0, red1,
                blue0, blue1,
                flip,
                -Infinity, Infinity)
              iterPush(top++,
                axis+1,
                blue0, blue1,
                red0, red1,
                flip^1,
                -Infinity, Infinity)
            }
          }
        }
      }
    }
  }
}
},{"./brute":123,"./median":125,"./partition":126,"./sweep":128,"bit-twiddle":129,"typedarray-pool":131}],125:[function(_dereq_,module,exports){
'use strict'

module.exports = findMedian

var genPartition = _dereq_('./partition')

var partitionStartLessThan = genPartition('lo<p0', ['p0'])

var PARTITION_THRESHOLD = 8   //Cut off for using insertion sort in findMedian

//Base case for median finding:  Use insertion sort
function insertionSort(d, axis, start, end, boxes, ids) {
  var elemSize = 2 * d
  var boxPtr = elemSize * (start+1) + axis
  for(var i=start+1; i<end; ++i, boxPtr+=elemSize) {
    var x = boxes[boxPtr]
    for(var j=i, ptr=elemSize*(i-1); 
        j>start && boxes[ptr+axis] > x; 
        --j, ptr-=elemSize) {
      //Swap
      var aPtr = ptr
      var bPtr = ptr+elemSize
      for(var k=0; k<elemSize; ++k, ++aPtr, ++bPtr) {
        var y = boxes[aPtr]
        boxes[aPtr] = boxes[bPtr]
        boxes[bPtr] = y
      }
      var tmp = ids[j]
      ids[j] = ids[j-1]
      ids[j-1] = tmp
    }
  }
}

//Find median using quick select algorithm
//  takes O(n) time with high probability
function findMedian(d, axis, start, end, boxes, ids) {
  if(end <= start+1) {
    return start
  }

  var lo       = start
  var hi       = end
  var mid      = ((end + start) >>> 1)
  var elemSize = 2*d
  var pivot    = mid
  var value    = boxes[elemSize*mid+axis]
  
  while(lo < hi) {
    if(hi - lo < PARTITION_THRESHOLD) {
      insertionSort(d, axis, lo, hi, boxes, ids)
      value = boxes[elemSize*mid+axis]
      break
    }
    
    //Select pivot using median-of-3
    var count  = hi - lo
    var pivot0 = (Math.random()*count+lo)|0
    var value0 = boxes[elemSize*pivot0 + axis]
    var pivot1 = (Math.random()*count+lo)|0
    var value1 = boxes[elemSize*pivot1 + axis]
    var pivot2 = (Math.random()*count+lo)|0
    var value2 = boxes[elemSize*pivot2 + axis]
    if(value0 <= value1) {
      if(value2 >= value1) {
        pivot = pivot1
        value = value1
      } else if(value0 >= value2) {
        pivot = pivot0
        value = value0
      } else {
        pivot = pivot2
        value = value2
      }
    } else {
      if(value1 >= value2) {
        pivot = pivot1
        value = value1
      } else if(value2 >= value0) {
        pivot = pivot0
        value = value0
      } else {
        pivot = pivot2
        value = value2
      }
    }

    //Swap pivot to end of array
    var aPtr = elemSize * (hi-1)
    var bPtr = elemSize * pivot
    for(var i=0; i<elemSize; ++i, ++aPtr, ++bPtr) {
      var x = boxes[aPtr]
      boxes[aPtr] = boxes[bPtr]
      boxes[bPtr] = x
    }
    var y = ids[hi-1]
    ids[hi-1] = ids[pivot]
    ids[pivot] = y

    //Partition using pivot
    pivot = partitionStartLessThan(
      d, axis, 
      lo, hi-1, boxes, ids,
      value)

    //Swap pivot back
    var aPtr = elemSize * (hi-1)
    var bPtr = elemSize * pivot
    for(var i=0; i<elemSize; ++i, ++aPtr, ++bPtr) {
      var x = boxes[aPtr]
      boxes[aPtr] = boxes[bPtr]
      boxes[bPtr] = x
    }
    var y = ids[hi-1]
    ids[hi-1] = ids[pivot]
    ids[pivot] = y

    //Swap pivot to last pivot
    if(mid < pivot) {
      hi = pivot-1
      while(lo < hi && 
        boxes[elemSize*(hi-1)+axis] === value) {
        hi -= 1
      }
      hi += 1
    } else if(pivot < mid) {
      lo = pivot + 1
      while(lo < hi &&
        boxes[elemSize*lo+axis] === value) {
        lo += 1
      }
    } else {
      break
    }
  }

  //Make sure pivot is at start
  return partitionStartLessThan(
    d, axis, 
    start, mid, boxes, ids,
    boxes[elemSize*mid+axis])
}
},{"./partition":126}],126:[function(_dereq_,module,exports){
'use strict'

module.exports = genPartition

var code = 'for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m'

function genPartition(predicate, args) {
  var fargs ='abcdef'.split('').concat(args)
  var reads = []
  if(predicate.indexOf('lo') >= 0) {
    reads.push('lo=e[k+n]')
  }
  if(predicate.indexOf('hi') >= 0) {
    reads.push('hi=e[k+o]')
  }
  fargs.push(
    code.replace('_', reads.join())
        .replace('$', predicate))
  return Function.apply(void 0, fargs)
}
},{}],127:[function(_dereq_,module,exports){
'use strict';

//This code is extracted from ndarray-sort
//It is inlined here as a temporary workaround

module.exports = wrapper;

var INSERT_SORT_CUTOFF = 32

function wrapper(data, n0) {
  if (n0 <= 4*INSERT_SORT_CUTOFF) {
    insertionSort(0, n0 - 1, data);
  } else {
    quickSort(0, n0 - 1, data);
  }
}

function insertionSort(left, right, data) {
  var ptr = 2*(left+1)
  for(var i=left+1; i<=right; ++i) {
    var a = data[ptr++]
    var b = data[ptr++]
    var j = i
    var jptr = ptr-2
    while(j-- > left) {
      var x = data[jptr-2]
      var y = data[jptr-1]
      if(x < a) {
        break
      } else if(x === a && y < b) {
        break
      }
      data[jptr]   = x
      data[jptr+1] = y
      jptr -= 2
    }
    data[jptr]   = a
    data[jptr+1] = b
  }
}

function swap(i, j, data) {
  i *= 2
  j *= 2
  var x = data[i]
  var y = data[i+1]
  data[i] = data[j]
  data[i+1] = data[j+1]
  data[j] = x
  data[j+1] = y
}

function move(i, j, data) {
  i *= 2
  j *= 2
  data[i] = data[j]
  data[i+1] = data[j+1]
}

function rotate(i, j, k, data) {
  i *= 2
  j *= 2
  k *= 2
  var x = data[i]
  var y = data[i+1]
  data[i] = data[j]
  data[i+1] = data[j+1]
  data[j] = data[k]
  data[j+1] = data[k+1]
  data[k] = x
  data[k+1] = y
}

function shufflePivot(i, j, px, py, data) {
  i *= 2
  j *= 2
  data[i] = data[j]
  data[j] = px
  data[i+1] = data[j+1]
  data[j+1] = py
}

function compare(i, j, data) {
  i *= 2
  j *= 2
  var x = data[i],
      y = data[j]
  if(x < y) {
    return false
  } else if(x === y) {
    return data[i+1] > data[j+1]
  }
  return true
}

function comparePivot(i, y, b, data) {
  i *= 2
  var x = data[i]
  if(x < y) {
    return true
  } else if(x === y) {
    return data[i+1] < b
  }
  return false
}

function quickSort(left, right, data) {
  var sixth = (right - left + 1) / 6 | 0, 
      index1 = left + sixth, 
      index5 = right - sixth, 
      index3 = left + right >> 1, 
      index2 = index3 - sixth, 
      index4 = index3 + sixth, 
      el1 = index1, 
      el2 = index2, 
      el3 = index3, 
      el4 = index4, 
      el5 = index5, 
      less = left + 1, 
      great = right - 1, 
      tmp = 0
  if(compare(el1, el2, data)) {
    tmp = el1
    el1 = el2
    el2 = tmp
  }
  if(compare(el4, el5, data)) {
    tmp = el4
    el4 = el5
    el5 = tmp
  }
  if(compare(el1, el3, data)) {
    tmp = el1
    el1 = el3
    el3 = tmp
  }
  if(compare(el2, el3, data)) {
    tmp = el2
    el2 = el3
    el3 = tmp
  }
  if(compare(el1, el4, data)) {
    tmp = el1
    el1 = el4
    el4 = tmp
  }
  if(compare(el3, el4, data)) {
    tmp = el3
    el3 = el4
    el4 = tmp
  }
  if(compare(el2, el5, data)) {
    tmp = el2
    el2 = el5
    el5 = tmp
  }
  if(compare(el2, el3, data)) {
    tmp = el2
    el2 = el3
    el3 = tmp
  }
  if(compare(el4, el5, data)) {
    tmp = el4
    el4 = el5
    el5 = tmp
  }

  var pivot1X = data[2*el2]
  var pivot1Y = data[2*el2+1]
  var pivot2X = data[2*el4]
  var pivot2Y = data[2*el4+1]

  var ptr0 = 2 * el1;
  var ptr2 = 2 * el3;
  var ptr4 = 2 * el5;
  var ptr5 = 2 * index1;
  var ptr6 = 2 * index3;
  var ptr7 = 2 * index5;
  for (var i1 = 0; i1 < 2; ++i1) {
    var x = data[ptr0+i1];
    var y = data[ptr2+i1];
    var z = data[ptr4+i1];
    data[ptr5+i1] = x;
    data[ptr6+i1] = y;
    data[ptr7+i1] = z;
  }

  move(index2, left, data)
  move(index4, right, data)
  for (var k = less; k <= great; ++k) {
    if (comparePivot(k, pivot1X, pivot1Y, data)) {
      if (k !== less) {
        swap(k, less, data)
      }
      ++less;
    } else {
      if (!comparePivot(k, pivot2X, pivot2Y, data)) {
        while (true) {
          if (!comparePivot(great, pivot2X, pivot2Y, data)) {
            if (--great < k) {
              break;
            }
            continue;
          } else {
            if (comparePivot(great, pivot1X, pivot1Y, data)) {
              rotate(k, less, great, data)
              ++less;
              --great;
            } else {
              swap(k, great, data)
              --great;
            }
            break;
          }
        }
      }
    }
  }
  shufflePivot(left, less-1, pivot1X, pivot1Y, data)
  shufflePivot(right, great+1, pivot2X, pivot2Y, data)
  if (less - 2 - left <= INSERT_SORT_CUTOFF) {
    insertionSort(left, less - 2, data);
  } else {
    quickSort(left, less - 2, data);
  }
  if (right - (great + 2) <= INSERT_SORT_CUTOFF) {
    insertionSort(great + 2, right, data);
  } else {
    quickSort(great + 2, right, data);
  }
  if (great - less <= INSERT_SORT_CUTOFF) {
    insertionSort(less, great, data);
  } else {
    quickSort(less, great, data);
  }
}
},{}],128:[function(_dereq_,module,exports){
'use strict'

module.exports = {
  init:           sqInit,
  sweepBipartite: sweepBipartite,
  sweepComplete:  sweepComplete,
  scanBipartite:  scanBipartite,
  scanComplete:   scanComplete
}

var pool  = _dereq_('typedarray-pool')
var bits  = _dereq_('bit-twiddle')
var isort = _dereq_('./sort')

//Flag for blue
var BLUE_FLAG = (1<<28)

//1D sweep event queue stuff (use pool to save space)
var INIT_CAPACITY      = 1024
var RED_SWEEP_QUEUE    = pool.mallocInt32(INIT_CAPACITY)
var RED_SWEEP_INDEX    = pool.mallocInt32(INIT_CAPACITY)
var BLUE_SWEEP_QUEUE   = pool.mallocInt32(INIT_CAPACITY)
var BLUE_SWEEP_INDEX   = pool.mallocInt32(INIT_CAPACITY)
var COMMON_SWEEP_QUEUE = pool.mallocInt32(INIT_CAPACITY)
var COMMON_SWEEP_INDEX = pool.mallocInt32(INIT_CAPACITY)
var SWEEP_EVENTS       = pool.mallocDouble(INIT_CAPACITY * 8)

//Reserves memory for the 1D sweep data structures
function sqInit(count) {
  var rcount = bits.nextPow2(count)
  if(RED_SWEEP_QUEUE.length < rcount) {
    pool.free(RED_SWEEP_QUEUE)
    RED_SWEEP_QUEUE = pool.mallocInt32(rcount)
  }
  if(RED_SWEEP_INDEX.length < rcount) {
    pool.free(RED_SWEEP_INDEX)
    RED_SWEEP_INDEX = pool.mallocInt32(rcount)
  }
  if(BLUE_SWEEP_QUEUE.length < rcount) {
    pool.free(BLUE_SWEEP_QUEUE)
    BLUE_SWEEP_QUEUE = pool.mallocInt32(rcount)
  }
  if(BLUE_SWEEP_INDEX.length < rcount) {
    pool.free(BLUE_SWEEP_INDEX)
    BLUE_SWEEP_INDEX = pool.mallocInt32(rcount)
  }
  if(COMMON_SWEEP_QUEUE.length < rcount) {
    pool.free(COMMON_SWEEP_QUEUE)
    COMMON_SWEEP_QUEUE = pool.mallocInt32(rcount)
  }
  if(COMMON_SWEEP_INDEX.length < rcount) {
    pool.free(COMMON_SWEEP_INDEX)
    COMMON_SWEEP_INDEX = pool.mallocInt32(rcount)
  }
  var eventLength = 8 * rcount
  if(SWEEP_EVENTS.length < eventLength) {
    pool.free(SWEEP_EVENTS)
    SWEEP_EVENTS = pool.mallocDouble(eventLength)
  }
}

//Remove an item from the active queue in O(1)
function sqPop(queue, index, count, item) {
  var idx = index[item]
  var top = queue[count-1]
  queue[idx] = top
  index[top] = idx
}

//Insert an item into the active queue in O(1)
function sqPush(queue, index, count, item) {
  queue[count] = item
  index[item]  = count
}

//Recursion base case: use 1D sweep algorithm
function sweepBipartite(
    d, visit,
    redStart,  redEnd, red, redIndex,
    blueStart, blueEnd, blue, blueIndex) {

  //store events as pairs [coordinate, idx]
  //
  //  red create:  -(idx+1)
  //  red destroy: idx
  //  blue create: -(idx+BLUE_FLAG)
  //  blue destroy: idx+BLUE_FLAG
  //
  var ptr      = 0
  var elemSize = 2*d
  var istart   = d-1
  var iend     = elemSize-1

  for(var i=redStart; i<redEnd; ++i) {
    var idx = redIndex[i]
    var redOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = red[redOffset+istart]
    SWEEP_EVENTS[ptr++] = -(idx+1)
    SWEEP_EVENTS[ptr++] = red[redOffset+iend]
    SWEEP_EVENTS[ptr++] = idx
  }

  for(var i=blueStart; i<blueEnd; ++i) {
    var idx = blueIndex[i]+BLUE_FLAG
    var blueOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = blue[blueOffset+istart]
    SWEEP_EVENTS[ptr++] = -idx
    SWEEP_EVENTS[ptr++] = blue[blueOffset+iend]
    SWEEP_EVENTS[ptr++] = idx
  }

  //process events from left->right
  var n = ptr >>> 1
  isort(SWEEP_EVENTS, n)
  
  var redActive  = 0
  var blueActive = 0
  for(var i=0; i<n; ++i) {
    var e = SWEEP_EVENTS[2*i+1]|0
    if(e >= BLUE_FLAG) {
      //blue destroy event
      e = (e-BLUE_FLAG)|0
      sqPop(BLUE_SWEEP_QUEUE, BLUE_SWEEP_INDEX, blueActive--, e)
    } else if(e >= 0) {
      //red destroy event
      sqPop(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive--, e)
    } else if(e <= -BLUE_FLAG) {
      //blue create event
      e = (-e-BLUE_FLAG)|0
      for(var j=0; j<redActive; ++j) {
        var retval = visit(RED_SWEEP_QUEUE[j], e)
        if(retval !== void 0) {
          return retval
        }
      }
      sqPush(BLUE_SWEEP_QUEUE, BLUE_SWEEP_INDEX, blueActive++, e)
    } else {
      //red create event
      e = (-e-1)|0
      for(var j=0; j<blueActive; ++j) {
        var retval = visit(e, BLUE_SWEEP_QUEUE[j])
        if(retval !== void 0) {
          return retval
        }
      }
      sqPush(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive++, e)
    }
  }
}

//Complete sweep
function sweepComplete(d, visit, 
  redStart, redEnd, red, redIndex,
  blueStart, blueEnd, blue, blueIndex) {

  var ptr      = 0
  var elemSize = 2*d
  var istart   = d-1
  var iend     = elemSize-1

  for(var i=redStart; i<redEnd; ++i) {
    var idx = (redIndex[i]+1)<<1
    var redOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = red[redOffset+istart]
    SWEEP_EVENTS[ptr++] = -idx
    SWEEP_EVENTS[ptr++] = red[redOffset+iend]
    SWEEP_EVENTS[ptr++] = idx
  }

  for(var i=blueStart; i<blueEnd; ++i) {
    var idx = (blueIndex[i]+1)<<1
    var blueOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = blue[blueOffset+istart]
    SWEEP_EVENTS[ptr++] = (-idx)|1
    SWEEP_EVENTS[ptr++] = blue[blueOffset+iend]
    SWEEP_EVENTS[ptr++] = idx|1
  }

  //process events from left->right
  var n = ptr >>> 1
  isort(SWEEP_EVENTS, n)
  
  var redActive    = 0
  var blueActive   = 0
  var commonActive = 0
  for(var i=0; i<n; ++i) {
    var e     = SWEEP_EVENTS[2*i+1]|0
    var color = e&1
    if(i < n-1 && (e>>1) === (SWEEP_EVENTS[2*i+3]>>1)) {
      color = 2
      i += 1
    }
    
    if(e < 0) {
      //Create event
      var id = -(e>>1) - 1

      //Intersect with common
      for(var j=0; j<commonActive; ++j) {
        var retval = visit(COMMON_SWEEP_QUEUE[j], id)
        if(retval !== void 0) {
          return retval
        }
      }

      if(color !== 0) {
        //Intersect with red
        for(var j=0; j<redActive; ++j) {
          var retval = visit(RED_SWEEP_QUEUE[j], id)
          if(retval !== void 0) {
            return retval
          }
        }
      }

      if(color !== 1) {
        //Intersect with blue
        for(var j=0; j<blueActive; ++j) {
          var retval = visit(BLUE_SWEEP_QUEUE[j], id)
          if(retval !== void 0) {
            return retval
          }
        }
      }

      if(color === 0) {
        //Red
        sqPush(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive++, id)
      } else if(color === 1) {
        //Blue
        sqPush(BLUE_SWEEP_QUEUE, BLUE_SWEEP_INDEX, blueActive++, id)
      } else if(color === 2) {
        //Both
        sqPush(COMMON_SWEEP_QUEUE, COMMON_SWEEP_INDEX, commonActive++, id)
      }
    } else {
      //Destroy event
      var id = (e>>1) - 1
      if(color === 0) {
        //Red
        sqPop(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive--, id)
      } else if(color === 1) {
        //Blue
        sqPop(BLUE_SWEEP_QUEUE, BLUE_SWEEP_INDEX, blueActive--, id)
      } else if(color === 2) {
        //Both
        sqPop(COMMON_SWEEP_QUEUE, COMMON_SWEEP_INDEX, commonActive--, id)
      }
    }
  }
}

//Sweep and prune/scanline algorithm:
//  Scan along axis, detect intersections
//  Brute force all boxes along axis
function scanBipartite(
  d, axis, visit, flip,
  redStart,  redEnd, red, redIndex,
  blueStart, blueEnd, blue, blueIndex) {
  
  var ptr      = 0
  var elemSize = 2*d
  var istart   = axis
  var iend     = axis+d

  var redShift  = 1
  var blueShift = 1
  if(flip) {
    blueShift = BLUE_FLAG
  } else {
    redShift  = BLUE_FLAG
  }

  for(var i=redStart; i<redEnd; ++i) {
    var idx = i + redShift
    var redOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = red[redOffset+istart]
    SWEEP_EVENTS[ptr++] = -idx
    SWEEP_EVENTS[ptr++] = red[redOffset+iend]
    SWEEP_EVENTS[ptr++] = idx
  }
  for(var i=blueStart; i<blueEnd; ++i) {
    var idx = i + blueShift
    var blueOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = blue[blueOffset+istart]
    SWEEP_EVENTS[ptr++] = -idx
  }

  //process events from left->right
  var n = ptr >>> 1
  isort(SWEEP_EVENTS, n)
  
  var redActive    = 0
  for(var i=0; i<n; ++i) {
    var e = SWEEP_EVENTS[2*i+1]|0
    if(e < 0) {
      var idx   = -e
      var isRed = false
      if(idx >= BLUE_FLAG) {
        isRed = !flip
        idx -= BLUE_FLAG 
      } else {
        isRed = !!flip
        idx -= 1
      }
      if(isRed) {
        sqPush(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive++, idx)
      } else {
        var blueId  = blueIndex[idx]
        var bluePtr = elemSize * idx
        
        var b0 = blue[bluePtr+axis+1]
        var b1 = blue[bluePtr+axis+1+d]

red_loop:
        for(var j=0; j<redActive; ++j) {
          var oidx   = RED_SWEEP_QUEUE[j]
          var redPtr = elemSize * oidx

          if(b1 < red[redPtr+axis+1] || 
             red[redPtr+axis+1+d] < b0) {
            continue
          }

          for(var k=axis+2; k<d; ++k) {
            if(blue[bluePtr + k + d] < red[redPtr + k] || 
               red[redPtr + k + d] < blue[bluePtr + k]) {
              continue red_loop
            }
          }

          var redId  = redIndex[oidx]
          var retval
          if(flip) {
            retval = visit(blueId, redId)
          } else {
            retval = visit(redId, blueId)
          }
          if(retval !== void 0) {
            return retval 
          }
        }
      }
    } else {
      sqPop(RED_SWEEP_QUEUE, RED_SWEEP_INDEX, redActive--, e - redShift)
    }
  }
}

function scanComplete(
  d, axis, visit,
  redStart,  redEnd, red, redIndex,
  blueStart, blueEnd, blue, blueIndex) {

  var ptr      = 0
  var elemSize = 2*d
  var istart   = axis
  var iend     = axis+d

  for(var i=redStart; i<redEnd; ++i) {
    var idx = i + BLUE_FLAG
    var redOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = red[redOffset+istart]
    SWEEP_EVENTS[ptr++] = -idx
    SWEEP_EVENTS[ptr++] = red[redOffset+iend]
    SWEEP_EVENTS[ptr++] = idx
  }
  for(var i=blueStart; i<blueEnd; ++i) {
    var idx = i + 1
    var blueOffset = elemSize*i
    SWEEP_EVENTS[ptr++] = blue[blueOffset+istart]
    SWEEP_EVENTS[ptr++] = -idx
  }

  //process events from left->right
  var n = ptr >>> 1
  isort(SWEEP_EVENTS, n)
  
  var redActive    = 0
  for(var i=0; i<n; ++i) {
    var e = SWEEP_EVENTS[2*i+1]|0
    if(e < 0) {
      var idx   = -e
      if(idx >= BLUE_FLAG) {
        RED_SWEEP_QUEUE[redActive++] = idx - BLUE_FLAG
      } else {
        idx -= 1
        var blueId  = blueIndex[idx]
        var bluePtr = elemSize * idx

        var b0 = blue[bluePtr+axis+1]
        var b1 = blue[bluePtr+axis+1+d]

red_loop:
        for(var j=0; j<redActive; ++j) {
          var oidx   = RED_SWEEP_QUEUE[j]
          var redId  = redIndex[oidx]

          if(redId === blueId) {
            break
          }

          var redPtr = elemSize * oidx
          if(b1 < red[redPtr+axis+1] || 
            red[redPtr+axis+1+d] < b0) {
            continue
          }
          for(var k=axis+2; k<d; ++k) {
            if(blue[bluePtr + k + d] < red[redPtr + k] || 
               red[redPtr + k + d]   < blue[bluePtr + k]) {
              continue red_loop
            }
          }

          var retval = visit(redId, blueId)
          if(retval !== void 0) {
            return retval 
          }
        }
      }
    } else {
      var idx = e - BLUE_FLAG
      for(var j=redActive-1; j>=0; --j) {
        if(RED_SWEEP_QUEUE[j] === idx) {
          for(var k=j+1; k<redActive; ++k) {
            RED_SWEEP_QUEUE[k-1] = RED_SWEEP_QUEUE[k]
          }
          break
        }
      }
      --redActive
    }
  }
}
},{"./sort":127,"bit-twiddle":129,"typedarray-pool":131}],129:[function(_dereq_,module,exports){
/**
 * Bit twiddling hacks for JavaScript.
 *
 * Author: Mikola Lysenko
 *
 * Ported from Stanford bit twiddling hack library:
 *    http://graphics.stanford.edu/~seander/bithacks.html
 */

"use strict"; "use restrict";

//Number of bits in an integer
var INT_BITS = 32;

//Constants
exports.INT_BITS  = INT_BITS;
exports.INT_MAX   =  0x7fffffff;
exports.INT_MIN   = -1<<(INT_BITS-1);

//Returns -1, 0, +1 depending on sign of x
exports.sign = function(v) {
  return (v > 0) - (v < 0);
}

//Computes absolute value of integer
exports.abs = function(v) {
  var mask = v >> (INT_BITS-1);
  return (v ^ mask) - mask;
}

//Computes minimum of integers x and y
exports.min = function(x, y) {
  return y ^ ((x ^ y) & -(x < y));
}

//Computes maximum of integers x and y
exports.max = function(x, y) {
  return x ^ ((x ^ y) & -(x < y));
}

//Checks if a number is a power of two
exports.isPow2 = function(v) {
  return !(v & (v-1)) && (!!v);
}

//Computes log base 2 of v
exports.log2 = function(v) {
  var r, shift;
  r =     (v > 0xFFFF) << 4; v >>>= r;
  shift = (v > 0xFF  ) << 3; v >>>= shift; r |= shift;
  shift = (v > 0xF   ) << 2; v >>>= shift; r |= shift;
  shift = (v > 0x3   ) << 1; v >>>= shift; r |= shift;
  return r | (v >> 1);
}

//Computes log base 10 of v
exports.log10 = function(v) {
  return  (v >= 1000000000) ? 9 : (v >= 100000000) ? 8 : (v >= 10000000) ? 7 :
          (v >= 1000000) ? 6 : (v >= 100000) ? 5 : (v >= 10000) ? 4 :
          (v >= 1000) ? 3 : (v >= 100) ? 2 : (v >= 10) ? 1 : 0;
}

//Counts number of bits
exports.popCount = function(v) {
  v = v - ((v >>> 1) & 0x55555555);
  v = (v & 0x33333333) + ((v >>> 2) & 0x33333333);
  return ((v + (v >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
}

//Counts number of trailing zeros
function countTrailingZeros(v) {
  var c = 32;
  v &= -v;
  if (v) c--;
  if (v & 0x0000FFFF) c -= 16;
  if (v & 0x00FF00FF) c -= 8;
  if (v & 0x0F0F0F0F) c -= 4;
  if (v & 0x33333333) c -= 2;
  if (v & 0x55555555) c -= 1;
  return c;
}
exports.countTrailingZeros = countTrailingZeros;

//Rounds to next power of 2
exports.nextPow2 = function(v) {
  v += v === 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}

//Rounds down to previous power of 2
exports.prevPow2 = function(v) {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v>>>1);
}

//Computes parity of word
exports.parity = function(v) {
  v ^= v >>> 16;
  v ^= v >>> 8;
  v ^= v >>> 4;
  v &= 0xf;
  return (0x6996 >>> v) & 1;
}

var REVERSE_TABLE = new Array(256);

(function(tab) {
  for(var i=0; i<256; ++i) {
    var v = i, r = i, s = 7;
    for (v >>>= 1; v; v >>>= 1) {
      r <<= 1;
      r |= v & 1;
      --s;
    }
    tab[i] = (r << s) & 0xff;
  }
})(REVERSE_TABLE);

//Reverse bits in a 32 bit word
exports.reverse = function(v) {
  return  (REVERSE_TABLE[ v         & 0xff] << 24) |
          (REVERSE_TABLE[(v >>> 8)  & 0xff] << 16) |
          (REVERSE_TABLE[(v >>> 16) & 0xff] << 8)  |
           REVERSE_TABLE[(v >>> 24) & 0xff];
}

//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
exports.interleave2 = function(x, y) {
  x &= 0xFFFF;
  x = (x | (x << 8)) & 0x00FF00FF;
  x = (x | (x << 4)) & 0x0F0F0F0F;
  x = (x | (x << 2)) & 0x33333333;
  x = (x | (x << 1)) & 0x55555555;

  y &= 0xFFFF;
  y = (y | (y << 8)) & 0x00FF00FF;
  y = (y | (y << 4)) & 0x0F0F0F0F;
  y = (y | (y << 2)) & 0x33333333;
  y = (y | (y << 1)) & 0x55555555;

  return x | (y << 1);
}

//Extracts the nth interleaved component
exports.deinterleave2 = function(v, n) {
  v = (v >>> n) & 0x55555555;
  v = (v | (v >>> 1))  & 0x33333333;
  v = (v | (v >>> 2))  & 0x0F0F0F0F;
  v = (v | (v >>> 4))  & 0x00FF00FF;
  v = (v | (v >>> 16)) & 0x000FFFF;
  return (v << 16) >> 16;
}


//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
exports.interleave3 = function(x, y, z) {
  x &= 0x3FF;
  x  = (x | (x<<16)) & 4278190335;
  x  = (x | (x<<8))  & 251719695;
  x  = (x | (x<<4))  & 3272356035;
  x  = (x | (x<<2))  & 1227133513;

  y &= 0x3FF;
  y  = (y | (y<<16)) & 4278190335;
  y  = (y | (y<<8))  & 251719695;
  y  = (y | (y<<4))  & 3272356035;
  y  = (y | (y<<2))  & 1227133513;
  x |= (y << 1);
  
  z &= 0x3FF;
  z  = (z | (z<<16)) & 4278190335;
  z  = (z | (z<<8))  & 251719695;
  z  = (z | (z<<4))  & 3272356035;
  z  = (z | (z<<2))  & 1227133513;
  
  return x | (z << 2);
}

//Extracts nth interleaved component of a 3-tuple
exports.deinterleave3 = function(v, n) {
  v = (v >>> n)       & 1227133513;
  v = (v | (v>>>2))   & 3272356035;
  v = (v | (v>>>4))   & 251719695;
  v = (v | (v>>>8))   & 4278190335;
  v = (v | (v>>>16))  & 0x3FF;
  return (v<<22)>>22;
}

//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
exports.nextCombination = function(v) {
  var t = v | (v - 1);
  return (t + 1) | (((~t & -~t) - 1) >>> (countTrailingZeros(v) + 1));
}


},{}],130:[function(_dereq_,module,exports){
"use strict"

function dupe_array(count, value, i) {
  var c = count[i]|0
  if(c <= 0) {
    return []
  }
  var result = new Array(c), j
  if(i === count.length-1) {
    for(j=0; j<c; ++j) {
      result[j] = value
    }
  } else {
    for(j=0; j<c; ++j) {
      result[j] = dupe_array(count, value, i+1)
    }
  }
  return result
}

function dupe_number(count, value) {
  var result, i
  result = new Array(count)
  for(i=0; i<count; ++i) {
    result[i] = value
  }
  return result
}

function dupe(count, value) {
  if(typeof value === "undefined") {
    value = 0
  }
  switch(typeof count) {
    case "number":
      if(count > 0) {
        return dupe_number(count|0, value)
      }
    break
    case "object":
      if(typeof (count.length) === "number") {
        return dupe_array(count, value, 0)
      }
    break
  }
  return []
}

module.exports = dupe
},{}],131:[function(_dereq_,module,exports){
(function (global,Buffer){
'use strict'

var bits = _dereq_('bit-twiddle')
var dup = _dereq_('dup')

//Legacy pool support
if(!global.__TYPEDARRAY_POOL) {
  global.__TYPEDARRAY_POOL = {
      UINT8   : dup([32, 0])
    , UINT16  : dup([32, 0])
    , UINT32  : dup([32, 0])
    , INT8    : dup([32, 0])
    , INT16   : dup([32, 0])
    , INT32   : dup([32, 0])
    , FLOAT   : dup([32, 0])
    , DOUBLE  : dup([32, 0])
    , DATA    : dup([32, 0])
    , UINT8C  : dup([32, 0])
    , BUFFER  : dup([32, 0])
  }
}

var hasUint8C = (typeof Uint8ClampedArray) !== 'undefined'
var POOL = global.__TYPEDARRAY_POOL

//Upgrade pool
if(!POOL.UINT8C) {
  POOL.UINT8C = dup([32, 0])
}
if(!POOL.BUFFER) {
  POOL.BUFFER = dup([32, 0])
}

//New technique: Only allocate from ArrayBufferView and Buffer
var DATA    = POOL.DATA
  , BUFFER  = POOL.BUFFER

exports.free = function free(array) {
  if(Buffer.isBuffer(array)) {
    BUFFER[bits.log2(array.length)].push(array)
  } else {
    if(Object.prototype.toString.call(array) !== '[object ArrayBuffer]') {
      array = array.buffer
    }
    if(!array) {
      return
    }
    var n = array.length || array.byteLength
    var log_n = bits.log2(n)|0
    DATA[log_n].push(array)
  }
}

function freeArrayBuffer(buffer) {
  if(!buffer) {
    return
  }
  var n = buffer.length || buffer.byteLength
  var log_n = bits.log2(n)
  DATA[log_n].push(buffer)
}

function freeTypedArray(array) {
  freeArrayBuffer(array.buffer)
}

exports.freeUint8 =
exports.freeUint16 =
exports.freeUint32 =
exports.freeInt8 =
exports.freeInt16 =
exports.freeInt32 =
exports.freeFloat32 = 
exports.freeFloat =
exports.freeFloat64 = 
exports.freeDouble = 
exports.freeUint8Clamped = 
exports.freeDataView = freeTypedArray

exports.freeArrayBuffer = freeArrayBuffer

exports.freeBuffer = function freeBuffer(array) {
  BUFFER[bits.log2(array.length)].push(array)
}

exports.malloc = function malloc(n, dtype) {
  if(dtype === undefined || dtype === 'arraybuffer') {
    return mallocArrayBuffer(n)
  } else {
    switch(dtype) {
      case 'uint8':
        return mallocUint8(n)
      case 'uint16':
        return mallocUint16(n)
      case 'uint32':
        return mallocUint32(n)
      case 'int8':
        return mallocInt8(n)
      case 'int16':
        return mallocInt16(n)
      case 'int32':
        return mallocInt32(n)
      case 'float':
      case 'float32':
        return mallocFloat(n)
      case 'double':
      case 'float64':
        return mallocDouble(n)
      case 'uint8_clamped':
        return mallocUint8Clamped(n)
      case 'buffer':
        return mallocBuffer(n)
      case 'data':
      case 'dataview':
        return mallocDataView(n)

      default:
        return null
    }
  }
  return null
}

function mallocArrayBuffer(n) {
  var n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var d = DATA[log_n]
  if(d.length > 0) {
    return d.pop()
  }
  return new ArrayBuffer(n)
}
exports.mallocArrayBuffer = mallocArrayBuffer

function mallocUint8(n) {
  return new Uint8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocUint8 = mallocUint8

function mallocUint16(n) {
  return new Uint16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocUint16 = mallocUint16

function mallocUint32(n) {
  return new Uint32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocUint32 = mallocUint32

function mallocInt8(n) {
  return new Int8Array(mallocArrayBuffer(n), 0, n)
}
exports.mallocInt8 = mallocInt8

function mallocInt16(n) {
  return new Int16Array(mallocArrayBuffer(2*n), 0, n)
}
exports.mallocInt16 = mallocInt16

function mallocInt32(n) {
  return new Int32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocInt32 = mallocInt32

function mallocFloat(n) {
  return new Float32Array(mallocArrayBuffer(4*n), 0, n)
}
exports.mallocFloat32 = exports.mallocFloat = mallocFloat

function mallocDouble(n) {
  return new Float64Array(mallocArrayBuffer(8*n), 0, n)
}
exports.mallocFloat64 = exports.mallocDouble = mallocDouble

function mallocUint8Clamped(n) {
  if(hasUint8C) {
    return new Uint8ClampedArray(mallocArrayBuffer(n), 0, n)
  } else {
    return mallocUint8(n)
  }
}
exports.mallocUint8Clamped = mallocUint8Clamped

function mallocDataView(n) {
  return new DataView(mallocArrayBuffer(n), 0, n)
}
exports.mallocDataView = mallocDataView

function mallocBuffer(n) {
  n = bits.nextPow2(n)
  var log_n = bits.log2(n)
  var cache = BUFFER[log_n]
  if(cache.length > 0) {
    return cache.pop()
  }
  return new Buffer(n)
}
exports.mallocBuffer = mallocBuffer

exports.clearCache = function clearCache() {
  for(var i=0; i<32; ++i) {
    POOL.UINT8[i].length = 0
    POOL.UINT16[i].length = 0
    POOL.UINT32[i].length = 0
    POOL.INT8[i].length = 0
    POOL.INT16[i].length = 0
    POOL.INT32[i].length = 0
    POOL.FLOAT[i].length = 0
    POOL.DOUBLE[i].length = 0
    POOL.UINT8C[i].length = 0
    DATA[i].length = 0
    BUFFER[i].length = 0
  }
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},_dereq_("buffer").Buffer)
},{"bit-twiddle":129,"buffer":133,"dup":130}],132:[function(_dereq_,module,exports){
arguments[4][112][0].apply(exports,arguments)
},{"dup":112}],133:[function(_dereq_,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = _dereq_('base64-js')
var ieee754 = _dereq_('ieee754')
var isArray = _dereq_('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192 // not used by this implementation

var rootParent = {}

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
 *     on objects.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

function typedArraySupport () {
  function Bar () {}
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
    arr.constructor = Bar
    return arr.foo() === 42 && // typed array instances can be augmented
        arr.constructor === Bar && // constructor can be set
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (arg) {
  if (!(this instanceof Buffer)) {
    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
    if (arguments.length > 1) return new Buffer(arg, arguments[1])
    return new Buffer(arg)
  }

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    this.length = 0
    this.parent = undefined
  }

  // Common case.
  if (typeof arg === 'number') {
    return fromNumber(this, arg)
  }

  // Slightly less common case.
  if (typeof arg === 'string') {
    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
  }

  // Unusual.
  return fromObject(this, arg)
}

function fromNumber (that, length) {
  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < length; i++) {
      that[i] = 0
    }
  }
  return that
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

  // Assumption: byteLength() return value is always < kMaxLength.
  var length = byteLength(string, encoding) | 0
  that = allocate(that, length)

  that.write(string, encoding)
  return that
}

function fromObject (that, object) {
  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

  if (isArray(object)) return fromArray(that, object)

  if (object == null) {
    throw new TypeError('must start with number, buffer, array or string')
  }

  if (typeof ArrayBuffer !== 'undefined') {
    if (object.buffer instanceof ArrayBuffer) {
      return fromTypedArray(that, object)
    }
    if (object instanceof ArrayBuffer) {
      return fromArrayBuffer(that, object)
    }
  }

  if (object.length) return fromArrayLike(that, object)

  return fromJsonObject(that, object)
}

function fromBuffer (that, buffer) {
  var length = checked(buffer.length) | 0
  that = allocate(that, length)
  buffer.copy(that, 0, 0, length)
  return that
}

function fromArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Duplicate of fromArray() to keep fromArray() monomorphic.
function fromTypedArray (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  // Truncating the elements is probably not what people expect from typed
  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
  // of the old Buffer constructor.
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    array.byteLength
    that = Buffer._augment(new Uint8Array(array))
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromTypedArray(that, new Uint8Array(array))
  }
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = allocate(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
// Returns a zero-length buffer for inputs that don't conform to the spec.
function fromJsonObject (that, object) {
  var array
  var length = 0

  if (object.type === 'Buffer' && isArray(object.data)) {
    array = object.data
    length = checked(array.length) | 0
  }
  that = allocate(that, length)

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
} else {
  // pre-set for values that may exist in the future
  Buffer.prototype.length = undefined
  Buffer.prototype.parent = undefined
}

function allocate (that, length) {
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = Buffer._augment(new Uint8Array(length))
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that.length = length
    that._isBuffer = true
  }

  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
  if (fromPool) that.parent = rootParent

  return that
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (subject, encoding) {
  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

  var buf = new Buffer(subject, encoding)
  delete buf.parent
  return buf
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  var i = 0
  var len = Math.min(x, y)
  while (i < len) {
    if (a[i] !== b[i]) break

    ++i
  }

  if (i !== len) {
    x = a[i]
    y = b[i]
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

  if (list.length === 0) {
    return new Buffer(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buf = new Buffer(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

function byteLength (string, encoding) {
  if (typeof string !== 'string') string = '' + string

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  start = start | 0
  end = end === undefined || end === Infinity ? this.length : end | 0

  if (!encoding) encoding = 'utf8'
  if (start < 0) start = 0
  if (end > this.length) end = this.length
  if (end <= start) return ''

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return 0
  return Buffer.compare(this, b)
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    if (val.length === 0) return -1 // special case: looking for empty string always fails
    return String.prototype.indexOf.call(this, val, byteOffset)
  }
  if (Buffer.isBuffer(val)) {
    return arrayIndexOf(this, val, byteOffset)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset)
  }

  function arrayIndexOf (arr, val, byteOffset) {
    var foundIndex = -1
    for (var i = 0; byteOffset + i < arr.length; i++) {
      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
      } else {
        foundIndex = -1
      }
    }
    return -1
  }

  throw new TypeError('val must be string, number or Buffer')
}

// `get` is deprecated
Buffer.prototype.get = function get (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` is deprecated
Buffer.prototype.set = function set (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) throw new Error('Invalid hex string')
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    var swap = encoding
    encoding = offset
    offset = length | 0
    length = swap
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  if (newBuf.length) newBuf.parent = this.parent || this

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = value < 0 ? 1 : 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (value > max || value < min) throw new RangeError('value is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('index out of range')
  if (offset < 0) throw new RangeError('index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    target._set(this.subarray(start, start + len), targetStart)
  }

  return len
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function fill (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (end < start) throw new RangeError('end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

  var i
  if (typeof value === 'number') {
    for (i = start; i < end; i++) {
      this[i] = value
    }
  } else {
    var bytes = utf8ToBytes(value.toString())
    var len = bytes.length
    for (i = start; i < end; i++) {
      this[i] = bytes[i % len]
    }
  }

  return this
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer.TYPED_ARRAY_SUPPORT) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1) {
        buf[i] = this[i]
      }
      return buf.buffer
    }
  } else {
    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function _augment (arr) {
  arr.constructor = Buffer
  arr._isBuffer = true

  // save reference to original Uint8Array set method before overwriting
  arr._set = arr.set

  // deprecated
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.equals = BP.equals
  arr.compare = BP.compare
  arr.indexOf = BP.indexOf
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUIntLE = BP.readUIntLE
  arr.readUIntBE = BP.readUIntBE
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readIntLE = BP.readIntLE
  arr.readIntBE = BP.readIntBE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUIntLE = BP.writeUIntLE
  arr.writeUIntBE = BP.writeUIntBE
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeIntLE = BP.writeIntLE
  arr.writeIntBE = BP.writeIntBE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":134,"ieee754":135,"isarray":136}],134:[function(_dereq_,module,exports){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

},{}],135:[function(_dereq_,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],136:[function(_dereq_,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],137:[function(_dereq_,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],138:[function(_dereq_,module,exports){
// (c) Dean McNamee <dean@gmail.com>, 2012.
//
// https://github.com/deanm/css-color-parser-js
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.

// http://www.w3.org/TR/css3-color/
var kCSSColorTable = {
  "transparent": [0,0,0,0], "aliceblue": [240,248,255,1],
  "antiquewhite": [250,235,215,1], "aqua": [0,255,255,1],
  "aquamarine": [127,255,212,1], "azure": [240,255,255,1],
  "beige": [245,245,220,1], "bisque": [255,228,196,1],
  "black": [0,0,0,1], "blanchedalmond": [255,235,205,1],
  "blue": [0,0,255,1], "blueviolet": [138,43,226,1],
  "brown": [165,42,42,1], "burlywood": [222,184,135,1],
  "cadetblue": [95,158,160,1], "chartreuse": [127,255,0,1],
  "chocolate": [210,105,30,1], "coral": [255,127,80,1],
  "cornflowerblue": [100,149,237,1], "cornsilk": [255,248,220,1],
  "crimson": [220,20,60,1], "cyan": [0,255,255,1],
  "darkblue": [0,0,139,1], "darkcyan": [0,139,139,1],
  "darkgoldenrod": [184,134,11,1], "darkgray": [169,169,169,1],
  "darkgreen": [0,100,0,1], "darkgrey": [169,169,169,1],
  "darkkhaki": [189,183,107,1], "darkmagenta": [139,0,139,1],
  "darkolivegreen": [85,107,47,1], "darkorange": [255,140,0,1],
  "darkorchid": [153,50,204,1], "darkred": [139,0,0,1],
  "darksalmon": [233,150,122,1], "darkseagreen": [143,188,143,1],
  "darkslateblue": [72,61,139,1], "darkslategray": [47,79,79,1],
  "darkslategrey": [47,79,79,1], "darkturquoise": [0,206,209,1],
  "darkviolet": [148,0,211,1], "deeppink": [255,20,147,1],
  "deepskyblue": [0,191,255,1], "dimgray": [105,105,105,1],
  "dimgrey": [105,105,105,1], "dodgerblue": [30,144,255,1],
  "firebrick": [178,34,34,1], "floralwhite": [255,250,240,1],
  "forestgreen": [34,139,34,1], "fuchsia": [255,0,255,1],
  "gainsboro": [220,220,220,1], "ghostwhite": [248,248,255,1],
  "gold": [255,215,0,1], "goldenrod": [218,165,32,1],
  "gray": [128,128,128,1], "green": [0,128,0,1],
  "greenyellow": [173,255,47,1], "grey": [128,128,128,1],
  "honeydew": [240,255,240,1], "hotpink": [255,105,180,1],
  "indianred": [205,92,92,1], "indigo": [75,0,130,1],
  "ivory": [255,255,240,1], "khaki": [240,230,140,1],
  "lavender": [230,230,250,1], "lavenderblush": [255,240,245,1],
  "lawngreen": [124,252,0,1], "lemonchiffon": [255,250,205,1],
  "lightblue": [173,216,230,1], "lightcoral": [240,128,128,1],
  "lightcyan": [224,255,255,1], "lightgoldenrodyellow": [250,250,210,1],
  "lightgray": [211,211,211,1], "lightgreen": [144,238,144,1],
  "lightgrey": [211,211,211,1], "lightpink": [255,182,193,1],
  "lightsalmon": [255,160,122,1], "lightseagreen": [32,178,170,1],
  "lightskyblue": [135,206,250,1], "lightslategray": [119,136,153,1],
  "lightslategrey": [119,136,153,1], "lightsteelblue": [176,196,222,1],
  "lightyellow": [255,255,224,1], "lime": [0,255,0,1],
  "limegreen": [50,205,50,1], "linen": [250,240,230,1],
  "magenta": [255,0,255,1], "maroon": [128,0,0,1],
  "mediumaquamarine": [102,205,170,1], "mediumblue": [0,0,205,1],
  "mediumorchid": [186,85,211,1], "mediumpurple": [147,112,219,1],
  "mediumseagreen": [60,179,113,1], "mediumslateblue": [123,104,238,1],
  "mediumspringgreen": [0,250,154,1], "mediumturquoise": [72,209,204,1],
  "mediumvioletred": [199,21,133,1], "midnightblue": [25,25,112,1],
  "mintcream": [245,255,250,1], "mistyrose": [255,228,225,1],
  "moccasin": [255,228,181,1], "navajowhite": [255,222,173,1],
  "navy": [0,0,128,1], "oldlace": [253,245,230,1],
  "olive": [128,128,0,1], "olivedrab": [107,142,35,1],
  "orange": [255,165,0,1], "orangered": [255,69,0,1],
  "orchid": [218,112,214,1], "palegoldenrod": [238,232,170,1],
  "palegreen": [152,251,152,1], "paleturquoise": [175,238,238,1],
  "palevioletred": [219,112,147,1], "papayawhip": [255,239,213,1],
  "peachpuff": [255,218,185,1], "peru": [205,133,63,1],
  "pink": [255,192,203,1], "plum": [221,160,221,1],
  "powderblue": [176,224,230,1], "purple": [128,0,128,1],
  "red": [255,0,0,1], "rosybrown": [188,143,143,1],
  "royalblue": [65,105,225,1], "saddlebrown": [139,69,19,1],
  "salmon": [250,128,114,1], "sandybrown": [244,164,96,1],
  "seagreen": [46,139,87,1], "seashell": [255,245,238,1],
  "sienna": [160,82,45,1], "silver": [192,192,192,1],
  "skyblue": [135,206,235,1], "slateblue": [106,90,205,1],
  "slategray": [112,128,144,1], "slategrey": [112,128,144,1],
  "snow": [255,250,250,1], "springgreen": [0,255,127,1],
  "steelblue": [70,130,180,1], "tan": [210,180,140,1],
  "teal": [0,128,128,1], "thistle": [216,191,216,1],
  "tomato": [255,99,71,1], "turquoise": [64,224,208,1],
  "violet": [238,130,238,1], "wheat": [245,222,179,1],
  "white": [255,255,255,1], "whitesmoke": [245,245,245,1],
  "yellow": [255,255,0,1], "yellowgreen": [154,205,50,1]}

function clamp_css_byte(i) {  // Clamp to integer 0 .. 255.
  i = Math.round(i);  // Seems to be what Chrome does (vs truncation).
  return i < 0 ? 0 : i > 255 ? 255 : i;
}

function clamp_css_float(f) {  // Clamp to float 0.0 .. 1.0.
  return f < 0 ? 0 : f > 1 ? 1 : f;
}

function parse_css_int(str) {  // int or percentage.
  if (str[str.length - 1] === '%')
    return clamp_css_byte(parseFloat(str) / 100 * 255);
  return clamp_css_byte(parseInt(str));
}

function parse_css_float(str) {  // float or percentage.
  if (str[str.length - 1] === '%')
    return clamp_css_float(parseFloat(str) / 100);
  return clamp_css_float(parseFloat(str));
}

function css_hue_to_rgb(m1, m2, h) {
  if (h < 0) h += 1;
  else if (h > 1) h -= 1;

  if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
  if (h * 2 < 1) return m2;
  if (h * 3 < 2) return m1 + (m2 - m1) * (2/3 - h) * 6;
  return m1;
}

function parseCSSColor(css_str) {
  // Remove all whitespace, not compliant, but should just be more accepting.
  var str = css_str.replace(/ /g, '').toLowerCase();

  // Color keywords (and transparent) lookup.
  if (str in kCSSColorTable) return kCSSColorTable[str].slice();  // dup.

  // #abc and #abc123 syntax.
  if (str[0] === '#') {
    if (str.length === 4) {
      var iv = parseInt(str.substr(1), 16);  // TODO(deanm): Stricter parsing.
      if (!(iv >= 0 && iv <= 0xfff)) return null;  // Covers NaN.
      return [((iv & 0xf00) >> 4) | ((iv & 0xf00) >> 8),
              (iv & 0xf0) | ((iv & 0xf0) >> 4),
              (iv & 0xf) | ((iv & 0xf) << 4),
              1];
    } else if (str.length === 7) {
      var iv = parseInt(str.substr(1), 16);  // TODO(deanm): Stricter parsing.
      if (!(iv >= 0 && iv <= 0xffffff)) return null;  // Covers NaN.
      return [(iv & 0xff0000) >> 16,
              (iv & 0xff00) >> 8,
              iv & 0xff,
              1];
    }

    return null;
  }

  var op = str.indexOf('('), ep = str.indexOf(')');
  if (op !== -1 && ep + 1 === str.length) {
    var fname = str.substr(0, op);
    var params = str.substr(op+1, ep-(op+1)).split(',');
    var alpha = 1;  // To allow case fallthrough.
    switch (fname) {
      case 'rgba':
        if (params.length !== 4) return null;
        alpha = parse_css_float(params.pop());
        // Fall through.
      case 'rgb':
        if (params.length !== 3) return null;
        return [parse_css_int(params[0]),
                parse_css_int(params[1]),
                parse_css_int(params[2]),
                alpha];
      case 'hsla':
        if (params.length !== 4) return null;
        alpha = parse_css_float(params.pop());
        // Fall through.
      case 'hsl':
        if (params.length !== 3) return null;
        var h = (((parseFloat(params[0]) % 360) + 360) % 360) / 360;  // 0 .. 1
        // NOTE(deanm): According to the CSS spec s/l should only be
        // percentages, but we don't bother and let float or percentage.
        var s = parse_css_float(params[1]);
        var l = parse_css_float(params[2]);
        var m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        var m1 = l * 2 - m2;
        return [clamp_css_byte(css_hue_to_rgb(m1, m2, h+1/3) * 255),
                clamp_css_byte(css_hue_to_rgb(m1, m2, h) * 255),
                clamp_css_byte(css_hue_to_rgb(m1, m2, h-1/3) * 255),
                alpha];
      default:
        return null;
    }
  }

  return null;
}

try { exports.parseCSSColor = parseCSSColor } catch(e) { }

},{}],139:[function(_dereq_,module,exports){
'use strict';

module.exports = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode) return triangles;

    var minX, minY, maxX, maxY, x, y, size;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and size are later used to transform coords into integers for z-order calculation
        size = Math.max(maxX - minX, maxY - minY);
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, size);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === (signedArea(data, start, end, dim) > 0)) {
        for (i = start; i < end; i += dim) last = insertNode(i, data[i], data[i + 1], last);
    } else {
        for (i = end - dim; i >= start; i -= dim) last = insertNode(i, data[i], data[i + 1], last);
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) return null;
            again = true;

        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, size, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && size) indexCurve(ear, minX, minY, size);

    var stop = ear,
        prev, next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertice leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);

            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(ear, triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, size, 2);

            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, size);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, size) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? (a.x < c.x ? a.x : c.x) : (b.x < c.x ? b.x : c.x),
        minTY = a.y < b.y ? (a.y < c.y ? a.y : c.y) : (b.y < c.y ? b.y : c.y),
        maxTX = a.x > b.x ? (a.x > c.x ? a.x : c.x) : (b.x > c.x ? b.x : c.x),
        maxTY = a.y > b.y ? (a.y > c.y ? a.y : c.y) : (b.y > c.y ? b.y : c.y);

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, size),
        maxZ = zOrder(maxTX, maxTY, minX, minY, size);

    // first look for points inside the triangle in increasing z-order
    var p = ear.nextZ;

    while (p && p.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.nextZ;
    }

    // then look for points in decreasing z-order
    p = ear.prevZ;

    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next &&
            pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) &&
            area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return p;
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, size) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, size);
                earcutLinked(c, triangles, dim, minX, minY, size);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i, len, start, end, list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m.next;

    while (p !== stop) {
        if (hx >= p.x && p.x >= mx &&
                pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if ((tan < tanMin || (tan === tanMin && p.x > m.x)) && locallyInside(p, hole)) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    }

    return m;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, size) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, size);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i, p, q, e, tail, numMerges, pSize, qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }

            qSize = inSize;

            while (pSize > 0 || (qSize > 0 && q)) {

                if (pSize === 0) {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                } else if (qSize === 0 || !q) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else if (p.z <= q.z) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;
                else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;

    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and size of the data bounding box
function zOrder(x, y, minX, minY, size) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) / size;
    y = 32767 * (y - minY) / size;

    x = (x | (x << 8)) & 0x00FF00FF;
    x = (x | (x << 4)) & 0x0F0F0F0F;
    x = (x | (x << 2)) & 0x33333333;
    x = (x | (x << 1)) & 0x55555555;

    y = (y | (y << 8)) & 0x00FF00FF;
    y = (y | (y << 4)) & 0x0F0F0F0F;
    y = (y | (y << 2)) & 0x33333333;
    y = (y | (y << 1)) & 0x55555555;

    return x | (y << 1);
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 &&
           (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 &&
           (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) &&
           locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    if ((equals(p1, q1) && equals(p2, q2)) ||
        (equals(p1, q2) && equals(p2, q1))) return true;
    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 &&
           area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i &&
                intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ?
        area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 :
        area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (((p.y > py) !== (p.next.y > py)) && (px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x))
            inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;

    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertice index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertice nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
            (data[a] - data[c]) * (data[b + 1] - data[a + 1]) -
            (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 :
        Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = {vertices: [], holes: [], dimensions: dim},
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};

},{}],140:[function(_dereq_,module,exports){
(function(){var m=!!document.addEventListener;function n(a,b){m?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function v(a){document.body?a():m?document.addEventListener("DOMContentLoaded",a):document.attachEvent("onreadystatechange",function(){"interactive"!=document.readyState&&"complete"!=document.readyState||a()})};function w(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function y(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=l;z(a)&&null!==a.a.parentNode&&b(a.g)}var l=a;n(a.b,c);n(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,H=!!window.FontFace;function I(){if(null===D){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}D=""!==a.style.font}return D}function J(a,b){return[a.style,a.weight,I()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,l=a||"BESbswy",x=b||3E3,E=(new Date).getTime();return new Promise(function(a,b){if(H){var K=new Promise(function(a,b){var e=J(c,c.family);if(document.fonts.check(e,l))a();else{var f=function(){(new Date).getTime()-E>=x?b():document.fonts.load(e,l).then(function(c){1<=c.length?a():setTimeout(f,25)},function(){b()})};f()}}),L=new Promise(function(a,c){setTimeout(c,x)});Promise.race([L,K]).then(function(){a(c)},function(){b(c)})}else v(function(){function q(){var b;
if(b=-1!=g&&-1!=h||-1!=g&&-1!=k||-1!=h&&-1!=k)(b=g!=h&&g!=k&&h!=k)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(g==r&&h==r&&k==r||g==t&&h==t&&k==t||g==u&&h==u&&k==u)),b=!b;b&&(null!==d.parentNode&&d.parentNode.removeChild(d),clearTimeout(G),a(c))}function F(){if((new Date).getTime()-E>=x)null!==d.parentNode&&d.parentNode.removeChild(d),b(c);else{var a=document.hidden;if(!0===
a||void 0===a)g=e.a.offsetWidth,h=f.a.offsetWidth,k=p.a.offsetWidth,q();G=setTimeout(F,50)}}var e=new w(l),f=new w(l),p=new w(l),g=-1,h=-1,k=-1,r=-1,t=-1,u=-1,d=document.createElement("div"),G=0;d.dir="ltr";y(e,J(c,"sans-serif"));y(f,J(c,"serif"));y(p,J(c,"monospace"));d.appendChild(e.a);d.appendChild(f.a);d.appendChild(p.a);document.body.appendChild(d);r=e.a.offsetWidth;t=f.a.offsetWidth;u=p.a.offsetWidth;F();A(e,function(a){g=a;q()});y(e,J(c,'"'+c.family+'",sans-serif'));A(f,function(a){h=a;q()});
y(f,J(c,'"'+c.family+'",serif'));A(p,function(a){k=a;q()});y(p,J(c,'"'+c.family+'",monospace'))})})};window.FontFaceObserver=B;window.FontFaceObserver.prototype.check=window.FontFaceObserver.prototype.load=B.prototype.load;"undefined"!==typeof module&&(module.exports=window.FontFaceObserver);}());

},{}],141:[function(_dereq_,module,exports){
'use strict';

module.exports = clip;

/* clip features between two axis-parallel lines:
 *     |        |
 *  ___|___     |     /
 * /   |   \____|____/
 *     |        |
 */

function clip(features, scale, k1, k2, axis, intersect, minAll, maxAll) {

    k1 /= scale;
    k2 /= scale;

    if (minAll >= k1 && maxAll <= k2) return features; // trivial accept
    else if (minAll > k2 || maxAll < k1) return null; // trivial reject

    var clipped = [];

    for (var i = 0; i < features.length; i++) {

        var feature = features[i],
            geometry = feature.geometry,
            type = feature.type,
            min, max;

        min = feature.min[axis];
        max = feature.max[axis];

        if (min >= k1 && max <= k2) { // trivial accept
            clipped.push(feature);
            continue;
        } else if (min > k2 || max < k1) continue; // trivial reject

        var slices = type === 1 ?
                clipPoints(geometry, k1, k2, axis) :
                clipGeometry(geometry, k1, k2, axis, intersect, type === 3);

        if (slices.length) {
            // if a feature got clipped, it will likely get clipped on the next zoom level as well,
            // so there's no need to recalculate bboxes
            clipped.push({
                geometry: slices,
                type: type,
                tags: features[i].tags || null,
                min: feature.min,
                max: feature.max
            });
        }
    }

    return clipped.length ? clipped : null;
}

function clipPoints(geometry, k1, k2, axis) {
    var slice = [];

    for (var i = 0; i < geometry.length; i++) {
        var a = geometry[i],
            ak = a[axis];

        if (ak >= k1 && ak <= k2) slice.push(a);
    }
    return slice;
}

function clipGeometry(geometry, k1, k2, axis, intersect, closed) {

    var slices = [];

    for (var i = 0; i < geometry.length; i++) {

        var ak = 0,
            bk = 0,
            b = null,
            points = geometry[i],
            area = points.area,
            dist = points.dist,
            len = points.length,
            a, j, last;

        var slice = [];

        for (j = 0; j < len - 1; j++) {
            a = b || points[j];
            b = points[j + 1];
            ak = bk || a[axis];
            bk = b[axis];

            if (ak < k1) {

                if ((bk > k2)) { // ---|-----|-->
                    slice.push(intersect(a, b, k1), intersect(a, b, k2));
                    if (!closed) slice = newSlice(slices, slice, area, dist);

                } else if (bk >= k1) slice.push(intersect(a, b, k1)); // ---|-->  |

            } else if (ak > k2) {

                if ((bk < k1)) { // <--|-----|---
                    slice.push(intersect(a, b, k2), intersect(a, b, k1));
                    if (!closed) slice = newSlice(slices, slice, area, dist);

                } else if (bk <= k2) slice.push(intersect(a, b, k2)); // |  <--|---

            } else {

                slice.push(a);

                if (bk < k1) { // <--|---  |
                    slice.push(intersect(a, b, k1));
                    if (!closed) slice = newSlice(slices, slice, area, dist);

                } else if (bk > k2) { // |  ---|-->
                    slice.push(intersect(a, b, k2));
                    if (!closed) slice = newSlice(slices, slice, area, dist);
                }
                // | --> |
            }
        }

        // add the last point
        a = points[len - 1];
        ak = a[axis];
        if (ak >= k1 && ak <= k2) slice.push(a);

        // close the polygon if its endpoints are not the same after clipping

        last = slice[slice.length - 1];
        if (closed && last && (slice[0][0] !== last[0] || slice[0][1] !== last[1])) slice.push(slice[0]);

        // add the final slice
        newSlice(slices, slice, area, dist);
    }

    return slices;
}

function newSlice(slices, slice, area, dist) {
    if (slice.length) {
        // we don't recalculate the area/length of the unclipped geometry because the case where it goes
        // below the visibility threshold as a result of clipping is rare, so we avoid doing unnecessary work
        slice.area = area;
        slice.dist = dist;

        slices.push(slice);
    }
    return [];
}

},{}],142:[function(_dereq_,module,exports){
'use strict';

module.exports = convert;

var simplify = _dereq_('./simplify');

// converts GeoJSON feature into an intermediate projected JSON vector format with simplification data

function convert(data, tolerance) {
    var features = [];

    if (data.type === 'FeatureCollection') {
        for (var i = 0; i < data.features.length; i++) {
            convertFeature(features, data.features[i], tolerance);
        }
    } else if (data.type === 'Feature') {
        convertFeature(features, data, tolerance);

    } else {
        // single geometry or a geometry collection
        convertFeature(features, {geometry: data}, tolerance);
    }
    return features;
}

function convertFeature(features, feature, tolerance) {
    var geom = feature.geometry,
        type = geom.type,
        coords = geom.coordinates,
        tags = feature.properties,
        i, j, rings;

    if (type === 'Point') {
        features.push(create(tags, 1, [projectPoint(coords)]));

    } else if (type === 'MultiPoint') {
        features.push(create(tags, 1, project(coords)));

    } else if (type === 'LineString') {
        features.push(create(tags, 2, [project(coords, tolerance)]));

    } else if (type === 'MultiLineString' || type === 'Polygon') {
        rings = [];
        for (i = 0; i < coords.length; i++) {
            rings.push(project(coords[i], tolerance));
        }
        features.push(create(tags, type === 'Polygon' ? 3 : 2, rings));

    } else if (type === 'MultiPolygon') {
        rings = [];
        for (i = 0; i < coords.length; i++) {
            for (j = 0; j < coords[i].length; j++) {
                rings.push(project(coords[i][j], tolerance));
            }
        }
        features.push(create(tags, 3, rings));

    } else if (type === 'GeometryCollection') {
        for (i = 0; i < geom.geometries.length; i++) {
            convertFeature(features, {
                geometry: geom.geometries[i],
                properties: tags
            }, tolerance);
        }

    } else {
        throw new Error('Input data is not a valid GeoJSON object.');
    }
}

function create(tags, type, geometry) {
    var feature = {
        geometry: geometry,
        type: type,
        tags: tags || null,
        min: [2, 1], // initial bbox values;
        max: [-1, 0]  // note that coords are usually in [0..1] range
    };
    calcBBox(feature);
    return feature;
}

function project(lonlats, tolerance) {
    var projected = [];
    for (var i = 0; i < lonlats.length; i++) {
        projected.push(projectPoint(lonlats[i]));
    }
    if (tolerance) {
        simplify(projected, tolerance);
        calcSize(projected);
    }
    return projected;
}

function projectPoint(p) {
    var sin = Math.sin(p[1] * Math.PI / 180),
        x = (p[0] / 360 + 0.5),
        y = (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);

    y = y < -1 ? -1 :
        y > 1 ? 1 : y;

    return [x, y, 0];
}

// calculate area and length of the poly
function calcSize(points) {
    var area = 0,
        dist = 0;

    for (var i = 0, a, b; i < points.length - 1; i++) {
        a = b || points[i];
        b = points[i + 1];

        area += a[0] * b[1] - b[0] * a[1];

        // use Manhattan distance instead of Euclidian one to avoid expensive square root computation
        dist += Math.abs(b[0] - a[0]) + Math.abs(b[1] - a[1]);
    }
    points.area = Math.abs(area / 2);
    points.dist = dist;
}

// calculate the feature bounding box for faster clipping later
function calcBBox(feature) {
    var geometry = feature.geometry,
        min = feature.min,
        max = feature.max;

    if (feature.type === 1) calcRingBBox(min, max, geometry);
    else for (var i = 0; i < geometry.length; i++) calcRingBBox(min, max, geometry[i]);

    return feature;
}

function calcRingBBox(min, max, points) {
    for (var i = 0, p; i < points.length; i++) {
        p = points[i];
        min[0] = Math.min(p[0], min[0]);
        max[0] = Math.max(p[0], max[0]);
        min[1] = Math.min(p[1], min[1]);
        max[1] = Math.max(p[1], max[1]);
    }
}

},{"./simplify":144}],143:[function(_dereq_,module,exports){
'use strict';

module.exports = geojsonvt;

var convert = _dereq_('./convert'), // GeoJSON conversion and preprocessing
    clip = _dereq_('./clip'),       // stripe clipping algorithm
    wrap = _dereq_('./wrap'),       // date line processing
    createTile = _dereq_('./tile'); // final simplified tile generation


function geojsonvt(data, options) {
    return new GeoJSONVT(data, options);
}

function GeoJSONVT(data, options) {
    options = this.options = extend(Object.create(this.options), options);

    var debug = options.debug;

    if (debug) console.time('preprocess data');

    var z2 = 1 << options.maxZoom, // 2^z
        features = convert(data, options.tolerance / (z2 * options.extent));

    this.tiles = {};
    this.tileCoords = [];

    if (debug) {
        console.timeEnd('preprocess data');
        console.log('index: maxZoom: %d, maxPoints: %d', options.indexMaxZoom, options.indexMaxPoints);
        console.time('generate tiles');
        this.stats = {};
        this.total = 0;
    }

    features = wrap(features, options.buffer / options.extent, intersectX);

    // start slicing from the top tile down
    if (features.length) this.splitTile(features, 0, 0, 0);

    if (debug) {
        if (features.length) console.log('features: %d, points: %d', this.tiles[0].numFeatures, this.tiles[0].numPoints);
        console.timeEnd('generate tiles');
        console.log('tiles generated:', this.total, JSON.stringify(this.stats));
    }
}

GeoJSONVT.prototype.options = {
    maxZoom: 14,            // max zoom to preserve detail on
    indexMaxZoom: 5,        // max zoom in the tile index
    indexMaxPoints: 100000, // max number of points per tile in the tile index
    solidChildren: false,   // whether to tile solid square tiles further
    tolerance: 3,           // simplification tolerance (higher means simpler)
    extent: 4096,           // tile extent
    buffer: 64,             // tile buffer on each side
    debug: 0                // logging level (0, 1 or 2)
};

GeoJSONVT.prototype.splitTile = function (features, z, x, y, cz, cx, cy) {

    var stack = [features, z, x, y],
        options = this.options,
        debug = options.debug;

    // avoid recursion by using a processing queue
    while (stack.length) {
        y = stack.pop();
        x = stack.pop();
        z = stack.pop();
        features = stack.pop();

        var z2 = 1 << z,
            id = toID(z, x, y),
            tile = this.tiles[id],
            tileTolerance = z === options.maxZoom ? 0 : options.tolerance / (z2 * options.extent);

        if (!tile) {
            if (debug > 1) console.time('creation');

            tile = this.tiles[id] = createTile(features, z2, x, y, tileTolerance, z === options.maxZoom);
            this.tileCoords.push({z: z, x: x, y: y});

            if (debug) {
                if (debug > 1) {
                    console.log('tile z%d-%d-%d (features: %d, points: %d, simplified: %d)',
                        z, x, y, tile.numFeatures, tile.numPoints, tile.numSimplified);
                    console.timeEnd('creation');
                }
                var key = 'z' + z;
                this.stats[key] = (this.stats[key] || 0) + 1;
                this.total++;
            }
        }

        // save reference to original geometry in tile so that we can drill down later if we stop now
        tile.source = features;

        // stop tiling if the tile is solid clipped square
        if (!options.solidChildren && isClippedSquare(tile, options.extent, options.buffer)) continue;

        // if it's the first-pass tiling
        if (!cz) {
            // stop tiling if we reached max zoom, or if the tile is too simple
            if (z === options.indexMaxZoom || tile.numPoints <= options.indexMaxPoints) continue;

        // if a drilldown to a specific tile
        } else {
            // stop tiling if we reached base zoom or our target tile zoom
            if (z === options.maxZoom || z === cz) continue;

            // stop tiling if it's not an ancestor of the target tile
            var m = 1 << (cz - z);
            if (x !== Math.floor(cx / m) || y !== Math.floor(cy / m)) continue;
        }

        // if we slice further down, no need to keep source geometry
        tile.source = null;

        if (debug > 1) console.time('clipping');

        // values we'll use for clipping
        var k1 = 0.5 * options.buffer / options.extent,
            k2 = 0.5 - k1,
            k3 = 0.5 + k1,
            k4 = 1 + k1,
            tl, bl, tr, br, left, right;

        tl = bl = tr = br = null;

        left  = clip(features, z2, x - k1, x + k3, 0, intersectX, tile.min[0], tile.max[0]);
        right = clip(features, z2, x + k2, x + k4, 0, intersectX, tile.min[0], tile.max[0]);

        if (left) {
            tl = clip(left, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);
            bl = clip(left, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);
        }

        if (right) {
            tr = clip(right, z2, y - k1, y + k3, 1, intersectY, tile.min[1], tile.max[1]);
            br = clip(right, z2, y + k2, y + k4, 1, intersectY, tile.min[1], tile.max[1]);
        }

        if (debug > 1) console.timeEnd('clipping');

        if (tl) stack.push(tl, z + 1, x * 2,     y * 2);
        if (bl) stack.push(bl, z + 1, x * 2,     y * 2 + 1);
        if (tr) stack.push(tr, z + 1, x * 2 + 1, y * 2);
        if (br) stack.push(br, z + 1, x * 2 + 1, y * 2 + 1);
    }
};

GeoJSONVT.prototype.getTile = function (z, x, y) {
    var options = this.options,
        extent = options.extent,
        debug = options.debug;

    var z2 = 1 << z;
    x = ((x % z2) + z2) % z2; // wrap tile x coordinate

    var id = toID(z, x, y);
    if (this.tiles[id]) return transformTile(this.tiles[id], extent);

    if (debug > 1) console.log('drilling down to z%d-%d-%d', z, x, y);

    var z0 = z,
        x0 = x,
        y0 = y,
        parent;

    while (!parent && z0 > 0) {
        z0--;
        x0 = Math.floor(x0 / 2);
        y0 = Math.floor(y0 / 2);
        parent = this.tiles[toID(z0, x0, y0)];
    }

    if (!parent) return null;

    if (debug > 1) console.log('found parent tile z%d-%d-%d', z0, x0, y0);

    // if we found a parent tile containing the original geometry, we can drill down from it
    if (parent.source) {
        if (isClippedSquare(parent, extent, options.buffer)) return transformTile(parent, extent);

        if (debug > 1) console.time('drilling down');
        this.splitTile(parent.source, z0, x0, y0, z, x, y);
        if (debug > 1) console.timeEnd('drilling down');
    }

    if (!this.tiles[id]) return null;

    return transformTile(this.tiles[id], extent);
};

function transformTile(tile, extent) {
    if (tile.transformed) return tile;

    var z2 = tile.z2,
        tx = tile.x,
        ty = tile.y,
        i, j, k;

    for (i = 0; i < tile.features.length; i++) {
        var feature = tile.features[i],
            geom = feature.geometry,
            type = feature.type;

        if (type === 1) {
            for (j = 0; j < geom.length; j++) geom[j] = transformPoint(geom[j], extent, z2, tx, ty);

        } else {
            for (j = 0; j < geom.length; j++) {
                var ring = geom[j];
                for (k = 0; k < ring.length; k++) ring[k] = transformPoint(ring[k], extent, z2, tx, ty);
            }
        }
    }

    tile.transformed = true;

    return tile;
}

function transformPoint(p, extent, z2, tx, ty) {
    var x = Math.round(extent * (p[0] * z2 - tx)),
        y = Math.round(extent * (p[1] * z2 - ty));
    return [x, y];
}

function toID(z, x, y) {
    return (((1 << z) * y + x) * 32) + z;
}

function intersectX(a, b, x) {
    return [x, (x - a[0]) * (b[1] - a[1]) / (b[0] - a[0]) + a[1], 1];
}
function intersectY(a, b, y) {
    return [(y - a[1]) * (b[0] - a[0]) / (b[1] - a[1]) + a[0], y, 1];
}

function extend(dest, src) {
    for (var i in src) dest[i] = src[i];
    return dest;
}

// checks whether a tile is a whole-area fill after clipping; if it is, there's no sense slicing it further
function isClippedSquare(tile, extent, buffer) {

    var features = tile.source;
    if (features.length !== 1) return false;

    var feature = features[0];
    if (feature.type !== 3 || feature.geometry.length > 1) return false;

    var len = feature.geometry[0].length;
    if (len !== 5) return false;

    for (var i = 0; i < len; i++) {
        var p = transformPoint(feature.geometry[0][i], extent, tile.z2, tile.x, tile.y);
        if ((p[0] !== -buffer && p[0] !== extent + buffer) ||
            (p[1] !== -buffer && p[1] !== extent + buffer)) return false;
    }

    return true;
}

},{"./clip":141,"./convert":142,"./tile":145,"./wrap":146}],144:[function(_dereq_,module,exports){
'use strict';

module.exports = simplify;

// calculate simplification data using optimized Douglas-Peucker algorithm

function simplify(points, tolerance) {

    var sqTolerance = tolerance * tolerance,
        len = points.length,
        first = 0,
        last = len - 1,
        stack = [],
        i, maxSqDist, sqDist, index;

    // always retain the endpoints (1 is the max value)
    points[first][2] = 1;
    points[last][2] = 1;

    // avoid recursion by using a stack
    while (last) {

        maxSqDist = 0;

        for (i = first + 1; i < last; i++) {
            sqDist = getSqSegDist(points[i], points[first], points[last]);

            if (sqDist > maxSqDist) {
                index = i;
                maxSqDist = sqDist;
            }
        }

        if (maxSqDist > sqTolerance) {
            points[index][2] = maxSqDist; // save the point importance in squared pixels as a z coordinate
            stack.push(first);
            stack.push(index);
            first = index;

        } else {
            last = stack.pop();
            first = stack.pop();
        }
    }
}

// square distance from a point to a segment
function getSqSegDist(p, a, b) {

    var x = a[0], y = a[1],
        bx = b[0], by = b[1],
        px = p[0], py = p[1],
        dx = bx - x,
        dy = by - y;

    if (dx !== 0 || dy !== 0) {

        var t = ((px - x) * dx + (py - y) * dy) / (dx * dx + dy * dy);

        if (t > 1) {
            x = bx;
            y = by;

        } else if (t > 0) {
            x += dx * t;
            y += dy * t;
        }
    }

    dx = px - x;
    dy = py - y;

    return dx * dx + dy * dy;
}

},{}],145:[function(_dereq_,module,exports){
'use strict';

module.exports = createTile;

function createTile(features, z2, tx, ty, tolerance, noSimplify) {
    var tile = {
        features: [],
        numPoints: 0,
        numSimplified: 0,
        numFeatures: 0,
        source: null,
        x: tx,
        y: ty,
        z2: z2,
        transformed: false,
        min: [2, 1],
        max: [-1, 0]
    };
    for (var i = 0; i < features.length; i++) {
        tile.numFeatures++;
        addFeature(tile, features[i], tolerance, noSimplify);

        var min = features[i].min,
            max = features[i].max;

        if (min[0] < tile.min[0]) tile.min[0] = min[0];
        if (min[1] < tile.min[1]) tile.min[1] = min[1];
        if (max[0] > tile.max[0]) tile.max[0] = max[0];
        if (max[1] > tile.max[1]) tile.max[1] = max[1];
    }
    return tile;
}

function addFeature(tile, feature, tolerance, noSimplify) {

    var geom = feature.geometry,
        type = feature.type,
        simplified = [],
        sqTolerance = tolerance * tolerance,
        i, j, ring, p;

    if (type === 1) {
        for (i = 0; i < geom.length; i++) {
            simplified.push(geom[i]);
            tile.numPoints++;
            tile.numSimplified++;
        }

    } else {

        // simplify and transform projected coordinates for tile geometry
        for (i = 0; i < geom.length; i++) {
            ring = geom[i];

            // filter out tiny polylines & polygons
            if (!noSimplify && ((type === 2 && ring.dist < tolerance) ||
                                (type === 3 && ring.area < sqTolerance))) {
                tile.numPoints += ring.length;
                continue;
            }

            var simplifiedRing = [];

            for (j = 0; j < ring.length; j++) {
                p = ring[j];
                // keep points with importance > tolerance
                if (noSimplify || p[2] > sqTolerance) {
                    simplifiedRing.push(p);
                    tile.numSimplified++;
                }
                tile.numPoints++;
            }

            simplified.push(simplifiedRing);
        }
    }

    if (simplified.length) {
        tile.features.push({
            geometry: simplified,
            type: type,
            tags: feature.tags || null
        });
    }
}

},{}],146:[function(_dereq_,module,exports){
'use strict';

var clip = _dereq_('./clip');

module.exports = wrap;

function wrap(features, buffer, intersectX) {
    var merged = features,
        left  = clip(features, 1, -1 - buffer, buffer,     0, intersectX, -1, 2), // left world copy
        right = clip(features, 1,  1 - buffer, 2 + buffer, 0, intersectX, -1, 2); // right world copy

    if (left || right) {
        merged = clip(features, 1, -buffer, 1 + buffer, 0, intersectX, -1, 2); // center world copy

        if (left) merged = shiftFeatureCoords(left, 1).concat(merged); // merge left into center
        if (right) merged = merged.concat(shiftFeatureCoords(right, -1)); // merge right into center
    }

    return merged;
}

function shiftFeatureCoords(features, offset) {
    var newFeatures = [];

    for (var i = 0; i < features.length; i++) {
        var feature = features[i],
            type = feature.type;

        var newGeometry;

        if (type === 1) {
            newGeometry = shiftCoords(feature.geometry, offset);
        } else {
            newGeometry = [];
            for (var j = 0; j < feature.geometry.length; j++) {
                newGeometry.push(shiftCoords(feature.geometry[j], offset));
            }
        }

        newFeatures.push({
            geometry: newGeometry,
            type: type,
            tags: feature.tags,
            min: [feature.min[0] + offset, feature.min[1]],
            max: [feature.max[0] + offset, feature.max[1]]
        });
    }

    return newFeatures;
}

function shiftCoords(points, offset) {
    var newPoints = [];
    newPoints.area = points.area;
    newPoints.dist = points.dist;

    for (var i = 0; i < points.length; i++) {
        newPoints.push([points[i][0] + offset, points[i][1], points[i][2]]);
    }
    return newPoints;
}

},{"./clip":141}],147:[function(_dereq_,module,exports){
module.exports = invert

/**
 * Inverts a mat3
 *
 * @alias mat3.invert
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2]
  var a10 = a[3], a11 = a[4], a12 = a[5]
  var a20 = a[6], a21 = a[7], a22 = a[8]

  var b01 = a22 * a11 - a12 * a21
  var b11 = -a22 * a10 + a12 * a20
  var b21 = a21 * a10 - a11 * a20

  // Calculate the determinant
  var det = a00 * b01 + a01 * b11 + a02 * b21

  if (!det) return null
  det = 1.0 / det

  out[0] = b01 * det
  out[1] = (-a22 * a01 + a02 * a21) * det
  out[2] = (a12 * a01 - a02 * a11) * det
  out[3] = b11 * det
  out[4] = (a22 * a00 - a02 * a20) * det
  out[5] = (-a12 * a00 + a02 * a10) * det
  out[6] = b21 * det
  out[7] = (-a21 * a00 + a01 * a20) * det
  out[8] = (a11 * a00 - a01 * a10) * det

  return out
}

},{}],148:[function(_dereq_,module,exports){
module.exports = normalFromMat4

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @alias mat3.normalFromMat4
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3]
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7]
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11]
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15]

  var b00 = a00 * a11 - a01 * a10
  var b01 = a00 * a12 - a02 * a10
  var b02 = a00 * a13 - a03 * a10
  var b03 = a01 * a12 - a02 * a11
  var b04 = a01 * a13 - a03 * a11
  var b05 = a02 * a13 - a03 * a12
  var b06 = a20 * a31 - a21 * a30
  var b07 = a20 * a32 - a22 * a30
  var b08 = a20 * a33 - a23 * a30
  var b09 = a21 * a32 - a22 * a31
  var b10 = a21 * a33 - a23 * a31
  var b11 = a22 * a33 - a23 * a32

  // Calculate the determinant
  var det = b00 * b11
          - b01 * b10
          + b02 * b09
          + b03 * b08
          - b04 * b07
          + b05 * b06

  if (!det) return null
  det = 1.0 / det

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det

  return out
}

},{}],149:[function(_dereq_,module,exports){
module.exports = copy;

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
},{}],150:[function(_dereq_,module,exports){
module.exports = identity;

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
};
},{}],151:[function(_dereq_,module,exports){
var identity = _dereq_('./identity');

module.exports = lookAt;

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len,
        eyex = eye[0],
        eyey = eye[1],
        eyez = eye[2],
        upx = up[0],
        upy = up[1],
        upz = up[2],
        centerx = center[0],
        centery = center[1],
        centerz = center[2];

    if (Math.abs(eyex - centerx) < 0.000001 &&
        Math.abs(eyey - centery) < 0.000001 &&
        Math.abs(eyez - centerz) < 0.000001) {
        return identity(out);
    }

    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;

    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;

    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }

    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;

    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }

    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;

    return out;
};
},{"./identity":150}],152:[function(_dereq_,module,exports){
module.exports = multiply;

/**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3],
        a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7],
        a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11],
        a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];

    // Cache only the current line of the second matrix
    var b0  = b[0], b1 = b[1], b2 = b[2], b3 = b[3];  
    out[0] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[1] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[2] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[3] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[4]; b1 = b[5]; b2 = b[6]; b3 = b[7];
    out[4] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[5] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[6] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[7] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[8]; b1 = b[9]; b2 = b[10]; b3 = b[11];
    out[8] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[9] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[10] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[11] = b0*a03 + b1*a13 + b2*a23 + b3*a33;

    b0 = b[12]; b1 = b[13]; b2 = b[14]; b3 = b[15];
    out[12] = b0*a00 + b1*a10 + b2*a20 + b3*a30;
    out[13] = b0*a01 + b1*a11 + b2*a21 + b3*a31;
    out[14] = b0*a02 + b1*a12 + b2*a22 + b3*a32;
    out[15] = b0*a03 + b1*a13 + b2*a23 + b3*a33;
    return out;
};
},{}],153:[function(_dereq_,module,exports){
module.exports = perspective;

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2),
        nf = 1 / (near - far);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = (2 * far * near) * nf;
    out[15] = 0;
    return out;
};
},{}],154:[function(_dereq_,module,exports){
module.exports = scale;

/**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];

    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
};
},{}],155:[function(_dereq_,module,exports){
module.exports = translate;

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2],
        a00, a01, a02, a03,
        a10, a11, a12, a13,
        a20, a21, a22, a23;

    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0]; a01 = a[1]; a02 = a[2]; a03 = a[3];
        a10 = a[4]; a11 = a[5]; a12 = a[6]; a13 = a[7];
        a20 = a[8]; a21 = a[9]; a22 = a[10]; a23 = a[11];

        out[0] = a00; out[1] = a01; out[2] = a02; out[3] = a03;
        out[4] = a10; out[5] = a11; out[6] = a12; out[7] = a13;
        out[8] = a20; out[9] = a21; out[10] = a22; out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }

    return out;
};
},{}],156:[function(_dereq_,module,exports){
module.exports = parseErrors

function parseErrors(log) {
  log = String(log)

  var logs = []
  var result

  while (result = log.match(/ERROR\:([^\n]+)/)) {
    log = log.slice(result.index + 1)

    var line = result[1].trim()
    var seps = line.split(':')
    var emsg = seps.slice(2).join(':').trim()
    var file = parseInt(seps[0], 10)
    var line = parseInt(seps[1], 10)

    logs.push({
        message: emsg
      , file: file
      , line: line
    })
  }

  return logs
}

},{}],157:[function(_dereq_,module,exports){
'use strict';


var yaml = _dereq_('./lib/js-yaml.js');


module.exports = yaml;

},{"./lib/js-yaml.js":158}],158:[function(_dereq_,module,exports){
'use strict';


var loader = _dereq_('./js-yaml/loader');
// var dumper = require('./js-yaml/dumper');


function deprecated(name) {
  return function () {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}


module.exports.Type                = _dereq_('./js-yaml/type');
module.exports.Schema              = _dereq_('./js-yaml/schema');
module.exports.FAILSAFE_SCHEMA     = _dereq_('./js-yaml/schema/failsafe');
module.exports.JSON_SCHEMA         = _dereq_('./js-yaml/schema/json');
module.exports.CORE_SCHEMA         = _dereq_('./js-yaml/schema/core');
module.exports.DEFAULT_SAFE_SCHEMA = _dereq_('./js-yaml/schema/default_safe');
module.exports.DEFAULT_FULL_SCHEMA = _dereq_('./js-yaml/schema/default_full');
module.exports.load                = loader.load;
module.exports.loadAll             = loader.loadAll;
module.exports.safeLoad            = loader.safeLoad;
module.exports.safeLoadAll         = loader.safeLoadAll;
// module.exports.dump                = dumper.dump;
// module.exports.safeDump            = dumper.safeDump;
module.exports.YAMLException       = _dereq_('./js-yaml/exception');

// Deprecated schema names from JS-YAML 2.0.x
module.exports.MINIMAL_SCHEMA = _dereq_('./js-yaml/schema/failsafe');
module.exports.SAFE_SCHEMA    = _dereq_('./js-yaml/schema/default_safe');
module.exports.DEFAULT_SCHEMA = _dereq_('./js-yaml/schema/default_full');

// Deprecated functions from JS-YAML 1.x.x
module.exports.scan           = deprecated('scan');
module.exports.parse          = deprecated('parse');
module.exports.compose        = deprecated('compose');
module.exports.addConstructor = deprecated('addConstructor');

},{"./js-yaml/exception":160,"./js-yaml/loader":161,"./js-yaml/schema":163,"./js-yaml/schema/core":164,"./js-yaml/schema/default_full":165,"./js-yaml/schema/default_safe":166,"./js-yaml/schema/failsafe":167,"./js-yaml/schema/json":168,"./js-yaml/type":169}],159:[function(_dereq_,module,exports){
'use strict';


function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


module.exports.isNothing      = isNothing;
module.exports.isObject       = isObject;
module.exports.toArray        = toArray;
module.exports.repeat         = repeat;
module.exports.isNegativeZero = isNegativeZero;
module.exports.extend         = extend;

},{}],160:[function(_dereq_,module,exports){
// YAML error class. http://stackoverflow.com/questions/8458984
//
'use strict';

function YAMLException(reason, mark) {
  // Super constructor
  Error.call(this);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');
}


// Inherit from Error
YAMLException.prototype = Object.create(Error.prototype);
YAMLException.prototype.constructor = YAMLException;


YAMLException.prototype.toString = function toString(compact) {
  var result = this.name + ': ';

  result += this.reason || '(unknown reason)';

  if (!compact && this.mark) {
    result += ' ' + this.mark.toString();
  }

  return result;
};


module.exports = YAMLException;

},{}],161:[function(_dereq_,module,exports){
'use strict';

/*eslint-disable max-len,no-use-before-define*/

var common              = _dereq_('./common');
var YAMLException       = _dereq_('./exception');
var Mark                = _dereq_('./mark');
var DEFAULT_SAFE_SCHEMA = _dereq_('./schema/default_safe');
var DEFAULT_FULL_SCHEMA = _dereq_('./schema/default_full');


var _hasOwnProperty = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(((c - 0x010000) >> 10) + 0xD800,
                             ((c - 0x010000) & 0x03FF) + 0xDC00);
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || DEFAULT_FULL_SCHEMA;
  this.onWarning = options['onWarning'] || null;
  this.legacy    = options['legacy']    || false;
  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  return new YAMLException(
    message,
    new Mark(state.filename, state.input, state.position, state.line, (state.position - state.lineStart)));
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length;
           _position < _length;
           _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode) {
  var index, quantity;

  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty.call(overridableKeys, keyNode) &&
        _hasOwnProperty.call(_result, keyNode)) {
      throwError(state, 'duplicated mapping key');
    }
    _result[keyNode] = valueNode;
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = captureEnd = state.position;
        state.position++;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = {},
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (detectedIndent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state.result += common.repeat('\n', emptyLines + 1);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (detectedIndent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else if (detectedIndent) {
      // If current line isn't the first one - count line break from the last content line.
      state.result += common.repeat('\n', emptyLines + 1);
    } else {
      // In case of the first content line - count only empty lines.
      state.result += common.repeat('\n', emptyLines);
    }

    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = {},
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }

    } else {
      break; // Reading is done. Go to the epilogue.
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if (state.lineIndent > nodeIndent && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!state.anchorMap.hasOwnProperty(alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag !== null && state.tag !== '!') {
    if (state.tag === '?') {
      for (typeIndex = 0, typeQuantity = state.implicitTypes.length;
           typeIndex < typeQuantity;
           typeIndex += 1) {
        type = state.implicitTypes[typeIndex];

        // Implicit resolving is not allowed for non-scalar types, and '?'
        // non-specific tag is only assigned to plain scalars. So, it isn't
        // needed to check for 'kind' conformity.

        if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
          state.result = type.construct(state.result);
          state.tag = type.tag;
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
          break;
        }
      }
    } else if (_hasOwnProperty.call(state.typeMap, state.tag)) {
      type = state.typeMap[state.tag];

      if (state.result !== null && type.kind !== state.kind) {
        throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
      }

      if (!type.resolve(state.result)) { // `state.result` updated in resolver if matched
        throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
      } else {
        state.result = type.construct(state.result);
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = {};
  state.anchorMap = {};

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State(input, options);

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll(input, iterator, options) {
  var documents = loadDocuments(input, options), index, length;

  for (index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new YAMLException('expected a single document in the stream, but found more');
}


function safeLoadAll(input, output, options) {
  loadAll(input, output, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
}


function safeLoad(input, options) {
  return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
}


module.exports.loadAll     = loadAll;
module.exports.load        = load;
module.exports.safeLoadAll = safeLoadAll;
module.exports.safeLoad    = safeLoad;

},{"./common":159,"./exception":160,"./mark":162,"./schema/default_full":165,"./schema/default_safe":166}],162:[function(_dereq_,module,exports){
'use strict';


var common = _dereq_('./common');


function Mark(name, buffer, position, line, column) {
  this.name     = name;
  this.buffer   = buffer;
  this.position = position;
  this.line     = line;
  this.column   = column;
}


Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
  var head, start, tail, end, snippet;

  if (!this.buffer) return null;

  indent = indent || 4;
  maxLength = maxLength || 75;

  head = '';
  start = this.position;

  while (start > 0 && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
    start -= 1;
    if (this.position - start > (maxLength / 2 - 1)) {
      head = ' ... ';
      start += 5;
      break;
    }
  }

  tail = '';
  end = this.position;

  while (end < this.buffer.length && '\x00\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
    end += 1;
    if (end - this.position > (maxLength / 2 - 1)) {
      tail = ' ... ';
      end -= 5;
      break;
    }
  }

  snippet = this.buffer.slice(start, end);

  return common.repeat(' ', indent) + head + snippet + tail + '\n' +
         common.repeat(' ', indent + this.position - start + head.length) + '^';
};


Mark.prototype.toString = function toString(compact) {
  var snippet, where = '';

  if (this.name) {
    where += 'in "' + this.name + '" ';
  }

  where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);

  if (!compact) {
    snippet = this.getSnippet();

    if (snippet) {
      where += ':\n' + snippet;
    }
  }

  return where;
};


module.exports = Mark;

},{"./common":159}],163:[function(_dereq_,module,exports){
'use strict';

/*eslint-disable max-len*/

var common        = _dereq_('./common');
var YAMLException = _dereq_('./exception');
var Type          = _dereq_('./type');


function compileList(schema, name, result) {
  var exclude = [];

  schema.include.forEach(function (includedSchema) {
    result = compileList(includedSchema, name, result);
  });

  schema[name].forEach(function (currentType) {
    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag) {
        exclude.push(previousIndex);
      }
    });

    result.push(currentType);
  });

  return result.filter(function (type, index) {
    return exclude.indexOf(index) === -1;
  });
}


function compileMap(/* lists... */) {
  var result = {}, index, length;

  function collectType(type) {
    result[type.tag] = type;
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }

  return result;
}


function Schema(definition) {
  this.include  = definition.include  || [];
  this.implicit = definition.implicit || [];
  this.explicit = definition.explicit || [];

  this.implicit.forEach(function (type) {
    if (type.loadKind && type.loadKind !== 'scalar') {
      throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }
  });

  this.compiledImplicit = compileList(this, 'implicit', []);
  this.compiledExplicit = compileList(this, 'explicit', []);
  this.compiledTypeMap  = compileMap(this.compiledImplicit, this.compiledExplicit);
}


Schema.DEFAULT = null;


Schema.create = function createSchema() {
  var schemas, types;

  switch (arguments.length) {
    case 1:
      schemas = Schema.DEFAULT;
      types = arguments[0];
      break;

    case 2:
      schemas = arguments[0];
      types = arguments[1];
      break;

    default:
      throw new YAMLException('Wrong number of arguments for Schema.create function');
  }

  schemas = common.toArray(schemas);
  types = common.toArray(types);

  if (!schemas.every(function (schema) { return schema instanceof Schema; })) {
    throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
  }

  if (!types.every(function (type) { return type instanceof Type; })) {
    throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
  }

  return new Schema({
    include: schemas,
    explicit: types
  });
};


module.exports = Schema;

},{"./common":159,"./exception":160,"./type":169}],164:[function(_dereq_,module,exports){
// Standard YAML's Core schema.
// http://www.yaml.org/spec/1.2/spec.html#id2804923
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, Core schema has no distinctions from JSON schema is JS-YAML.


'use strict';


var Schema = _dereq_('../schema');


module.exports = new Schema({
  include: [
    _dereq_('./json')
  ]
});

},{"../schema":163,"./json":168}],165:[function(_dereq_,module,exports){
// JS-YAML's default schema for `load` function.
// It is not described in the YAML specification.
//
// This schema is based on JS-YAML's default safe schema and includes
// JavaScript-specific types: !!js/undefined, !!js/regexp and !!js/function.
//
// Also this schema is used as default base schema at `Schema.create` function.


'use strict';


var Schema = _dereq_('../schema');


module.exports = Schema.DEFAULT = new Schema({
  include: [
    _dereq_('./default_safe')
  ],
  explicit: [
    _dereq_('../type/js/undefined'),
    _dereq_('../type/js/regexp'),
    _dereq_('../type/js/function')
  ]
});

},{"../schema":163,"../type/js/function":174,"../type/js/regexp":175,"../type/js/undefined":176,"./default_safe":166}],166:[function(_dereq_,module,exports){
// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)


'use strict';


var Schema = _dereq_('../schema');


module.exports = new Schema({
  include: [
    _dereq_('./core')
  ],
  implicit: [
    _dereq_('../type/timestamp'),
    _dereq_('../type/merge')
  ],
  explicit: [
    _dereq_('../type/binary'),
    _dereq_('../type/omap'),
    _dereq_('../type/pairs'),
    _dereq_('../type/set')
  ]
});

},{"../schema":163,"../type/binary":170,"../type/merge":178,"../type/omap":180,"../type/pairs":181,"../type/set":183,"../type/timestamp":185,"./core":164}],167:[function(_dereq_,module,exports){
// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346


'use strict';


var Schema = _dereq_('../schema');


module.exports = new Schema({
  explicit: [
    _dereq_('../type/str'),
    _dereq_('../type/seq'),
    _dereq_('../type/map')
  ]
});

},{"../schema":163,"../type/map":177,"../type/seq":182,"../type/str":184}],168:[function(_dereq_,module,exports){
// Standard YAML's JSON schema.
// http://www.yaml.org/spec/1.2/spec.html#id2803231
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, this schema is not such strict as defined in the YAML specification.
// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.


'use strict';


var Schema = _dereq_('../schema');


module.exports = new Schema({
  include: [
    _dereq_('./failsafe')
  ],
  implicit: [
    _dereq_('../type/null'),
    _dereq_('../type/bool'),
    _dereq_('../type/int'),
    _dereq_('../type/float')
  ]
});

},{"../schema":163,"../type/bool":171,"../type/float":172,"../type/int":173,"../type/null":179,"./failsafe":167}],169:[function(_dereq_,module,exports){
'use strict';

var YAMLException = _dereq_('./exception');

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.tag          = tag;
  this.kind         = options['kind']         || null;
  this.resolve      = options['resolve']      || function () { return true; };
  this.construct    = options['construct']    || function (data) { return data; };
  this.instanceOf   = options['instanceOf']   || null;
  this.predicate    = options['predicate']    || null;
  this.represent    = options['represent']    || null;
  this.defaultStyle = options['defaultStyle'] || null;
  this.styleAliases = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

module.exports = Type;

},{"./exception":160}],170:[function(_dereq_,module,exports){
'use strict';

/*eslint-disable no-bitwise*/

// A trick for browserified version.
// Since we make browserifier to ignore `buffer` module, NodeBuffer will be undefined
var NodeBuffer = _dereq_('buffer').Buffer;
var Type       = _dereq_('../type');


// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  // Wrap into Buffer for NodeJS and leave Array for browser
  if (NodeBuffer) return new NodeBuffer(result);

  return result;
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(object) {
  return NodeBuffer && NodeBuffer.isBuffer(object);
}

module.exports = new Type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

},{"../type":169,"buffer":132}],171:[function(_dereq_,module,exports){
'use strict';

var Type = _dereq_('../type');

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

module.exports = new Type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});

},{"../type":169}],172:[function(_dereq_,module,exports){
'use strict';

var common = _dereq_('../common');
var Type   = _dereq_('../type');

var YAML_FLOAT_PATTERN = new RegExp(
  '^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?' +
  '|\\.[0-9_]+(?:[eE][-+][0-9]+)?' +
  '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' +
  '|[-+]?\\.(?:inf|Inf|INF)' +
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data)) return false;

  return true;
}

function constructYamlFloat(data) {
  var value, sign, base, digits;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;
  digits = [];

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;

  } else if (value.indexOf(':') >= 0) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseFloat(v, 10));
    });

    value = 0.0;
    base = 1;

    digits.forEach(function (d) {
      value += d * base;
      base *= 60;
    });

    return sign * value;

  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

},{"../common":159,"../type":169}],173:[function(_dereq_,module,exports){
'use strict';

var common = _dereq_('../common');
var Type   = _dereq_('../type');

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits;
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits;
    }

    // base 8
    for (; index < max; index++) {
      ch = data[index];
      if (ch === '_') continue;
      if (!isOctCode(data.charCodeAt(index))) return false;
      hasDigits = true;
    }
    return hasDigits;
  }

  // base 10 (except 0) or base 60

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (ch === ':') break;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  if (!hasDigits) return false;

  // if !base60 - done;
  if (ch !== ':') return true;

  // base60 almost not used, no needs to optimize
  return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch, base, digits = [];

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value, 16);
    return sign * parseInt(value, 8);
  }

  if (value.indexOf(':') !== -1) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseInt(v, 10));
    });

    value = 0;
    base = 1;

    digits.forEach(function (d) {
      value += (d * base);
      base *= 60;
    });

    return sign * value;

  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (object) { return '0b' + object.toString(2); },
    octal:       function (object) { return '0'  + object.toString(8); },
    decimal:     function (object) { return        object.toString(10); },
    hexadecimal: function (object) { return '0x' + object.toString(16).toUpperCase(); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});

},{"../common":159,"../type":169}],174:[function(_dereq_,module,exports){
'use strict';

var esprima;

// Browserified version does not have esprima
//
// 1. For node.js just require module as deps
// 2. For browser try to require mudule via external AMD system.
//    If not found - try to fallback to window.esprima. If not
//    found too - then fail to parse.
//
try {
  // workaround to exclude package from browserify list.
  var _require = _dereq_;
  esprima = _require('esprima');
} catch (_) {
  /*global window */
  if (typeof window !== 'undefined') esprima = window.esprima;
}

var Type = _dereq_('../../type');

function resolveJavascriptFunction(data) {
  if (data === null) return false;

  try {
    var source = '(' + data + ')',
        ast    = esprima.parse(source, { range: true });

    if (ast.type                    !== 'Program'             ||
        ast.body.length             !== 1                     ||
        ast.body[0].type            !== 'ExpressionStatement' ||
        ast.body[0].expression.type !== 'FunctionExpression') {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}

function constructJavascriptFunction(data) {
  /*jslint evil:true*/

  var source = '(' + data + ')',
      ast    = esprima.parse(source, { range: true }),
      params = [],
      body;

  if (ast.type                    !== 'Program'             ||
      ast.body.length             !== 1                     ||
      ast.body[0].type            !== 'ExpressionStatement' ||
      ast.body[0].expression.type !== 'FunctionExpression') {
    throw new Error('Failed to resolve function');
  }

  ast.body[0].expression.params.forEach(function (param) {
    params.push(param.name);
  });

  body = ast.body[0].expression.body.range;

  // Esprima's ranges include the first '{' and the last '}' characters on
  // function expressions. So cut them out.
  /*eslint-disable no-new-func*/
  return new Function(params, source.slice(body[0] + 1, body[1] - 1));
}

function representJavascriptFunction(object /*, style*/) {
  return object.toString();
}

function isFunction(object) {
  return Object.prototype.toString.call(object) === '[object Function]';
}

module.exports = new Type('tag:yaml.org,2002:js/function', {
  kind: 'scalar',
  resolve: resolveJavascriptFunction,
  construct: constructJavascriptFunction,
  predicate: isFunction,
  represent: representJavascriptFunction
});

},{"../../type":169}],175:[function(_dereq_,module,exports){
'use strict';

var Type = _dereq_('../../type');

function resolveJavascriptRegExp(data) {
  if (data === null) return false;
  if (data.length === 0) return false;

  var regexp = data,
      tail   = /\/([gim]*)$/.exec(data),
      modifiers = '';

  // if regexp starts with '/' it can have modifiers and must be properly closed
  // `/foo/gim` - modifiers tail can be maximum 3 chars
  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];

    if (modifiers.length > 3) return false;
    // if expression starts with /, is should be properly terminated
    if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
  }

  return true;
}

function constructJavascriptRegExp(data) {
  var regexp = data,
      tail   = /\/([gim]*)$/.exec(data),
      modifiers = '';

  // `/foo/gim` - tail can be maximum 4 chars
  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];
    regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
  }

  return new RegExp(regexp, modifiers);
}

function representJavascriptRegExp(object /*, style*/) {
  var result = '/' + object.source + '/';

  if (object.global) result += 'g';
  if (object.multiline) result += 'm';
  if (object.ignoreCase) result += 'i';

  return result;
}

function isRegExp(object) {
  return Object.prototype.toString.call(object) === '[object RegExp]';
}

module.exports = new Type('tag:yaml.org,2002:js/regexp', {
  kind: 'scalar',
  resolve: resolveJavascriptRegExp,
  construct: constructJavascriptRegExp,
  predicate: isRegExp,
  represent: representJavascriptRegExp
});

},{"../../type":169}],176:[function(_dereq_,module,exports){
'use strict';

var Type = _dereq_('../../type');

function resolveJavascriptUndefined() {
  return true;
}

function constructJavascriptUndefined() {
  /*eslint-disable no-undefined*/
  return undefined;
}

function representJavascriptUndefined() {
  return '';
}

function isUndefined(object) {
  return typeof object === 'undefined';
}

module.exports = new Type('tag:yaml.org,2002:js/undefined', {
  kind: 'scalar',
  resolve: resolveJavascriptUndefined,
  construct: constructJavascriptUndefined,
  predicate: isUndefined,
  represent: representJavascriptUndefined
});

},{"../../type":169}],177:[function(_dereq_,module,exports){
'use strict';

var Type = _dereq_('../type');

module.exports = new Type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});

},{"../type":169}],178:[function(_dereq_,module,exports){
'use strict';

var Type = _dereq_('../type');

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

module.exports = new Type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

},{"../type":169}],179:[function(_dereq_,module,exports){
'use strict';

var Type = _dereq_('../type');

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

module.exports = new Type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; }
  },
  defaultStyle: 'lowercase'
});

},{"../type":169}],180:[function(_dereq_,module,exports){
'use strict';

var Type = _dereq_('../type');

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

module.exports = new Type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

},{"../type":169}],181:[function(_dereq_,module,exports){
'use strict';

var Type = _dereq_('../type');

var _toString = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

module.exports = new Type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

},{"../type":169}],182:[function(_dereq_,module,exports){
'use strict';

var Type = _dereq_('../type');

module.exports = new Type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});

},{"../type":169}],183:[function(_dereq_,module,exports){
'use strict';

var Type = _dereq_('../type');

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

module.exports = new Type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

},{"../type":169}],184:[function(_dereq_,module,exports){
'use strict';

var Type = _dereq_('../type');

module.exports = new Type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});

},{"../type":169}],185:[function(_dereq_,module,exports){
'use strict';

var Type = _dereq_('../type');

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:(?:[Tt]|[ \\t]+)'              + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?)?$');         // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_TIMESTAMP_REGEXP.exec(data) === null) return false;
  return true;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

module.exports = new Type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

},{"../type":169}],186:[function(_dereq_,module,exports){
'use strict';

function notNull(x)  { return x != null; }
function wrap(x)     { return '(' + x + ')';}

function maybeQuote(value) {
    if (typeof value === 'string') {
        return '"' + value + '"';
    }
    return value;
}

function lookUp(key) {
    if (key[0] === '$') {
        return 'context.' + key.substring(1);
    }
    return 'context.feature.properties.' + key;
}

function nullValue(key, value) {
    return ' true ';
}

function propertyEqual(key, value) {
    return wrap(maybeQuote(value) + ' === ' + lookUp(key));
}

function propertyOr(key, values) {
    return wrap(values.map(function (x) { return propertyEqual(key, x); }).join(' || '));
}

function printNested(values, joiner) {
    return wrap(values.filter(notNull).map(function (x) {
        return wrap(x.join(' && '));
    }).join(' ' + joiner + ' '));
}

function any(_, values) {
    return (values && values.length > 0) ? printNested(values.map(parseFilter), '||') : 'true';
}

function all(_, values) {
    return (values && values.length > 0) ? printNested(values.map(parseFilter), '&&') : 'true';
}

function not(key, value) {
    return '!' + wrap(parseFilter(value).join(' && '));
}

function none(key, values) {
    return '!' + wrap(any(null, values));
}

function propertyMatchesBoolean(key, value) {
    return wrap(lookUp(key) + (value ? ' != ' : ' == ')  + 'null');
}

function rangeMatch(key, values) {
    var expressions = [];

    if (values.max) {
        expressions.push('' + lookUp(key) + ' < ' + values.max);
    }

    if (values.min) {
        expressions.push('' + lookUp(key) + ' >= ' + values.min);
    }

    return wrap(expressions.join(' && '));
}

function parseFilter(filter) {
    var filterAST = [];

    // Function filter
    if (typeof filter === 'function') {
        return [wrap(filter.toString() + '(context)')];
    }
    // Array filter, implicit 'any'
    else if (Array.isArray(filter)) {
        return [any(null, filter)];
    }
    // Null filter object
    else if (filter == null) {
        return ['true'];
    }

    // Object filter, e.g. implicit 'all'
    var keys = Object.keys(filter);
    for (var k=0; k < keys.length; k++) {
        var key = keys[k];

        var value = filter[key],
            type  = typeof value;
        if (type === 'string' || type === 'number') {
            filterAST.push(propertyEqual(key, value));
        } else if (type === 'boolean') {
            filterAST.push(propertyMatchesBoolean(key, value));
        } else if (key === 'not') {
            filterAST.push(not(key, value));
        } else if (key === 'any') {
            filterAST.push(any(key, value));
        } else if (key === 'all') {
            filterAST.push(all(key, value));
        } else if (key === 'none') {
            filterAST.push(none(key, value));
        } else if (Array.isArray(value)) {
            filterAST.push(propertyOr(key, value));
        } else if (type === 'object' && value != null) {
            if (value.max || value.min) {
                filterAST.push(rangeMatch(key, value));
            }
        } else if (value == null) {
            filterAST.push(nullValue(key, value));
        } else {
            throw new Error('Unknown Query sytnax: ' + value);
        }
    }

    return keys.length === 0 ? ['true'] : filterAST;
}

function filterToString(filterAST) {
    return wrap(filterAST.join(' && '));
}

function match(filter) {
    if (filter == null) { return function () { return true; }; }
    // jshint evil: true
    return new Function('context', 'return ' + filterToString(parseFilter(filter)) + ';');
}

module.exports = {
    match: match,
    filterToString: filterToString,
    parseFilter: parseFilter
};

},{}],187:[function(_dereq_,module,exports){
'use strict';

// lightweight Buffer shim for pbf browser build
// based on code from github.com/feross/buffer (MIT-licensed)

module.exports = Buffer;

var ieee754 = _dereq_('ieee754');

var BufferMethods;

function Buffer(length) {
    var arr;
    if (length && length.length) {
        arr = length;
        length = arr.length;
    }
    var buf = new Uint8Array(length || 0);
    if (arr) buf.set(arr);

    buf.readUInt32LE = BufferMethods.readUInt32LE;
    buf.writeUInt32LE = BufferMethods.writeUInt32LE;
    buf.readInt32LE = BufferMethods.readInt32LE;
    buf.writeInt32LE = BufferMethods.writeInt32LE;
    buf.readFloatLE = BufferMethods.readFloatLE;
    buf.writeFloatLE = BufferMethods.writeFloatLE;
    buf.readDoubleLE = BufferMethods.readDoubleLE;
    buf.writeDoubleLE = BufferMethods.writeDoubleLE;
    buf.toString = BufferMethods.toString;
    buf.write = BufferMethods.write;
    buf.slice = BufferMethods.slice;
    buf.copy = BufferMethods.copy;

    buf._isBuffer = true;
    return buf;
}

var lastStr, lastStrEncoded;

BufferMethods = {
    readUInt32LE: function(pos) {
        return ((this[pos]) |
            (this[pos + 1] << 8) |
            (this[pos + 2] << 16)) +
            (this[pos + 3] * 0x1000000);
    },

    writeUInt32LE: function(val, pos) {
        this[pos] = val;
        this[pos + 1] = (val >>> 8);
        this[pos + 2] = (val >>> 16);
        this[pos + 3] = (val >>> 24);
    },

    readInt32LE: function(pos) {
        return ((this[pos]) |
            (this[pos + 1] << 8) |
            (this[pos + 2] << 16)) +
            (this[pos + 3] << 24);
    },

    readFloatLE:  function(pos) { return ieee754.read(this, pos, true, 23, 4); },
    readDoubleLE: function(pos) { return ieee754.read(this, pos, true, 52, 8); },

    writeFloatLE:  function(val, pos) { return ieee754.write(this, val, pos, true, 23, 4); },
    writeDoubleLE: function(val, pos) { return ieee754.write(this, val, pos, true, 52, 8); },

    toString: function(encoding, start, end) {
        var str = '',
            tmp = '';

        start = start || 0;
        end = Math.min(this.length, end || this.length);

        for (var i = start; i < end; i++) {
            var ch = this[i];
            if (ch <= 0x7F) {
                str += decodeURIComponent(tmp) + String.fromCharCode(ch);
                tmp = '';
            } else {
                tmp += '%' + ch.toString(16);
            }
        }

        str += decodeURIComponent(tmp);

        return str;
    },

    write: function(str, pos) {
        var bytes = str === lastStr ? lastStrEncoded : encodeString(str);
        for (var i = 0; i < bytes.length; i++) {
            this[pos + i] = bytes[i];
        }
    },

    slice: function(start, end) {
        return this.subarray(start, end);
    },

    copy: function(buf, pos) {
        pos = pos || 0;
        for (var i = 0; i < this.length; i++) {
            buf[pos + i] = this[i];
        }
    }
};

BufferMethods.writeInt32LE = BufferMethods.writeUInt32LE;

Buffer.byteLength = function(str) {
    lastStr = str;
    lastStrEncoded = encodeString(str);
    return lastStrEncoded.length;
};

Buffer.isBuffer = function(buf) {
    return !!(buf && buf._isBuffer);
};

function encodeString(str) {
    var length = str.length,
        bytes = [];

    for (var i = 0, c, lead; i < length; i++) {
        c = str.charCodeAt(i); // code point

        if (c > 0xD7FF && c < 0xE000) {

            if (lead) {
                if (c < 0xDC00) {
                    bytes.push(0xEF, 0xBF, 0xBD);
                    lead = c;
                    continue;

                } else {
                    c = lead - 0xD800 << 10 | c - 0xDC00 | 0x10000;
                    lead = null;
                }

            } else {
                if (c > 0xDBFF || (i + 1 === length)) bytes.push(0xEF, 0xBF, 0xBD);
                else lead = c;

                continue;
            }

        } else if (lead) {
            bytes.push(0xEF, 0xBF, 0xBD);
            lead = null;
        }

        if (c < 0x80) bytes.push(c);
        else if (c < 0x800) bytes.push(c >> 0x6 | 0xC0, c & 0x3F | 0x80);
        else if (c < 0x10000) bytes.push(c >> 0xC | 0xE0, c >> 0x6 & 0x3F | 0x80, c & 0x3F | 0x80);
        else bytes.push(c >> 0x12 | 0xF0, c >> 0xC & 0x3F | 0x80, c >> 0x6 & 0x3F | 0x80, c & 0x3F | 0x80);
    }
    return bytes;
}

},{"ieee754":189}],188:[function(_dereq_,module,exports){
(function (global){
'use strict';

module.exports = Pbf;

var Buffer = global.Buffer || _dereq_('./buffer');

function Pbf(buf) {
    this.buf = !Buffer.isBuffer(buf) ? new Buffer(buf || 0) : buf;
    this.pos = 0;
    this.length = this.buf.length;
}

Pbf.Varint  = 0; // varint: int32, int64, uint32, uint64, sint32, sint64, bool, enum
Pbf.Fixed64 = 1; // 64-bit: double, fixed64, sfixed64
Pbf.Bytes   = 2; // length-delimited: string, bytes, embedded messages, packed repeated fields
Pbf.Fixed32 = 5; // 32-bit: float, fixed32, sfixed32

var SHIFT_LEFT_32 = (1 << 16) * (1 << 16),
    SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32,
    POW_2_63 = Math.pow(2, 63);

Pbf.prototype = {

    destroy: function() {
        this.buf = null;
    },

    // === READING =================================================================

    readFields: function(readField, result, end) {
        end = end || this.length;

        while (this.pos < end) {
            var val = this.readVarint(),
                tag = val >> 3,
                startPos = this.pos;

            readField(tag, result, this);

            if (this.pos === startPos) this.skip(val);
        }
        return result;
    },

    readMessage: function(readField, result) {
        return this.readFields(readField, result, this.readVarint() + this.pos);
    },

    readFixed32: function() {
        var val = this.buf.readUInt32LE(this.pos);
        this.pos += 4;
        return val;
    },

    readSFixed32: function() {
        var val = this.buf.readInt32LE(this.pos);
        this.pos += 4;
        return val;
    },

    // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)

    readFixed64: function() {
        var val = this.buf.readUInt32LE(this.pos) + this.buf.readUInt32LE(this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readSFixed64: function() {
        var val = this.buf.readUInt32LE(this.pos) + this.buf.readInt32LE(this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readFloat: function() {
        var val = this.buf.readFloatLE(this.pos);
        this.pos += 4;
        return val;
    },

    readDouble: function() {
        var val = this.buf.readDoubleLE(this.pos);
        this.pos += 8;
        return val;
    },

    readVarint: function() {
        var buf = this.buf,
            val, b, b0, b1, b2, b3;

        b0 = buf[this.pos++]; if (b0 < 0x80) return b0;                 b0 = b0 & 0x7f;
        b1 = buf[this.pos++]; if (b1 < 0x80) return b0 | b1 << 7;       b1 = (b1 & 0x7f) << 7;
        b2 = buf[this.pos++]; if (b2 < 0x80) return b0 | b1 | b2 << 14; b2 = (b2 & 0x7f) << 14;
        b3 = buf[this.pos++]; if (b3 < 0x80) return b0 | b1 | b2 | b3 << 21;

        val = b0 | b1 | b2 | (b3 & 0x7f) << 21;

        b = buf[this.pos++]; val += (b & 0x7f) * 0x10000000;         if (b < 0x80) return val;
        b = buf[this.pos++]; val += (b & 0x7f) * 0x800000000;        if (b < 0x80) return val;
        b = buf[this.pos++]; val += (b & 0x7f) * 0x40000000000;      if (b < 0x80) return val;
        b = buf[this.pos++]; val += (b & 0x7f) * 0x2000000000000;    if (b < 0x80) return val;
        b = buf[this.pos++]; val += (b & 0x7f) * 0x100000000000000;  if (b < 0x80) return val;
        b = buf[this.pos++]; val += (b & 0x7f) * 0x8000000000000000; if (b < 0x80) return val;

        throw new Error('Expected varint not more than 10 bytes');
    },

    readVarint64: function() {
        var startPos = this.pos,
            val = this.readVarint();

        if (val < POW_2_63) return val;

        var pos = this.pos - 2;
        while (this.buf[pos] === 0xff) pos--;
        if (pos < startPos) pos = startPos;

        val = 0;
        for (var i = 0; i < pos - startPos + 1; i++) {
            var b = ~this.buf[startPos + i] & 0x7f;
            val += i < 4 ? b << i * 7 : b * Math.pow(2, i * 7);
        }

        return -val - 1;
    },

    readSVarint: function() {
        var num = this.readVarint();
        return num % 2 === 1 ? (num + 1) / -2 : num / 2; // zigzag encoding
    },

    readBoolean: function() {
        return Boolean(this.readVarint());
    },

    readString: function() {
        var end = this.readVarint() + this.pos,
            str = this.buf.toString('utf8', this.pos, end);
        this.pos = end;
        return str;
    },

    readBytes: function() {
        var end = this.readVarint() + this.pos,
            buffer = this.buf.slice(this.pos, end);
        this.pos = end;
        return buffer;
    },

    // verbose for performance reasons; doesn't affect gzipped size

    readPackedVarint: function() {
        var end = this.readVarint() + this.pos, arr = [];
        while (this.pos < end) arr.push(this.readVarint());
        return arr;
    },
    readPackedSVarint: function() {
        var end = this.readVarint() + this.pos, arr = [];
        while (this.pos < end) arr.push(this.readSVarint());
        return arr;
    },
    readPackedBoolean: function() {
        var end = this.readVarint() + this.pos, arr = [];
        while (this.pos < end) arr.push(this.readBoolean());
        return arr;
    },
    readPackedFloat: function() {
        var end = this.readVarint() + this.pos, arr = [];
        while (this.pos < end) arr.push(this.readFloat());
        return arr;
    },
    readPackedDouble: function() {
        var end = this.readVarint() + this.pos, arr = [];
        while (this.pos < end) arr.push(this.readDouble());
        return arr;
    },
    readPackedFixed32: function() {
        var end = this.readVarint() + this.pos, arr = [];
        while (this.pos < end) arr.push(this.readFixed32());
        return arr;
    },
    readPackedSFixed32: function() {
        var end = this.readVarint() + this.pos, arr = [];
        while (this.pos < end) arr.push(this.readSFixed32());
        return arr;
    },
    readPackedFixed64: function() {
        var end = this.readVarint() + this.pos, arr = [];
        while (this.pos < end) arr.push(this.readFixed64());
        return arr;
    },
    readPackedSFixed64: function() {
        var end = this.readVarint() + this.pos, arr = [];
        while (this.pos < end) arr.push(this.readSFixed64());
        return arr;
    },

    skip: function(val) {
        var type = val & 0x7;
        if (type === Pbf.Varint) while (this.buf[this.pos++] > 0x7f) {}
        else if (type === Pbf.Bytes) this.pos = this.readVarint() + this.pos;
        else if (type === Pbf.Fixed32) this.pos += 4;
        else if (type === Pbf.Fixed64) this.pos += 8;
        else throw new Error('Unimplemented type: ' + type);
    },

    // === WRITING =================================================================

    writeTag: function(tag, type) {
        this.writeVarint((tag << 3) | type);
    },

    realloc: function(min) {
        var length = this.length || 16;

        while (length < this.pos + min) length *= 2;

        if (length !== this.length) {
            var buf = new Buffer(length);
            this.buf.copy(buf);
            this.buf = buf;
            this.length = length;
        }
    },

    finish: function() {
        this.length = this.pos;
        this.pos = 0;
        return this.buf.slice(0, this.length);
    },

    writeFixed32: function(val) {
        this.realloc(4);
        this.buf.writeUInt32LE(val, this.pos);
        this.pos += 4;
    },

    writeSFixed32: function(val) {
        this.realloc(4);
        this.buf.writeInt32LE(val, this.pos);
        this.pos += 4;
    },

    writeFixed64: function(val) {
        this.realloc(8);
        this.buf.writeInt32LE(val & -1, this.pos);
        this.buf.writeUInt32LE(Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeSFixed64: function(val) {
        this.realloc(8);
        this.buf.writeInt32LE(val & -1, this.pos);
        this.buf.writeInt32LE(Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeVarint: function(val) {
        val = +val;

        if (val <= 0x7f) {
            this.realloc(1);
            this.buf[this.pos++] = val;

        } else if (val <= 0x3fff) {
            this.realloc(2);
            this.buf[this.pos++] = ((val >>> 0) & 0x7f) | 0x80;
            this.buf[this.pos++] = ((val >>> 7) & 0x7f);

        } else if (val <= 0x1fffff) {
            this.realloc(3);
            this.buf[this.pos++] = ((val >>> 0) & 0x7f) | 0x80;
            this.buf[this.pos++] = ((val >>> 7) & 0x7f) | 0x80;
            this.buf[this.pos++] = ((val >>> 14) & 0x7f);

        } else if (val <= 0xfffffff) {
            this.realloc(4);
            this.buf[this.pos++] = ((val >>> 0) & 0x7f) | 0x80;
            this.buf[this.pos++] = ((val >>> 7) & 0x7f) | 0x80;
            this.buf[this.pos++] = ((val >>> 14) & 0x7f) | 0x80;
            this.buf[this.pos++] = ((val >>> 21) & 0x7f);

        } else {
            var pos = this.pos;
            while (val >= 0x80) {
                this.realloc(1);
                this.buf[this.pos++] = (val & 0xff) | 0x80;
                val /= 0x80;
            }
            this.realloc(1);
            this.buf[this.pos++] = val | 0;
            if (this.pos - pos > 10) throw new Error('Given varint doesn\'t fit into 10 bytes');
        }
    },

    writeSVarint: function(val) {
        this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
    },

    writeBoolean: function(val) {
        this.writeVarint(Boolean(val));
    },

    writeString: function(str) {
        str = String(str);
        var bytes = Buffer.byteLength(str);
        this.writeVarint(bytes);
        this.realloc(bytes);
        this.buf.write(str, this.pos);
        this.pos += bytes;
    },

    writeFloat: function(val) {
        this.realloc(4);
        this.buf.writeFloatLE(val, this.pos);
        this.pos += 4;
    },

    writeDouble: function(val) {
        this.realloc(8);
        this.buf.writeDoubleLE(val, this.pos);
        this.pos += 8;
    },

    writeBytes: function(buffer) {
        var len = buffer.length;
        this.writeVarint(len);
        this.realloc(len);
        for (var i = 0; i < len; i++) this.buf[this.pos++] = buffer[i];
    },

    writeMessage: function(tag, fn, obj) {
        this.writeTag(tag, Pbf.Bytes);

        this.pos++; // reserve 1 byte for short message length

        // write the message directly to the buffer and see how much was written
        var startPos = this.pos;
        fn(obj, this);
        var len = this.pos - startPos;

        var varintLen =
            len <= 0x7f ? 1 :
            len <= 0x3fff ? 2 :
            len <= 0x1fffff ? 3 :
            len <= 0xfffffff ? 4 : Math.ceil(Math.log(len) / (Math.LN2 * 7));

        // if 1 byte isn't enough for encoding message length, shift the data to the right
        if (varintLen > 1) {
            this.realloc(varintLen - 1);
            for (var i = this.pos - 1; i >= startPos; i--) this.buf[i + varintLen - 1] = this.buf[i];
        }

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writePackedVarint:   function(tag, arr) { this.writeMessage(tag, writePackedVarint, arr);   },
    writePackedSVarint:  function(tag, arr) { this.writeMessage(tag, writePackedSVarint, arr);  },
    writePackedBoolean:  function(tag, arr) { this.writeMessage(tag, writePackedBoolean, arr);  },
    writePackedFloat:    function(tag, arr) { this.writeMessage(tag, writePackedFloat, arr);    },
    writePackedDouble:   function(tag, arr) { this.writeMessage(tag, writePackedDouble, arr);   },
    writePackedFixed32:  function(tag, arr) { this.writeMessage(tag, writePackedFixed32, arr);  },
    writePackedSFixed32: function(tag, arr) { this.writeMessage(tag, writePackedSFixed32, arr); },
    writePackedFixed64:  function(tag, arr) { this.writeMessage(tag, writePackedFixed64, arr);  },
    writePackedSFixed64: function(tag, arr) { this.writeMessage(tag, writePackedSFixed64, arr); },

    writeBytesField: function(tag, buffer) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeBytes(buffer);
    },
    writeFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFixed32(val);
    },
    writeSFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeSFixed32(val);
    },
    writeFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeFixed64(val);
    },
    writeSFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeSFixed64(val);
    },
    writeVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeVarint(val);
    },
    writeSVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeSVarint(val);
    },
    writeStringField: function(tag, str) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeString(str);
    },
    writeFloatField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFloat(val);
    },
    writeDoubleField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeDouble(val);
    },
    writeBooleanField: function(tag, val) {
        this.writeVarintField(tag, Boolean(val));
    }
};

function writePackedVarint(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeVarint(arr[i]);   }
function writePackedSVarint(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeSVarint(arr[i]);  }
function writePackedFloat(arr, pbf)    { for (var i = 0; i < arr.length; i++) pbf.writeFloat(arr[i]);    }
function writePackedDouble(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeDouble(arr[i]);   }
function writePackedBoolean(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeBoolean(arr[i]);  }
function writePackedFixed32(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed32(arr[i]);  }
function writePackedSFixed32(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed32(arr[i]); }
function writePackedFixed64(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed64(arr[i]);  }
function writePackedSFixed64(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed64(arr[i]); }

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./buffer":187}],189:[function(_dereq_,module,exports){
arguments[4][135][0].apply(exports,arguments)
},{"dup":135}],190:[function(_dereq_,module,exports){
/*!
 * strip-comments <https://github.com/jonschlinkert/strip-comments>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use stric';

var reBlock = '\\/\\*';
var reBlockIgnore = '\\/\\*(?!\\*?\\!)';
var reBlockEnd = '(.|[\\r\\n]|\\n)*?\\*\\/\\n?\\n?';
var reLine = /(^|[^\S\n])(?:\/\/)([\s\S]+?)$/gm;
var reLineIgnore = /(^|[^\S\n])(?:\/\/[^!])([\s\S]+?)$/gm;


/**
 * Strip all comments
 *
 * {%= docs("strip") %}
 *
 * @param   {String} `str`  file contents or string to strip.
 * @param   {Object} `opts`  options are passed to `.block`, and `.line`
 * @return  {String} String without comments.
 * @api public
 */

var strip = module.exports = function(str, opts) {
  return str ? strip.block(strip.line(str, opts), opts) : '';
};


/**
 * Strip only block comments, optionally leaving protected comments
 * (e.g. `/*!`) intact.
 *
 * {%= docs("block") %}
 *
 * @param   {String} `str`  file content or string to strip to
 * @param   {Object} `opts`  if `safe:true`, strip only comments that do not start with `/*!` or `/**!`
 * @return  {String} String without block comments.
 * @api public
 */

strip.block = function(str, opts) {
  opts = opts || {};
  var re = new RegExp(reBlock + reBlockEnd, 'gm');
  if(opts.safe) {
    re = new RegExp(reBlockIgnore + reBlockEnd, 'gm');
  }
  return str ? str.replace(re, '') : '';
};


/**
 * Strip only line comments
 *
 * {%= docs("line") %}
 *
 * @param   {String} `str`  file content or string to strip to
 * @param   {Object} `opts`  if `safe:true`, strip all that not starts with `//!`
 * @return  {String} String without line comments.
 * @api public
 */

strip.line = function(str, opts) {
  opts = opts || {};
  var re = reLine;
  if(opts.safe) {
    re = reLineIgnore;
  }
  return str ? str.replace(re, '') : '';
};

},{}],191:[function(_dereq_,module,exports){
!function() {
  var topojson = {
    version: "1.6.19",
    mesh: function(topology) { return object(topology, meshArcs.apply(this, arguments)); },
    meshArcs: meshArcs,
    merge: function(topology) { return object(topology, mergeArcs.apply(this, arguments)); },
    mergeArcs: mergeArcs,
    feature: featureOrCollection,
    neighbors: neighbors,
    presimplify: presimplify
  };

  function stitchArcs(topology, arcs) {
    var stitchedArcs = {},
        fragmentByStart = {},
        fragmentByEnd = {},
        fragments = [],
        emptyIndex = -1;

    // Stitch empty arcs first, since they may be subsumed by other arcs.
    arcs.forEach(function(i, j) {
      var arc = topology.arcs[i < 0 ? ~i : i], t;
      if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
        t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
      }
    });

    arcs.forEach(function(i) {
      var e = ends(i),
          start = e[0],
          end = e[1],
          f, g;

      if (f = fragmentByEnd[start]) {
        delete fragmentByEnd[f.end];
        f.push(i);
        f.end = end;
        if (g = fragmentByStart[end]) {
          delete fragmentByStart[g.start];
          var fg = g === f ? f : f.concat(g);
          fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
        } else {
          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
        }
      } else if (f = fragmentByStart[end]) {
        delete fragmentByStart[f.start];
        f.unshift(i);
        f.start = start;
        if (g = fragmentByEnd[start]) {
          delete fragmentByEnd[g.end];
          var gf = g === f ? f : g.concat(f);
          fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
        } else {
          fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
        }
      } else {
        f = [i];
        fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
      }
    });

    function ends(i) {
      var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
      if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
      else p1 = arc[arc.length - 1];
      return i < 0 ? [p1, p0] : [p0, p1];
    }

    function flush(fragmentByEnd, fragmentByStart) {
      for (var k in fragmentByEnd) {
        var f = fragmentByEnd[k];
        delete fragmentByStart[f.start];
        delete f.start;
        delete f.end;
        f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
        fragments.push(f);
      }
    }

    flush(fragmentByEnd, fragmentByStart);
    flush(fragmentByStart, fragmentByEnd);
    arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

    return fragments;
  }

  function meshArcs(topology, o, filter) {
    var arcs = [];

    if (arguments.length > 1) {
      var geomsByArc = [],
          geom;

      function arc(i) {
        var j = i < 0 ? ~i : i;
        (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
      }

      function line(arcs) {
        arcs.forEach(arc);
      }

      function polygon(arcs) {
        arcs.forEach(line);
      }

      function geometry(o) {
        if (o.type === "GeometryCollection") o.geometries.forEach(geometry);
        else if (o.type in geometryType) geom = o, geometryType[o.type](o.arcs);
      }

      var geometryType = {
        LineString: line,
        MultiLineString: polygon,
        Polygon: polygon,
        MultiPolygon: function(arcs) { arcs.forEach(polygon); }
      };

      geometry(o);

      geomsByArc.forEach(arguments.length < 3
          ? function(geoms) { arcs.push(geoms[0].i); }
          : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });
    } else {
      for (var i = 0, n = topology.arcs.length; i < n; ++i) arcs.push(i);
    }

    return {type: "MultiLineString", arcs: stitchArcs(topology, arcs)};
  }

  function mergeArcs(topology, objects) {
    var polygonsByArc = {},
        polygons = [],
        components = [];

    objects.forEach(function(o) {
      if (o.type === "Polygon") register(o.arcs);
      else if (o.type === "MultiPolygon") o.arcs.forEach(register);
    });

    function register(polygon) {
      polygon.forEach(function(ring) {
        ring.forEach(function(arc) {
          (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
        });
      });
      polygons.push(polygon);
    }

    function exterior(ring) {
      return cartesianRingArea(object(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]) > 0; // TODO allow spherical?
    }

    polygons.forEach(function(polygon) {
      if (!polygon._) {
        var component = [],
            neighbors = [polygon];
        polygon._ = 1;
        components.push(component);
        while (polygon = neighbors.pop()) {
          component.push(polygon);
          polygon.forEach(function(ring) {
            ring.forEach(function(arc) {
              polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
                if (!polygon._) {
                  polygon._ = 1;
                  neighbors.push(polygon);
                }
              });
            });
          });
        }
      }
    });

    polygons.forEach(function(polygon) {
      delete polygon._;
    });

    return {
      type: "MultiPolygon",
      arcs: components.map(function(polygons) {
        var arcs = [];

        // Extract the exterior (unique) arcs.
        polygons.forEach(function(polygon) {
          polygon.forEach(function(ring) {
            ring.forEach(function(arc) {
              if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
                arcs.push(arc);
              }
            });
          });
        });

        // Stitch the arcs into one or more rings.
        arcs = stitchArcs(topology, arcs);

        // If more than one ring is returned,
        // at most one of these rings can be the exterior;
        // this exterior ring has the same winding order
        // as any exterior ring in the original polygons.
        if ((n = arcs.length) > 1) {
          var sgn = exterior(polygons[0][0]);
          for (var i = 0, t; i < n; ++i) {
            if (sgn === exterior(arcs[i])) {
              t = arcs[0], arcs[0] = arcs[i], arcs[i] = t;
              break;
            }
          }
        }

        return arcs;
      })
    };
  }

  function featureOrCollection(topology, o) {
    return o.type === "GeometryCollection" ? {
      type: "FeatureCollection",
      features: o.geometries.map(function(o) { return feature(topology, o); })
    } : feature(topology, o);
  }

  function feature(topology, o) {
    var f = {
      type: "Feature",
      id: o.id,
      properties: o.properties || {},
      geometry: object(topology, o)
    };
    if (o.id == null) delete f.id;
    return f;
  }

  function object(topology, o) {
    var absolute = transformAbsolute(topology.transform),
        arcs = topology.arcs;

    function arc(i, points) {
      if (points.length) points.pop();
      for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length, p; k < n; ++k) {
        points.push(p = a[k].slice());
        absolute(p, k);
      }
      if (i < 0) reverse(points, n);
    }

    function point(p) {
      p = p.slice();
      absolute(p, 0);
      return p;
    }

    function line(arcs) {
      var points = [];
      for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
      if (points.length < 2) points.push(points[0].slice());
      return points;
    }

    function ring(arcs) {
      var points = line(arcs);
      while (points.length < 4) points.push(points[0].slice());
      return points;
    }

    function polygon(arcs) {
      return arcs.map(ring);
    }

    function geometry(o) {
      var t = o.type;
      return t === "GeometryCollection" ? {type: t, geometries: o.geometries.map(geometry)}
          : t in geometryType ? {type: t, coordinates: geometryType[t](o)}
          : null;
    }

    var geometryType = {
      Point: function(o) { return point(o.coordinates); },
      MultiPoint: function(o) { return o.coordinates.map(point); },
      LineString: function(o) { return line(o.arcs); },
      MultiLineString: function(o) { return o.arcs.map(line); },
      Polygon: function(o) { return polygon(o.arcs); },
      MultiPolygon: function(o) { return o.arcs.map(polygon); }
    };

    return geometry(o);
  }

  function reverse(array, n) {
    var t, j = array.length, i = j - n; while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
  }

  function bisect(a, x) {
    var lo = 0, hi = a.length;
    while (lo < hi) {
      var mid = lo + hi >>> 1;
      if (a[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function neighbors(objects) {
    var indexesByArc = {}, // arc index -> array of object indexes
        neighbors = objects.map(function() { return []; });

    function line(arcs, i) {
      arcs.forEach(function(a) {
        if (a < 0) a = ~a;
        var o = indexesByArc[a];
        if (o) o.push(i);
        else indexesByArc[a] = [i];
      });
    }

    function polygon(arcs, i) {
      arcs.forEach(function(arc) { line(arc, i); });
    }

    function geometry(o, i) {
      if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
      else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
    }

    var geometryType = {
      LineString: line,
      MultiLineString: polygon,
      Polygon: polygon,
      MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
    };

    objects.forEach(geometry);

    for (var i in indexesByArc) {
      for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
        for (var k = j + 1; k < m; ++k) {
          var ij = indexes[j], ik = indexes[k], n;
          if ((n = neighbors[ij])[i = bisect(n, ik)] !== ik) n.splice(i, 0, ik);
          if ((n = neighbors[ik])[i = bisect(n, ij)] !== ij) n.splice(i, 0, ij);
        }
      }
    }

    return neighbors;
  }

  function presimplify(topology, triangleArea) {
    var absolute = transformAbsolute(topology.transform),
        relative = transformRelative(topology.transform),
        heap = minAreaHeap();

    if (!triangleArea) triangleArea = cartesianTriangleArea;

    topology.arcs.forEach(function(arc) {
      var triangles = [],
          maxArea = 0,
          triangle;

      // To store each point’s effective area, we create a new array rather than
      // extending the passed-in point to workaround a Chrome/V8 bug (getting
      // stuck in smi mode). For midpoints, the initial effective area of
      // Infinity will be computed in the next step.
      for (var i = 0, n = arc.length, p; i < n; ++i) {
        p = arc[i];
        absolute(arc[i] = [p[0], p[1], Infinity], i);
      }

      for (var i = 1, n = arc.length - 1; i < n; ++i) {
        triangle = arc.slice(i - 1, i + 2);
        triangle[1][2] = triangleArea(triangle);
        triangles.push(triangle);
        heap.push(triangle);
      }

      for (var i = 0, n = triangles.length; i < n; ++i) {
        triangle = triangles[i];
        triangle.previous = triangles[i - 1];
        triangle.next = triangles[i + 1];
      }

      while (triangle = heap.pop()) {
        var previous = triangle.previous,
            next = triangle.next;

        // If the area of the current point is less than that of the previous point
        // to be eliminated, use the latter's area instead. This ensures that the
        // current point cannot be eliminated without eliminating previously-
        // eliminated points.
        if (triangle[1][2] < maxArea) triangle[1][2] = maxArea;
        else maxArea = triangle[1][2];

        if (previous) {
          previous.next = next;
          previous[2] = triangle[2];
          update(previous);
        }

        if (next) {
          next.previous = previous;
          next[0] = triangle[0];
          update(next);
        }
      }

      arc.forEach(relative);
    });

    function update(triangle) {
      heap.remove(triangle);
      triangle[1][2] = triangleArea(triangle);
      heap.push(triangle);
    }

    return topology;
  };

  function cartesianRingArea(ring) {
    var i = -1,
        n = ring.length,
        a,
        b = ring[n - 1],
        area = 0;

    while (++i < n) {
      a = b;
      b = ring[i];
      area += a[0] * b[1] - a[1] * b[0];
    }

    return area * .5;
  }

  function cartesianTriangleArea(triangle) {
    var a = triangle[0], b = triangle[1], c = triangle[2];
    return Math.abs((a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]));
  }

  function compareArea(a, b) {
    return a[1][2] - b[1][2];
  }

  function minAreaHeap() {
    var heap = {},
        array = [],
        size = 0;

    heap.push = function(object) {
      up(array[object._ = size] = object, size++);
      return size;
    };

    heap.pop = function() {
      if (size <= 0) return;
      var removed = array[0], object;
      if (--size > 0) object = array[size], down(array[object._ = 0] = object, 0);
      return removed;
    };

    heap.remove = function(removed) {
      var i = removed._, object;
      if (array[i] !== removed) return; // invalid request
      if (i !== --size) object = array[size], (compareArea(object, removed) < 0 ? up : down)(array[object._ = i] = object, i);
      return i;
    };

    function up(object, i) {
      while (i > 0) {
        var j = ((i + 1) >> 1) - 1,
            parent = array[j];
        if (compareArea(object, parent) >= 0) break;
        array[parent._ = i] = parent;
        array[object._ = i = j] = object;
      }
    }

    function down(object, i) {
      while (true) {
        var r = (i + 1) << 1,
            l = r - 1,
            j = i,
            child = array[j];
        if (l < size && compareArea(array[l], child) < 0) child = array[j = l];
        if (r < size && compareArea(array[r], child) < 0) child = array[j = r];
        if (j === i) break;
        array[child._ = i] = child;
        array[object._ = i = j] = object;
      }
    }

    return heap;
  }

  function transformAbsolute(transform) {
    if (!transform) return noop;
    var x0,
        y0,
        kx = transform.scale[0],
        ky = transform.scale[1],
        dx = transform.translate[0],
        dy = transform.translate[1];
    return function(point, i) {
      if (!i) x0 = y0 = 0;
      point[0] = (x0 += point[0]) * kx + dx;
      point[1] = (y0 += point[1]) * ky + dy;
    };
  }

  function transformRelative(transform) {
    if (!transform) return noop;
    var x0,
        y0,
        kx = transform.scale[0],
        ky = transform.scale[1],
        dx = transform.translate[0],
        dy = transform.translate[1];
    return function(point, i) {
      if (!i) x0 = y0 = 0;
      var x1 = (point[0] - dx) / kx | 0,
          y1 = (point[1] - dy) / ky | 0;
      point[0] = x1 - x0;
      point[1] = y1 - y0;
      x0 = x1;
      y0 = y1;
    };
  }

  function noop() {}

  if (typeof define === "function" && define.amd) define(topojson);
  else if (typeof module === "object" && module.exports) module.exports = topojson;
  else this.topojson = topojson;
}();

},{}],192:[function(_dereq_,module,exports){
module.exports.VectorTile = _dereq_('./lib/vectortile.js');
module.exports.VectorTileFeature = _dereq_('./lib/vectortilefeature.js');
module.exports.VectorTileLayer = _dereq_('./lib/vectortilelayer.js');

},{"./lib/vectortile.js":193,"./lib/vectortilefeature.js":194,"./lib/vectortilelayer.js":195}],193:[function(_dereq_,module,exports){
'use strict';

var VectorTileLayer = _dereq_('./vectortilelayer');

module.exports = VectorTile;

function VectorTile(pbf, end) {
    this.layers = pbf.readFields(readTile, {}, end);
}

function readTile(tag, layers, pbf) {
    if (tag === 3) {
        var layer = new VectorTileLayer(pbf, pbf.readVarint() + pbf.pos);
        if (layer.length) layers[layer.name] = layer;
    }
}


},{"./vectortilelayer":195}],194:[function(_dereq_,module,exports){
'use strict';

var Point = _dereq_('point-geometry');

module.exports = VectorTileFeature;

function VectorTileFeature(pbf, end, extent, keys, values) {
    // Public
    this.properties = {};
    this.extent = extent;
    this.type = 0;

    // Private
    this._pbf = pbf;
    this._geometry = -1;
    this._keys = keys;
    this._values = values;

    pbf.readFields(readFeature, this, end);
}

function readFeature(tag, feature, pbf) {
    if (tag == 1) feature._id = pbf.readVarint();
    else if (tag == 2) readTag(pbf, feature);
    else if (tag == 3) feature.type = pbf.readVarint();
    else if (tag == 4) feature._geometry = pbf.pos;
}

function readTag(pbf, feature) {
    var end = pbf.readVarint() + pbf.pos;

    while (pbf.pos < end) {
        var key = feature._keys[pbf.readVarint()],
            value = feature._values[pbf.readVarint()];
        feature.properties[key] = value;
    }
}

VectorTileFeature.types = ['Unknown', 'Point', 'LineString', 'Polygon'];

VectorTileFeature.prototype.loadGeometry = function() {
    var pbf = this._pbf;
    pbf.pos = this._geometry;

    var end = pbf.readVarint() + pbf.pos,
        cmd = 1,
        length = 0,
        x = 0,
        y = 0,
        lines = [],
        line;

    while (pbf.pos < end) {
        if (!length) {
            var cmdLen = pbf.readVarint();
            cmd = cmdLen & 0x7;
            length = cmdLen >> 3;
        }

        length--;

        if (cmd === 1 || cmd === 2) {
            x += pbf.readSVarint();
            y += pbf.readSVarint();

            if (cmd === 1) { // moveTo
                if (line) lines.push(line);
                line = [];
            }

            line.push(new Point(x, y));

        } else if (cmd === 7) {
            line.push(line[0].clone()); // closePolygon

        } else {
            throw new Error('unknown command ' + cmd);
        }
    }

    if (line) lines.push(line);

    return lines;
};

VectorTileFeature.prototype.bbox = function() {
    var pbf = this._pbf;
    pbf.pos = this._geometry;

    var end = pbf.readVarint() + pbf.pos,
        cmd = 1,
        length = 0,
        x = 0,
        y = 0,
        x1 = Infinity,
        x2 = -Infinity,
        y1 = Infinity,
        y2 = -Infinity;

    while (pbf.pos < end) {
        if (!length) {
            var cmdLen = pbf.readVarint();
            cmd = cmdLen & 0x7;
            length = cmdLen >> 3;
        }

        length--;

        if (cmd === 1 || cmd === 2) {
            x += pbf.readSVarint();
            y += pbf.readSVarint();
            if (x < x1) x1 = x;
            if (x > x2) x2 = x;
            if (y < y1) y1 = y;
            if (y > y2) y2 = y;

        } else if (cmd !== 7) {
            throw new Error('unknown command ' + cmd);
        }
    }

    return [x1, y1, x2, y2];
};

VectorTileFeature.prototype.toGeoJSON = function(x, y, z) {
    var size = this.extent * Math.pow(2, z),
        x0 = this.extent * x,
        y0 = this.extent * y,
        coords = this.loadGeometry(),
        type = VectorTileFeature.types[this.type];

    for (var i = 0; i < coords.length; i++) {
        var line = coords[i];
        for (var j = 0; j < line.length; j++) {
            var p = line[j], y2 = 180 - (p.y + y0) * 360 / size;
            line[j] = [
                (p.x + x0) * 360 / size - 180,
                360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90
            ];
        }
    }

    if (type === 'Point' && coords.length === 1) {
        coords = coords[0][0];
    } else if (type === 'Point') {
        coords = coords[0];
        type = 'MultiPoint';
    } else if (type === 'LineString' && coords.length === 1) {
        coords = coords[0];
    } else if (type === 'LineString') {
        type = 'MultiLineString';
    }

    return {
        type: "Feature",
        geometry: {
            type: type,
            coordinates: coords
        },
        properties: this.properties
    };
};

},{"point-geometry":196}],195:[function(_dereq_,module,exports){
'use strict';

var VectorTileFeature = _dereq_('./vectortilefeature.js');

module.exports = VectorTileLayer;

function VectorTileLayer(pbf, end) {
    // Public
    this.version = 1;
    this.name = null;
    this.extent = 4096;
    this.length = 0;

    // Private
    this._pbf = pbf;
    this._keys = [];
    this._values = [];
    this._features = [];

    pbf.readFields(readLayer, this, end);

    this.length = this._features.length;
}

function readLayer(tag, layer, pbf) {
    if (tag === 15) layer.version = pbf.readVarint();
    else if (tag === 1) layer.name = pbf.readString();
    else if (tag === 5) layer.extent = pbf.readVarint();
    else if (tag === 2) layer._features.push(pbf.pos);
    else if (tag === 3) layer._keys.push(pbf.readString());
    else if (tag === 4) layer._values.push(readValueMessage(pbf));
}

function readValueMessage(pbf) {
    var value = null,
        end = pbf.readVarint() + pbf.pos;

    while (pbf.pos < end) {
        var tag = pbf.readVarint() >> 3;

        value = tag === 1 ? pbf.readString() :
            tag === 2 ? pbf.readFloat() :
            tag === 3 ? pbf.readDouble() :
            tag === 4 ? pbf.readVarint64() :
            tag === 5 ? pbf.readVarint() :
            tag === 6 ? pbf.readSVarint() :
            tag === 7 ? pbf.readBoolean() : null;
    }

    return value;
}

// return feature `i` from this layer as a `VectorTileFeature`
VectorTileLayer.prototype.feature = function(i) {
    if (i < 0 || i >= this._features.length) throw new Error('feature index out of bounds');

    this._pbf.pos = this._features[i];

    var end = this._pbf.readVarint() + this._pbf.pos;
    return new VectorTileFeature(this._pbf, end, this.extent, this._keys, this._values);
};

},{"./vectortilefeature.js":194}],196:[function(_dereq_,module,exports){
'use strict';

module.exports = Point;

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {
    clone: function() { return new Point(this.x, this.y); },

    add:     function(p) { return this.clone()._add(p);     },
    sub:     function(p) { return this.clone()._sub(p);     },
    mult:    function(k) { return this.clone()._mult(k);    },
    div:     function(k) { return this.clone()._div(k);     },
    rotate:  function(a) { return this.clone()._rotate(a);  },
    matMult: function(m) { return this.clone()._matMult(m); },
    unit:    function() { return this.clone()._unit(); },
    perp:    function() { return this.clone()._perp(); },
    round:   function() { return this.clone()._round(); },

    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    equals: function(p) {
        return this.x === p.x &&
               this.y === p.y;
    },

    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    // Find the angle of the two vectors, solving the formula for the cross product a x b = |a||b|sin(θ) for θ.
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

// constructs Point from an array if necessary
Point.convert = function (a) {
    if (a instanceof Point) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point(a[0], a[1]);
    }
    return a;
};

},{}],197:[function(_dereq_,module,exports){
// Geometry building functions
'use strict';

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.outsideTile = outsideTile;
exports.isCoordOutsideTile = isCoordOutsideTile;

var _geo = _dereq_('../geo');

var _geo2 = _interopRequireDefault(_geo);

var tile_bounds = [{ x: 0, y: 0 }, { x: _geo2['default'].tile_scale, y: -_geo2['default'].tile_scale } // TODO: correct for flipped y-axis?
];

exports.tile_bounds = tile_bounds;
var default_uvs = [0, 0, 1, 1];

exports.default_uvs = default_uvs;
// Tests if a line segment (from point A to B) is outside the tile bounds
// (within a certain tolerance to account for geometry nearly on tile edges)

function outsideTile(_a, _b, tolerance) {
    var tile_min = tile_bounds[0];
    var tile_max = tile_bounds[1];

    // TODO: fix flipped Y coords here, confusing with 'max' reference
    if (_a[0] <= tile_min.x + tolerance && _b[0] <= tile_min.x + tolerance || _a[0] >= tile_max.x - tolerance && _b[0] >= tile_max.x - tolerance || _a[1] >= tile_min.y - tolerance && _b[1] >= tile_min.y - tolerance || _a[1] <= tile_max.y + tolerance && _b[1] <= tile_max.y + tolerance) {
        return true;
    }

    return false;
}

function isCoordOutsideTile(coord, tolerance) {
    tolerance = tolerance || 0;
    var tile_min = tile_bounds[0];
    var tile_max = tile_bounds[1];

    return coord[0] <= tile_min.x + tolerance || coord[0] >= tile_max.x - tolerance || coord[1] >= tile_min.y - tolerance || coord[1] <= tile_max.y + tolerance;
}

},{"../geo":201,"babel-runtime/helpers/interop-require-default":23}],198:[function(_dereq_,module,exports){
// Point builders
'use strict';

var _slicedToArray = _dereq_('babel-runtime/helpers/sliced-to-array')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.buildQuadsForPoints = buildQuadsForPoints;

var _common = _dereq_('./common');

// Build a billboard sprite quad centered on a point. Sprites are intended to be drawn in screenspace, and have
// properties for width, height, angle, and a scale factor that can be used to interpolate the screenspace size
// of a sprite between two zoom levels.

function buildQuadsForPoints(points, vertex_data, vertex_template, _ref, _ref2) {
    var texcoord_index = _ref.texcoord_index;
    var position_index = _ref.position_index;
    var shape_index = _ref.shape_index;
    var offset_index = _ref.offset_index;
    var quad = _ref2.quad;
    var quad_normalize = _ref2.quad_normalize;
    var offset = _ref2.offset;
    var angle = _ref2.angle;
    var shape_w = _ref2.shape_w;
    var texcoord_scale = _ref2.texcoord_scale;
    var texcoord_normalize = _ref2.texcoord_normalize;

    quad_normalize = quad_normalize || 1;
    var w2 = quad[0] / 2 * quad_normalize;
    var h2 = quad[1] / 2 * quad_normalize;
    var scaling = [[-w2, -h2], [w2, -h2], [w2, h2], [-w2, h2]];

    var vertex_elements = vertex_data.vertex_elements;
    var element_offset = vertex_data.vertex_count;

    var texcoords = undefined;
    if (texcoord_index) {
        texcoord_normalize = texcoord_normalize || 1;

        var _ref3 = texcoord_scale || _common.default_uvs;

        var _ref32 = _slicedToArray(_ref3, 4);

        var min_u = _ref32[0];
        var min_v = _ref32[1];
        var max_u = _ref32[2];
        var max_v = _ref32[3];

        texcoords = [[min_u, min_v], [max_u, min_v], [max_u, max_v], [min_u, max_v]];
    }

    var num_points = points.length;
    for (var p = 0; p < num_points; p++) {
        var point = points[p];

        for (var pos = 0; pos < 4; pos++) {
            // Add texcoords
            if (texcoord_index) {
                vertex_template[texcoord_index + 0] = texcoords[pos][0] * texcoord_normalize;
                vertex_template[texcoord_index + 1] = texcoords[pos][1] * texcoord_normalize;
            }

            vertex_template[position_index + 0] = point[0];
            vertex_template[position_index + 1] = point[1];

            vertex_template[shape_index + 0] = scaling[pos][0];
            vertex_template[shape_index + 1] = scaling[pos][1];
            vertex_template[shape_index + 2] = angle;
            vertex_template[shape_index + 3] = shape_w;

            vertex_template[offset_index + 0] = offset[0];
            vertex_template[offset_index + 1] = offset[1];

            vertex_data.addVertex(vertex_template);
        }

        vertex_elements.push(element_offset + 0);
        vertex_elements.push(element_offset + 1);
        vertex_elements.push(element_offset + 2);
        vertex_elements.push(element_offset + 2);
        vertex_elements.push(element_offset + 3);
        vertex_elements.push(element_offset + 0);

        element_offset += 4;
    }
}

},{"./common":197,"babel-runtime/helpers/sliced-to-array":24}],199:[function(_dereq_,module,exports){
// Polygon builders
'use strict';

var _slicedToArray = _dereq_('babel-runtime/helpers/sliced-to-array')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.buildPolygons = buildPolygons;
exports.buildExtrudedPolygons = buildExtrudedPolygons;
exports.triangulatePolygon = triangulatePolygon;

var _geo = _dereq_('../geo');

var _geo2 = _interopRequireDefault(_geo);

var _vector = _dereq_('../vector');

var _vector2 = _interopRequireDefault(_vector);

var _common = _dereq_('./common');

var _earcut = _dereq_('earcut');

var _earcut2 = _interopRequireDefault(_earcut);

var up_vec3 = [0, 0, 1];

// Tesselate a flat 2D polygon
// x & y coordinates will be set as first two elements of provided vertex_template

function buildPolygons(polygons, vertex_data, vertex_template, _ref) {
    var texcoord_index = _ref.texcoord_index;
    var texcoord_scale = _ref.texcoord_scale;
    var texcoord_normalize = _ref.texcoord_normalize;

    var vertex_elements = vertex_data.vertex_elements;

    if (texcoord_index) {
        texcoord_normalize = texcoord_normalize || 1;

        var _ref2 = texcoord_scale || _common.default_uvs;

        var _ref22 = _slicedToArray(_ref2, 4);

        var min_u = _ref22[0];
        var min_v = _ref22[1];
        var max_u = _ref22[2];
        var max_v = _ref22[3];
    }

    var num_polygons = polygons.length;
    for (var p = 0; p < num_polygons; p++) {
        var element_offset = vertex_data.vertex_count;

        var polygon = polygons[p];

        // Find polygon extents to calculate UVs, fit them to the axis-aligned bounding box
        if (texcoord_index) {
            var _Geo$findBoundingBox = _geo2['default'].findBoundingBox(polygon);

            var _Geo$findBoundingBox2 = _slicedToArray(_Geo$findBoundingBox, 4);

            var min_x = _Geo$findBoundingBox2[0];
            var min_y = _Geo$findBoundingBox2[1];
            var max_x = _Geo$findBoundingBox2[2];
            var max_y = _Geo$findBoundingBox2[3];

            var span_x = max_x - min_x;
            var span_y = max_y - min_y;
            var scale_u = (max_u - min_u) / span_x;
            var scale_v = (max_v - min_v) / span_y;
        }

        for (var ring_index = 0; ring_index < polygon.length; ring_index++) {
            // Add vertex data
            var polygon_ring = polygon[ring_index];
            for (var i = 0; i < polygon_ring.length; i++) {
                var vertex = polygon_ring[i];
                vertex_template[0] = vertex[0];
                vertex_template[1] = vertex[1];

                // Add UVs
                if (texcoord_index) {
                    vertex_template[texcoord_index + 0] = ((vertex[0] - min_x) * scale_u + min_u) * texcoord_normalize;
                    vertex_template[texcoord_index + 1] = ((vertex[1] - min_y) * scale_v + min_v) * texcoord_normalize;
                }

                vertex_data.addVertex(vertex_template);
            }
        }

        // Add element indices
        var indices = triangulatePolygon(_earcut2['default'].flatten(polygon));
        for (var i = 0; i < indices.length; i++) {
            vertex_elements.push(element_offset + indices[i]);
        }
    }
}

// Tesselate and extrude a flat 2D polygon into a simple 3D model with fixed height and add to GL vertex buffer

function buildExtrudedPolygons(polygons, z, height, min_height, vertex_data, vertex_template, normal_index, normal_normalize, _ref3) {
    var remove_tile_edges = _ref3.remove_tile_edges;
    var tile_edge_tolerance = _ref3.tile_edge_tolerance;
    var texcoord_index = _ref3.texcoord_index;
    var texcoord_scale = _ref3.texcoord_scale;
    var texcoord_normalize = _ref3.texcoord_normalize;
    var winding = _ref3.winding;

    // Top
    var min_z = z + (min_height || 0);
    var max_z = z + height;
    vertex_template[2] = max_z;
    buildPolygons(polygons, vertex_data, vertex_template, { texcoord_index: texcoord_index, texcoord_scale: texcoord_scale, texcoord_normalize: texcoord_normalize });

    var vertex_elements = vertex_data.vertex_elements;
    var element_offset = vertex_data.vertex_count;

    // Walls
    // Fit UVs to wall quad
    if (texcoord_index) {
        texcoord_normalize = texcoord_normalize || 1;

        var _ref4 = texcoord_scale || _common.default_uvs;

        var _ref42 = _slicedToArray(_ref4, 4);

        var min_u = _ref42[0];
        var min_v = _ref42[1];
        var max_u = _ref42[2];
        var max_v = _ref42[3];

        var texcoords = [[min_u, max_v], [min_u, min_v], [max_u, min_v], [max_u, max_v]];
    }

    var num_polygons = polygons.length;
    for (var p = 0; p < num_polygons; p++) {
        var polygon = polygons[p];

        for (var q = 0; q < polygon.length; q++) {
            var contour = polygon[q];

            for (var w = 0; w < contour.length - 1; w++) {
                if (remove_tile_edges && (0, _common.outsideTile)(contour[w], contour[w + 1], tile_edge_tolerance)) {
                    continue; // don't extrude tile edges
                }

                // Wall order is dependent on winding order, so that normals face outward
                var w0 = undefined,
                    w1 = undefined;
                if (winding === 'CCW') {
                    w0 = w;
                    w1 = w + 1;
                } else {
                    w0 = w + 1;
                    w1 = w;
                }

                // Two triangles for the quad formed by each vertex pair, going from bottom to top height
                var wall_vertices = [[contour[w1][0], contour[w1][1], max_z], [contour[w1][0], contour[w1][1], min_z], [contour[w0][0], contour[w0][1], min_z], [contour[w0][0], contour[w0][1], max_z]];

                // Calc the normal of the wall from up vector and one segment of the wall triangles
                var wall_vec = _vector2['default'].normalize([contour[w1][0] - contour[w0][0], contour[w1][1] - contour[w0][1], 0]);
                var normal = _vector2['default'].cross(up_vec3, wall_vec);

                // Update vertex template with current surface normal
                vertex_template[normal_index + 0] = normal[0] * normal_normalize;
                vertex_template[normal_index + 1] = normal[1] * normal_normalize;
                vertex_template[normal_index + 2] = normal[2] * normal_normalize;

                for (var wv = 0; wv < wall_vertices.length; wv++) {
                    vertex_template[0] = wall_vertices[wv][0];
                    vertex_template[1] = wall_vertices[wv][1];
                    vertex_template[2] = wall_vertices[wv][2];

                    if (texcoord_index) {
                        vertex_template[texcoord_index + 0] = texcoords[wv][0] * texcoord_normalize;
                        vertex_template[texcoord_index + 1] = texcoords[wv][1] * texcoord_normalize;
                    }

                    vertex_data.addVertex(vertex_template);
                }

                vertex_elements.push(element_offset + 0);
                vertex_elements.push(element_offset + 1);
                vertex_elements.push(element_offset + 2);
                vertex_elements.push(element_offset + 2);
                vertex_elements.push(element_offset + 3);
                vertex_elements.push(element_offset + 0);

                element_offset += 4;
            }
        }
    }
}

// Triangulation using earcut
// https://github.com/mapbox/earcut

function triangulatePolygon(data) {
    return (0, _earcut2['default'])(data.vertices, data.holes, data.dimensions);
}

},{"../geo":201,"../vector":251,"./common":197,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/sliced-to-array":24,"earcut":139}],200:[function(_dereq_,module,exports){
// Geometry building functions

'use strict';

var _Math$log2 = _dereq_('babel-runtime/core-js/math/log2')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.buildPolylines = buildPolylines;

var _vector = _dereq_('../vector');

var _vector2 = _interopRequireDefault(_vector);

var _geo = _dereq_('../geo');

var _geo2 = _interopRequireDefault(_geo);

var _common = _dereq_('./common');

var zero_vec2 = [0, 0];

// Build tessellated triangles for a polyline
var CAP_TYPE = {
    butt: 0,
    square: 1,
    round: 2
};

var JOIN_TYPE = {
    miter: 0,
    bevel: 1,
    round: 2
};

var DEFAULT = {
    MITER_LIMIT: 3,
    TEXCOORD_NORMALIZE: 1,
    TEXCOORD_RATIO: 1,
    MIN_FAN_WIDTH: 5 // Width of line in tile units to place 1 triangle per fan
};

// Scaling factor to add precision to line texture V coordinate packed as normalized short
var v_scale_adjust = _geo2['default'].tile_scale;

function buildPolylines(lines, width, vertex_data, vertex_template, _ref) {
    var closed_polygon = _ref.closed_polygon;
    var remove_tile_edges = _ref.remove_tile_edges;
    var tile_edge_tolerance = _ref.tile_edge_tolerance;
    var texcoord_index = _ref.texcoord_index;
    var texcoord_scale = _ref.texcoord_scale;
    var texcoord_width = _ref.texcoord_width;
    var texcoord_ratio = _ref.texcoord_ratio;
    var texcoord_normalize = _ref.texcoord_normalize;
    var scaling_index = _ref.scaling_index;
    var scaling_normalize = _ref.scaling_normalize;
    var join = _ref.join;
    var cap = _ref.cap;
    var miter_limit = _ref.miter_limit;

    var cap_type = cap ? CAP_TYPE[cap] : CAP_TYPE.butt;
    var join_type = join ? JOIN_TYPE[join] : JOIN_TYPE.miter;

    // Configure miter limit
    if (join_type === JOIN_TYPE.miter) {
        miter_limit = miter_limit || DEFAULT.MITER_LIMIT; // default miter limit
        var miter_len_sq = miter_limit * miter_limit;
    }

    // Texture Variables
    var v_scale;
    if (texcoord_index) {
        texcoord_normalize = texcoord_normalize || DEFAULT.TEXCOORD_NORMALIZE;
        texcoord_ratio = texcoord_ratio || DEFAULT.TEXCOORD_RATIO;
        v_scale = 1 / (texcoord_width * texcoord_ratio * v_scale_adjust); // scales line texture as a ratio of the line's width
    }

    // Values that are constant for each line and are passed to helper functions
    var context = {
        closed_polygon: closed_polygon,
        remove_tile_edges: remove_tile_edges,
        tile_edge_tolerance: tile_edge_tolerance,
        miter_len_sq: miter_len_sq,
        join_type: join_type,
        cap_type: cap_type,
        vertex_data: vertex_data,
        vertex_template: vertex_template,
        half_width: width / 2,
        scaling_index: scaling_index,
        scaling_normalize: scaling_normalize,
        v_scale: v_scale,
        texcoord_index: texcoord_index,
        texcoord_width: texcoord_width,
        texcoord_normalize: texcoord_normalize
    };

    // Buffer for extra lines to process
    var extra_lines = [];

    // Process lines
    for (var index = 0; index < lines.length; index++) {
        buildPolyline(lines[index], context, extra_lines);
    }

    // Process extra lines
    for (var index = 0; index < extra_lines.length; index++) {
        buildPolyline(extra_lines[index], context, extra_lines);
    }
}

function buildPolyline(line, context, extra_lines) {
    // Skip if line is not valid
    if (line.length < 2) {
        return;
    }

    var coordCurr, coordNext, normPrev, normNext;
    var join_type = context.join_type;
    var cap_type = context.cap_type;
    var closed_polygon = context.closed_polygon;
    var remove_tile_edges = context.remove_tile_edges;
    var tile_edge_tolerance = context.tile_edge_tolerance;
    var v_scale = context.v_scale;
    var miter_len_sq = context.miter_len_sq;

    var v = 0; // Texture v-coordinate

    // Loop backwards through line to a tile boundary if found
    if (closed_polygon && join_type === JOIN_TYPE.miter) {
        var boundaryIndex = getTileBoundaryIndex(line);
        if (boundaryIndex !== 0) {
            // create new line that is a cyclic permutation of the original
            var permutedLine = permuteLine(line, boundaryIndex);
            extra_lines.push(permutedLine);
            return;
        }
    }

    // FIRST POINT
    coordCurr = line[0];
    coordNext = line[1];

    // If first pair of points is redundant, slice and push to the lines array
    if (_vector2['default'].isEqual(coordCurr, coordNext)) {
        if (line.length > 2) {
            extra_lines.push(line.slice(1));
        }
        return;
    }

    normNext = _vector2['default'].normalize(_vector2['default'].perp(coordCurr, coordNext));

    // Skip tile boundary lines and append a new line if needed
    if (remove_tile_edges && (0, _common.outsideTile)(coordCurr, coordNext, tile_edge_tolerance)) {
        var nonBoundarySegment = getNextNonBoundarySegment(line, 0, tile_edge_tolerance);
        if (nonBoundarySegment) {
            extra_lines.push(nonBoundarySegment);
        }
        return;
    }

    if (closed_polygon) {
        // Begin the polygon with a join (connecting the first and last segments)
        normPrev = _vector2['default'].normalize(_vector2['default'].perp(line[line.length - 2], coordCurr));
        startPolygon(coordCurr, normPrev, normNext, join_type, context);
    } else {
        // If line begins at edge, don't add a cap
        if (!(0, _common.isCoordOutsideTile)(coordCurr)) {
            addCap(coordCurr, v, normNext, cap_type, true, context);
            if (cap_type !== CAP_TYPE.butt) {
                v += 0.5 * v_scale * context.texcoord_width;
            }
        }

        // Add first pair of points for the line strip
        addVertex(coordCurr, normNext, [1, v], context);
        addVertex(coordCurr, _vector2['default'].neg(normNext), [0, v], context);
    }

    // INTERMEDIARY POINTS
    v += v_scale * _vector2['default'].length(_vector2['default'].sub(coordNext, coordCurr));
    for (var i = 1; i < line.length - 1; i++) {
        var currIndex = i;
        var nextIndex = i + 1;
        coordCurr = line[currIndex];
        coordNext = line[nextIndex];

        // Skip redundant vertices
        if (_vector2['default'].isEqual(coordCurr, coordNext)) {
            continue;
        }

        // Remove tile boundaries
        if (remove_tile_edges && (0, _common.outsideTile)(coordCurr, coordNext, tile_edge_tolerance)) {
            addVertex(coordCurr, normNext, [1, v], context);
            addVertex(coordCurr, _vector2['default'].neg(normNext), [0, v], context);
            indexPairs(1, context);

            var nonBoundaryLines = getNextNonBoundarySegment(line, currIndex + 1, tile_edge_tolerance);
            if (nonBoundaryLines) {
                extra_lines.push(nonBoundaryLines);
            }
            return;
        }

        normPrev = normNext;
        normNext = _vector2['default'].normalize(_vector2['default'].perp(coordCurr, coordNext));

        // Add join
        if (join_type === JOIN_TYPE.miter) {
            addMiter(v, coordCurr, normPrev, normNext, miter_len_sq, false, context);
        } else {
            addJoin(join_type, v, coordCurr, normPrev, normNext, false, context);
        }

        v += v_scale * _vector2['default'].length(_vector2['default'].sub(coordNext, coordCurr));
    }

    // LAST POINT
    coordCurr = coordNext;
    normPrev = normNext;

    if (closed_polygon) {
        // Close the polygon with a miter joint or butt cap if on a tile boundary
        normNext = _vector2['default'].normalize(_vector2['default'].perp(coordCurr, line[1]));
        endPolygon(coordCurr, normPrev, normNext, join_type, v, context);
    } else {
        // Finish the line strip
        addVertex(coordCurr, normPrev, [1, v], context);
        addVertex(coordCurr, _vector2['default'].neg(normPrev), [0, v], context);
        indexPairs(1, context);

        // If line ends at edge, don't add a cap
        if (!(0, _common.isCoordOutsideTile)(coordCurr)) {
            addCap(coordCurr, v, normPrev, cap_type, false, context);
        }
    }
}

function getTileBoundaryIndex(line) {
    if ((0, _common.isCoordOutsideTile)(line[0])) {
        return 0;
    }

    for (var backIndex = 0; backIndex < line.length; backIndex++) {
        var coordCurr = line[line.length - 1 - backIndex];
        if ((0, _common.isCoordOutsideTile)(coordCurr)) {
            return line.length - 1 - backIndex;
        }
    }

    return 0;
}

// Iterate through line from startIndex to find a segment not on a tile boundary, if any.
function getNextNonBoundarySegment(line, startIndex, tolerance) {
    var endIndex = startIndex;
    while (line[endIndex + 1] && (0, _common.outsideTile)(line[endIndex], line[endIndex + 1], tolerance)) {
        endIndex++;
    }

    // If there is a line segment remaining that is within the tile, push it to the lines array
    return line.length - endIndex >= 2 ? line.slice(endIndex) : false;
}

// Begin a polygon with a join connecting to the last segment (if valid join-type specified)
function startPolygon(coordCurr, normPrev, normNext, join_type, context) {
    // If polygon starts on a tile boundary, don't add a join
    if (join_type === undefined || (0, _common.isCoordOutsideTile)(coordCurr)) {
        addVertex(coordCurr, normNext, [1, 0], context);
        addVertex(coordCurr, _vector2['default'].neg(normNext), [0, 0], context);
    } else {
        // If polygon starts within a tile, add a join
        var v = 0;
        if (join_type === JOIN_TYPE.miter) {
            addMiter(v, coordCurr, normPrev, normNext, context.miter_len_sq, true, context);
        } else {
            addJoin(join_type, v, coordCurr, normPrev, normNext, true, context);
        }
    }
}

// End a polygon appropriately
function endPolygon(coordCurr, normPrev, normNext, join_type, v, context) {
    // If polygon ends on a tile boundary, don't add a join
    if ((0, _common.isCoordOutsideTile)(coordCurr)) {
        addVertex(coordCurr, normPrev, [1, v], context);
        addVertex(coordCurr, _vector2['default'].neg(normPrev), [0, v], context);
        indexPairs(1, context);
    } else {
        // If polygon ends within a tile, add Miter or no joint (join added on startPolygon)
        var miterVec = createMiterVec(normPrev, normNext);

        if (join_type === JOIN_TYPE.miter && _vector2['default'].lengthSq(miterVec) > context.miter_len_sq) {
            join_type = JOIN_TYPE.bevel; // switch to bevel
        }

        if (join_type === JOIN_TYPE.miter) {
            addVertex(coordCurr, miterVec, [1, v], context);
            addVertex(coordCurr, _vector2['default'].neg(miterVec), [0, v], context);
            indexPairs(1, context);
        } else {
            addVertex(coordCurr, normPrev, [1, v], context);
            addVertex(coordCurr, _vector2['default'].neg(normPrev), [0, v], context);
            indexPairs(1, context);
        }
    }
}

function createMiterVec(normPrev, normNext) {
    var miterVec = _vector2['default'].normalize(_vector2['default'].add(normPrev, normNext));
    var scale = 2 / (1 + Math.abs(_vector2['default'].dot(normPrev, miterVec)));
    return _vector2['default'].mult(miterVec, scale * scale);
}

// Add a miter vector or a join if the miter is too sharp
function addMiter(v, coordCurr, normPrev, normNext, miter_len_sq, isBeginning, context) {
    var miterVec = createMiterVec(normPrev, normNext);

    //  Miter limit: if miter join is too sharp, convert to bevel instead
    if (_vector2['default'].lengthSq(miterVec) > miter_len_sq) {
        addJoin(JOIN_TYPE.miter, v, coordCurr, normPrev, normNext, isBeginning, context);
    } else {
        addVertex(coordCurr, miterVec, [1, v], context);
        addVertex(coordCurr, _vector2['default'].neg(miterVec), [0, v], context);
        if (!isBeginning) {
            indexPairs(1, context);
        }
    }
}

// Add a bevel or round join
function addJoin(join_type, v, coordCurr, normPrev, normNext, isBeginning, context) {
    var miterVec = createMiterVec(normPrev, normNext);
    var isClockwise = normNext[0] * normPrev[1] - normNext[1] * normPrev[0] > 0;

    if (isClockwise) {
        addVertex(coordCurr, miterVec, [1, v], context);
        addVertex(coordCurr, _vector2['default'].neg(normPrev), [0, v], context);

        if (!isBeginning) {
            indexPairs(1, context);
        }

        if (join_type === JOIN_TYPE.bevel) {
            addBevel(coordCurr, _vector2['default'].neg(normPrev), miterVec, _vector2['default'].neg(normNext), [0, v], [1, v], [0, v], context);
        } else if (join_type === JOIN_TYPE.round) {
            addFan(coordCurr, _vector2['default'].neg(normPrev), miterVec, _vector2['default'].neg(normNext), [0, v], [1, v], [0, v], false, context);
        }

        addVertex(coordCurr, miterVec, [1, v], context);
        addVertex(coordCurr, _vector2['default'].neg(normNext), [0, v], context);
    } else {
        addVertex(coordCurr, normPrev, [1, v], context);
        addVertex(coordCurr, _vector2['default'].neg(miterVec), [0, v], context);

        if (!isBeginning) {
            indexPairs(1, context);
        }

        if (join_type === JOIN_TYPE.bevel) {
            addBevel(coordCurr, normPrev, _vector2['default'].neg(miterVec), normNext, [1, v], [0, v], [1, v], context);
        } else if (join_type === JOIN_TYPE.round) {
            addFan(coordCurr, normPrev, _vector2['default'].neg(miterVec), normNext, [1, v], [0, v], [1, v], false, context);
        }

        addVertex(coordCurr, normNext, [1, v], context);
        addVertex(coordCurr, _vector2['default'].neg(miterVec), [0, v], context);
    }
}

// Add indices to vertex_elements
function indexPairs(num_pairs, context) {
    var vertex_elements = context.vertex_data.vertex_elements;
    var num_vertices = context.vertex_data.vertex_count;
    var offset = num_vertices - 2 * num_pairs - 2;

    for (var i = 0; i < num_pairs; i++) {
        vertex_elements.push(offset + 2 * i + 2);
        vertex_elements.push(offset + 2 * i + 1);
        vertex_elements.push(offset + 2 * i + 0);
        vertex_elements.push(offset + 2 * i + 2);
        vertex_elements.push(offset + 2 * i + 3);
        vertex_elements.push(offset + 2 * i + 1);
    }
}

function addVertex(coordinate, normal, uv, context) {
    var vertex_template = context.vertex_template;
    var vertex_data = context.vertex_data;

    buildVertexTemplate(vertex_template, coordinate, uv, normal, context);
    vertex_data.addVertex(vertex_template);
}

function buildVertexTemplate(vertex_template, vertex, texture_coord, scale, context) {
    // set vertex position
    vertex_template[0] = vertex[0];
    vertex_template[1] = vertex[1];

    // set UVs
    if (context.texcoord_index && texture_coord) {
        vertex_template[context.texcoord_index + 0] = texture_coord[0] * context.texcoord_normalize;
        vertex_template[context.texcoord_index + 1] = texture_coord[1] * context.texcoord_normalize;
    }

    // set Scaling vertex (X, Y normal direction + Z half_width as attribute)
    if (context.scaling_index) {
        vertex_template[context.scaling_index + 0] = scale[0] * context.scaling_normalize;
        vertex_template[context.scaling_index + 1] = scale[1] * context.scaling_normalize;
        vertex_template[context.scaling_index + 2] = context.half_width;
    }
}

//  Tessalate a FAN geometry between points A       B
//  using their normals from a center        \ . . /
//  and interpolating their UVs               \ p /
//                                             \./
function addFan(coord, nA, nC, nB, uvA, uvC, uvB, isCap, context) {
    var cross = nA[0] * nB[1] - nA[1] * nB[0];
    var dot = _vector2['default'].dot(nA, nB);

    var angle = Math.atan2(cross, dot);
    while (angle >= Math.PI) {
        angle -= 2 * Math.PI;
    }

    var numTriangles = trianglesPerArc(angle, context.half_width);
    if (numTriangles < 1) {
        return;
    }

    var pivotIndex = context.vertex_data.vertex_count;
    var vertex_elements = context.vertex_data.vertex_elements;

    addVertex(coord, nC, uvC, context);
    addVertex(coord, nA, uvA, context);

    var blade = nA;

    if (context.texcoord_index !== undefined) {
        var uvCurr;
        if (isCap) {
            uvCurr = [];
            var affine_uvCurr = _vector2['default'].sub(uvA, uvC);
        } else {
            uvCurr = _vector2['default'].set(uvA);
            var uv_delta = _vector2['default'].div(_vector2['default'].sub(uvB, uvA), numTriangles);
        }
    }

    var angle_step = angle / numTriangles;
    for (var i = 0; i < numTriangles; i++) {
        blade = _vector2['default'].rot(blade, angle_step);

        if (context.texcoord_index !== undefined) {
            if (isCap) {
                // UV textures go "through" the cap
                affine_uvCurr = _vector2['default'].rot(affine_uvCurr, angle_step);
                uvCurr[0] = affine_uvCurr[0] + uvC[0];
                uvCurr[1] = affine_uvCurr[1] * context.texcoord_width * context.v_scale + uvC[1]; // scale the v-coordinate
            } else {
                    // UV textures go "around" the join
                    uvCurr = _vector2['default'].add(uvCurr, uv_delta);
                }
        }

        addVertex(coord, blade, uvCurr, context);

        vertex_elements.push(pivotIndex + i + (cross > 0 ? 2 : 1));
        vertex_elements.push(pivotIndex);
        vertex_elements.push(pivotIndex + i + (cross > 0 ? 1 : 2));
    }
}

//  addBevel    A ----- B
//             / \     / \
//           /   /\   /\  \
//              /  \ /  \  \
//                / C \
function addBevel(coord, nA, nC, nB, uA, uC, uB, context) {
    var pivotIndex = context.vertex_data.vertex_count;

    addVertex(coord, nC, uC, context);
    addVertex(coord, nA, uA, context);
    addVertex(coord, nB, uB, context);

    var orientation = nA[0] * nB[1] - nA[1] * nB[0] > 0;

    var vertex_elements = context.vertex_data.vertex_elements;

    if (orientation) {
        vertex_elements.push(pivotIndex + 2);
        vertex_elements.push(pivotIndex + 0);
        vertex_elements.push(pivotIndex + 1);
    } else {
        vertex_elements.push(pivotIndex + 1);
        vertex_elements.push(pivotIndex + 0);
        vertex_elements.push(pivotIndex + 2);
    }
}

//  Function to add the vertex need for line caps,
//  because re-use the buffers needs to be at the end
function addCap(coord, v, normal, type, isBeginning, context) {
    var neg_normal = _vector2['default'].neg(normal);

    switch (type) {
        case CAP_TYPE.square:
            var tangent;
            if (isBeginning) {
                tangent = [normal[1], -normal[0]];

                addVertex(coord, _vector2['default'].add(normal, tangent), [1, v], context);
                addVertex(coord, _vector2['default'].add(neg_normal, tangent), [0, v], context);

                // Add length of square cap to texture coordinate
                v += 0.5 * context.texcoord_width * context.v_scale;

                addVertex(coord, normal, [1, v], context);
                addVertex(coord, neg_normal, [0, v], context);
            } else {
                tangent = [-normal[1], normal[0]];

                addVertex(coord, normal, [1, v], context);
                addVertex(coord, neg_normal, [0, v], context);

                // Add length of square cap to texture coordinate
                v += 0.5 * context.texcoord_width * context.v_scale;

                addVertex(coord, _vector2['default'].add(normal, tangent), [1, v], context);
                addVertex(coord, _vector2['default'].add(neg_normal, tangent), [0, v], context);
            }

            indexPairs(1, context);
            break;
        case CAP_TYPE.round:
            var nA, nB, uvA, uvB, uvC;
            if (isBeginning) {
                nA = normal;
                nB = neg_normal;

                if (context.texcoord_index !== undefined) {
                    v += 0.5 * context.texcoord_width * context.v_scale;
                    uvA = [1, v];
                    uvB = [0, v];
                    uvC = [0.5, v];
                }
            } else {
                nA = neg_normal;
                nB = normal;

                if (context.texcoord_index !== undefined) {
                    uvA = [0, v];
                    uvB = [1, v];
                    uvC = [0.5, v];
                }
            }

            addFan(coord, nA, zero_vec2, nB, uvA, uvC, uvB, true, context);

            break;
        case CAP_TYPE.butt:
            return;
    }
}

// Calculate number of triangles for a fan given an angle and line width
function trianglesPerArc(angle, width) {
    if (angle < 0) {
        angle = -angle;
    }

    var numTriangles = width > 2 * DEFAULT.MIN_FAN_WIDTH ? _Math$log2(width / DEFAULT.MIN_FAN_WIDTH) : 1;
    return Math.ceil(angle / Math.PI * numTriangles);
}

// Cyclically permute closed line starting at an index
function permuteLine(line, startIndex) {
    var newLine = [];
    for (var i = 0; i < line.length; i++) {
        var index = (i + startIndex) % line.length;
        // skip the first (repeated) index
        if (index !== 0) {
            newLine.push(line[index]);
        }
    }
    newLine.push(newLine[0]);
    return newLine;
}

},{"../geo":201,"../vector":251,"./common":197,"babel-runtime/core-js/math/log2":5,"babel-runtime/helpers/interop-require-default":23}],201:[function(_dereq_,module,exports){
// Miscellaneous geo functions

'use strict';

var _slicedToArray = _dereq_('babel-runtime/helpers/sliced-to-array')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
var Geo;
exports['default'] = Geo = {};

// Projection constants
Geo.default_source_max_zoom = 18;
Geo.default_view_max_zoom = 20;
Geo.tile_size = 256;
Geo.half_circumference_meters = 20037508.342789244;
Geo.circumference_meters = Geo.half_circumference_meters * 2;
Geo.min_zoom_meters_per_pixel = Geo.circumference_meters / Geo.tile_size; // min zoom draws world as 2 tiles wide

var meters_per_pixel = [];
Geo.metersPerPixel = function (z) {
    meters_per_pixel[z] = meters_per_pixel[z] || Geo.min_zoom_meters_per_pixel / Math.pow(2, z);
    return meters_per_pixel[z];
};

var meters_per_tile = [];
Geo.metersPerTile = function (z) {
    meters_per_tile[z] = meters_per_tile[z] || Geo.circumference_meters / Math.pow(2, z);
    return meters_per_tile[z];
};

// Conversion functions based on an defined tile scale
Geo.tile_scale = 4096; // coordinates are locally scaled to the range [0, tile_scale]
Geo.units_per_pixel = Geo.tile_scale / Geo.tile_size;
Geo.height_scale = 16; // provides sub-meter precision for height values (16ths of a meters)

var units_per_meter = [];
Geo.unitsPerMeter = function (z) {
    units_per_meter[z] = units_per_meter[z] || Geo.tile_scale / (Geo.tile_size * Geo.metersPerPixel(z));
    return units_per_meter[z];
};

// Convert tile location to mercator meters - multiply by pixels per tile, then by meters per pixel, adjust for map origin
Geo.metersForTile = function (tile) {
    return {
        x: tile.x * Geo.circumference_meters / Math.pow(2, tile.z) - Geo.half_circumference_meters,
        y: -(tile.y * Geo.circumference_meters / Math.pow(2, tile.z) - Geo.half_circumference_meters)
    };
};

/**
   Given a point in mercator meters and a zoom level, return the tile X/Y/Z that the point lies in
*/
Geo.tileForMeters = function (_ref, zoom) {
    var _ref2 = _slicedToArray(_ref, 2);

    var x = _ref2[0];
    var y = _ref2[1];

    return {
        x: Math.floor((x + Geo.half_circumference_meters) / (Geo.circumference_meters / Math.pow(2, zoom))),
        y: Math.floor((-y + Geo.half_circumference_meters) / (Geo.circumference_meters / Math.pow(2, zoom))),
        z: zoom
    };
};

// Wrap a tile to positive #s for zoom
// Optionally specify the axes to wrap
Geo.wrapTile = function (_ref3) {
    var x = _ref3.x;
    var y = _ref3.y;
    var z = _ref3.z;
    var mask = arguments.length <= 1 || arguments[1] === undefined ? { x: true, y: false } : arguments[1];

    var m = (1 << z) - 1;
    if (mask.x) {
        x = x & m;
    }
    if (mask.y) {
        y = y & m;
    }
    return { x: x, y: y, z: z };
};

/**
   Convert mercator meters to lat-lng
*/
Geo.metersToLatLng = function (_ref4) {
    var _ref42 = _slicedToArray(_ref4, 2);

    var x = _ref42[0];
    var y = _ref42[1];

    x /= Geo.half_circumference_meters;
    y /= Geo.half_circumference_meters;

    y = (2 * Math.atan(Math.exp(y * Math.PI)) - Math.PI / 2) / Math.PI;

    x *= 180;
    y *= 180;

    return [x, y];
};

/**
  Convert lat-lng to mercator meters
*/
Geo.latLngToMeters = function (_ref5) {
    var _ref52 = _slicedToArray(_ref5, 2);

    var x = _ref52[0];
    var y = _ref52[1];

    // Latitude
    y = Math.log(Math.tan(y * Math.PI / 360 + Math.PI / 4)) / Math.PI;
    y *= Geo.half_circumference_meters;

    // Longitude
    x *= Geo.half_circumference_meters / 180;

    return [x, y];
};

Geo.wrapLng = function (x) {
    if (x > 180 || x < -180) {
        x = ((x + 180) % 360 + 360) % 360 - 180;
    }
    return x;
};

// Run an in-place transform function on each cooordinate in a GeoJSON geometry
Geo.transformGeometry = function (geometry, transform) {
    if (geometry == null) {
        return; // skip if missing geometry (valid GeoJSON)
    }

    if (geometry.type === 'Point') {
        transform(geometry.coordinates);
    } else if (geometry.type === 'LineString' || geometry.type === 'MultiPoint') {
        geometry.coordinates.forEach(transform);
    } else if (geometry.type === 'Polygon' || geometry.type === 'MultiLineString') {
        geometry.coordinates.forEach(function (coordinates) {
            return coordinates.forEach(transform);
        });
    } else if (geometry.type === 'MultiPolygon') {
        geometry.coordinates.forEach(function (polygon) {
            polygon.forEach(function (coordinates) {
                return coordinates.forEach(transform);
            });
        });
    }
    // TODO: support GeometryCollection
};

Geo.boxIntersect = function (b1, b2) {
    return !(b2.sw.x > b1.ne.x || b2.ne.x < b1.sw.x || b2.sw.y > b1.ne.y || b2.ne.y < b1.sw.y);
};

// Finds the axis-aligned bounding box for a polygon
Geo.findBoundingBox = function (polygon) {
    var min_x = Infinity,
        max_x = -Infinity,
        min_y = Infinity,
        max_y = -Infinity;

    // Only need to examine outer ring (polygon[0])
    var num_coords = polygon[0].length;
    for (var c = 0; c < num_coords; c++) {
        var coord = polygon[0][c];

        if (coord[0] < min_x) {
            min_x = coord[0];
        }
        if (coord[1] < min_y) {
            min_y = coord[1];
        }
        if (coord[0] > max_x) {
            max_x = coord[0];
        }
        if (coord[1] > max_y) {
            max_y = coord[1];
        }
    }

    return [min_x, min_y, max_x, max_y];
};

// Convert geometry type to one of: 'point', 'line', 'polygon'
Geo.geometryType = function (type) {
    if (type === 'Polygon' || type === 'MultiPolygon') {
        return 'polygon';
    } else if (type === 'LineString' || type === 'MultiLineString') {
        return 'line';
    }
    if (type === 'Point' || type === 'MultiPoint') {
        return 'point';
    }
};

Geo.centroid = function (polygon) {
    // Adapted from https://github.com/Leaflet/Leaflet/blob/c10f405a112142b19785967ce0e142132a6095ad/src/layer/vector/Polygon.js#L57
    var x = 0,
        y = 0,
        area = 0;
    var ring = polygon[0]; // only use first ring for now
    var len = ring.length;

    for (var i = 0, j = len - 1; i < len; j = i, i++) {
        var p0 = ring[i];
        var p1 = ring[j];
        var f = p0[1] * p1[0] - p1[1] * p0[0];

        x += (p0[0] + p1[0]) * f;
        y += (p0[1] + p1[1]) * f;
        area += f * 3;
    }

    return [x / area, y / area];
};

Geo.multiCentroid = function (polygons) {
    var n = polygons.length;
    var centroid = [0, 0];

    for (var p = 0; p < polygons.length; p++) {
        var c = Geo.centroid(polygons[p]);
        centroid[0] += c[0];
        centroid[1] += c[1];
    }

    centroid[0] /= n;
    centroid[1] /= n;

    return centroid;
};

Geo.signedPolygonRingAreaSum = function (ring) {
    var area = 0;
    var n = ring.length;

    for (var i = 0; i < n - 1; i++) {
        var p0 = ring[i];
        var p1 = ring[i + 1];

        area += p0[0] * p1[1] - p1[0] * p0[1];
    }

    area += ring[n - 1][0] * ring[0][1] - ring[0][0] * ring[n - 1][1];
    return area;
};

Geo.polygonRingArea = function (ring) {
    return Math.abs(Geo.signedPolygonRingAreaSum(ring)) / 2;
};

// TODO: subtract inner rings
Geo.polygonArea = function (polygon) {
    return Geo.polygonRingArea(polygon[0]);
};

Geo.multiPolygonArea = function (polygons) {
    var area = 0;

    for (var p = 0; p < polygons.length; p++) {
        area += Geo.polygonArea(polygons[p]);
    }

    return area;
};

Geo.ringWinding = function (ring) {
    var area = Geo.signedPolygonRingAreaSum(ring);
    if (area > 0) {
        return 'CW';
    } else if (area < 0) {
        return 'CCW';
    }
    // return undefined on zero area polygon
};

// Enforce winding order on outer/inner rings
// winding: 'CW' or 'CCW'
Geo.enforceWinding = function (geom, winding) {
    var polys = undefined;
    if (geom.type === 'Polygon') {
        polys = [geom.coordinates];
    } else if (geom.type === 'MultiPolygon') {
        polys = geom.coordinates;
    } else {
        return geom;
    }

    for (var p = 0; p < polys.length; p++) {
        var poly = polys[p];

        // If first ring winding doesn't match, reverse all rings
        // NOTE: assumes ring winding orders already alternate as expected
        if (Geo.ringWinding(poly[0]) !== winding) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _getIterator(poly), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var ring = _step.value;

                    ring.reverse();
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }
    return geom;
};
module.exports = exports['default'];

},{"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/sliced-to-array":24}],202:[function(_dereq_,module,exports){
// WebGL constants - need to import these separately to make them available in the web worker

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var gl;
exports["default"] = gl = {};

/* DataType */
gl.BYTE = 0x1400;
gl.UNSIGNED_BYTE = 0x1401;
gl.SHORT = 0x1402;
gl.UNSIGNED_SHORT = 0x1403;
gl.INT = 0x1404;
gl.UNSIGNED_INT = 0x1405;
gl.FLOAT = 0x1406;
module.exports = exports["default"];

},{}],203:[function(_dereq_,module,exports){
// WebGL extension wrapper
// Stores extensions by name and GL context

"use strict";

var _Map = _dereq_("babel-runtime/core-js/map")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = getExtension;
var extensions = new _Map(); // map of extensions by GL context

function getExtension(gl, name) {
    var exts = extensions.get(gl);
    if (!exts) {
        extensions.set(gl, new _Map());
        exts = extensions.get(gl);
    }

    if (!exts.get(name)) {
        exts.set(name, gl.getExtension(name));
    }
    return exts.get(name);
}

module.exports = exports["default"];

},{"babel-runtime/core-js/map":4}],204:[function(_dereq_,module,exports){
'use strict';

var _toConsumableArray = _dereq_('babel-runtime/helpers/to-consumable-array')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
var GLSL = {};
exports['default'] = GLSL;

/**
    Parse uniforms from a JS object, infers types and returns an array of objects with the
    necessary information to set uniform values on a GL program. Each object in the returned
    array has the form:
    { type, method, name, value }

    type: the GL uniform type, such as 'vec3', 'float', etc.
    method: the GL uniform setter method to use, such as '1f', '3fv', etc.
    name: the fully qualified name of the GL uniform location, e.g. 'array[0].field', etc.
    value: the value to be passed to the GL uniform setter for that type, e.g. [1, 2, 3] for a vec3

    Textures have special behavior: uniforms with string values are treated as textures, and
    the string is used as a unique texture 'key' to be interpreted by the caller (which is responsible
    for actually setting the uniforms). For example, this could be used as a key into a dictionary of
    known texture names, or it could simply be used as a URL to dynamically load the texture from.
*/
GLSL.parseUniforms = function (uniforms) {
    var parsed = [];

    for (var name in uniforms) {
        var key = name; // save the original name
        var uniform = uniforms[name];
        var u;

        // Single float
        if (typeof uniform === 'number') {
            parsed.push({
                type: 'float',
                method: '1f',
                name: name,
                value: uniform,
                key: key,
                uniforms: uniforms
            });
        }
        // Array: vector, array of floats, array of textures
        else if (Array.isArray(uniform)) {
                // Numeric values
                if (typeof uniform[0] === 'number') {
                    // float vectors (vec2, vec3, vec4)
                    if (uniform.length >= 2 && uniform.length <= 4) {
                        parsed.push({
                            type: 'vec' + uniform.length,
                            method: uniform.length + 'fv',
                            name: name,
                            value: uniform,
                            key: key,
                            uniforms: uniforms
                        });
                    }
                    // float array
                    else if (uniform.length > 4) {
                            parsed.push({
                                type: 'float[]',
                                method: '1fv',
                                name: name + '[0]',
                                value: uniform,
                                key: key,
                                uniforms: uniforms
                            });
                        }
                    // TODO: assume matrix for (typeof == Float32Array && length == 16)?
                }
                // Array of textures
                else if (typeof uniform[0] === 'string') {
                        for (u = 0; u < uniform.length; u++) {
                            parsed.push({
                                type: 'sampler2D',
                                method: '1i',
                                name: name + '[' + u + ']',
                                value: uniform[u],
                                key: u,
                                uniforms: uniform
                            });
                        }
                    }
                    // Array of arrays - but only arrays of vectors are allowed in this case
                    else if (Array.isArray(uniform[0]) && typeof uniform[0][0] === 'number') {
                            // float vectors (vec2, vec3, vec4)
                            if (uniform[0].length >= 2 && uniform[0].length <= 4) {
                                // Set each vector in the array
                                for (u = 0; u < uniform.length; u++) {
                                    parsed.push({
                                        type: 'vec' + uniform[0].length,
                                        method: uniform[u].length + 'fv',
                                        name: name + '[' + u + ']',
                                        value: uniform[u],
                                        key: u,
                                        uniforms: uniform
                                    });
                                }
                            }
                        }
                // TODO: else warning
            }
            // Boolean
            else if (typeof uniform === 'boolean') {
                    parsed.push({
                        type: 'bool',
                        method: '1i',
                        name: name,
                        value: uniform,
                        key: key,
                        uniforms: uniforms
                    });
                }
                // Texture
                else if (typeof uniform === 'string') {
                        parsed.push({
                            type: 'sampler2D',
                            method: '1i',
                            name: name,
                            value: uniform,
                            key: key,
                            uniforms: uniforms
                        });
                    }
    }

    return parsed;
};

/**
    Generate a GLSL variable definition from a JS object
*/
GLSL.defineVariable = function (name, value) {
    var type, array;

    // Single float
    if (typeof value === 'number') {
        type = 'float';
    }
    // Multiple floats - vector or array
    else if (Array.isArray(value)) {
            // Numeric values
            if (typeof value[0] === 'number') {
                // float vectors (vec2, vec3, vec4)
                if (value.length >= 2 && value.length <= 4) {
                    type = 'vec' + value.length;
                }
                // float array
                else {
                        //if (value.length > 4) {
                        type = 'float';
                        array = value.length;
                    }
                // TODO: assume matrix for (typeof == Float32Array && length == 16)?
            }
            // Array of textures
            else if (typeof value[0] === 'string') {
                    type = 'sampler2D';
                    array = value.length;
                }
        }
        // Boolean
        else if (typeof value === 'boolean') {
                type = 'bool';
            }
            // Texture
            else if (typeof value === 'string') {
                    type = 'sampler2D';
                }

    // Construct variable definition
    var variable = '';
    variable += type + ' ' + name;
    if (array) {
        variable += '[' + array + ']';
    }
    variable += ';\n';

    return variable;
};

/**
    Generate a GLSL uniform definition from a JS object
*/
GLSL.defineUniform = function (name, value) {
    return 'uniform ' + GLSL.defineVariable(name, value);
};

/**
    Check for a uniform definition of 'name' in the provided GLSL source
    Simple regex check for 'uniform' keyword and var name, does not attempt to parse/extract GLSL
    NOTE: assumes comments have been stripped from source
*/
GLSL.isUniformDefined = function (name, source) {
    // Match, in order:
    // - the keyword 'uniform'
    // - at least one character that is anything except a semicolon, ;
    // - optionally, anything enclosed in curly braces, { ... } (an inline structure definition can go here)
    // - optionally, any # of characters that is not a semicolon, ;
    // - the name of the uniform

    var re = new RegExp('uniform[^;]+(?:{[\\s\\S]*})?[^;]*\\b' + name + '\\b', 'g');
    if (source.match(re)) {
        return true;
    }
    return false;
};

/**
    Check that a symbol is referenced in the GLSL source
    NOTE: assumes comments have been stripped from source
*/
GLSL.isSymbolReferenced = function (name, source) {
    var re = new RegExp('\\b' + name + '\\b', 'g');
    if (source.search(re) >= 0) {
        return true;
    }
    return false;
};

/**
    Expand a single value or 2-element array into a 3-element array, with the last ( z )
    coordinate defaulting to 1 (with option to specify). Also runs parseFloat to try to maintain
    data integrity. Returns null if input couldn't be parsed.
*/
GLSL.expandVec3 = function (v) {
    var z = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

    var x = undefined;
    if (Array.isArray(v) && v.length === 2) {
        x = [].concat(_toConsumableArray(v), [z]).map(parseFloat);
    } else {
        x = [v, v, v].map(parseFloat);
    }

    if (x && x.every(function (n) {
        return typeof n === 'number' && !isNaN(n);
    })) {
        return x;
    }
};

/**
    Expand a single value or 3-element array into a 4-element array, with the last (e.g. w or a)
    coordinate defaulting to 1 (with option to specify). Also runs parseFloat to try to maintain
    data integrity. Returns null if input couldn't be parsed.
*/
GLSL.expandVec4 = function (v) {
    var w = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

    var x = undefined;
    if (Array.isArray(v) && v.length === 3) {
        x = [].concat(_toConsumableArray(v), [w]).map(parseFloat);
    } else {
        x = [v, v, v, w].map(parseFloat);
    }

    if (x && x.every(function (n) {
        return typeof n === 'number' && !isNaN(n);
    })) {
        return x;
    }
};
module.exports = exports['default'];

},{"babel-runtime/helpers/to-consumable-array":25}],205:[function(_dereq_,module,exports){
// GL program wrapper to cache uniform locations/values, do compile-time pre-processing
// (injecting #defines and #pragma blocks into shaders), etc.

'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _toConsumableArray = _dereq_('babel-runtime/helpers/to-consumable-array')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsLog = _dereq_('../utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _glsl = _dereq_('./glsl');

var _glsl2 = _interopRequireDefault(_glsl);

var _texture = _dereq_('./texture');

var _texture2 = _interopRequireDefault(_texture);

var _extensions = _dereq_('./extensions');

var _extensions2 = _interopRequireDefault(_extensions);

var _stripComments = _dereq_('strip-comments');

var _stripComments2 = _interopRequireDefault(_stripComments);

var _glShaderErrors = _dereq_('gl-shader-errors');

var _glShaderErrors2 = _interopRequireDefault(_glShaderErrors);

// Regex patterns
var re_pragma = /^\s*#pragma.*$/gm; // for removing unused pragmas after shader block injection
var re_continue_line = /\\\s*\n/mg; // for removing backslash line continuations

var ShaderProgram = (function () {
    function ShaderProgram(gl, vertex_source, fragment_source, options) {
        _classCallCheck(this, ShaderProgram);

        options = options || {};

        this.gl = gl;
        this.program = null;
        this.compiled = false;
        this.compiling = false;
        this.error = null;

        // key/values inserted as #defines into shaders at compile-time
        this.defines = _Object$assign({}, options.defines || {});

        // key/values for blocks that can be injected into shaders at compile-time
        this.blocks = _Object$assign({}, options.blocks || {});
        this.block_scopes = _Object$assign({}, options.block_scopes || {});

        // list of extensions to activate
        this.extensions = options.extensions || [];

        // JS-object uniforms that are expected by this program
        // If they are not found in the existing shader source, their types will be inferred and definitions
        // for each will be injected.
        this.dependent_uniforms = options.uniforms;

        this.uniforms = {}; // program locations of uniforms, lazily added as each uniform is set
        this.attribs = {}; // program locations of vertex attributes, lazily added as each attribute is accessed

        this.vertex_source = vertex_source;
        this.fragment_source = fragment_source;

        this.id = ShaderProgram.id++;
        ShaderProgram.programs[this.id] = this;
        this.name = options.name; // can provide a program name (useful for debugging)
    }

    // Static methods and state

    _createClass(ShaderProgram, [{
        key: 'destroy',
        value: function destroy() {
            this.gl.useProgram(null);
            this.gl.deleteProgram(this.program);
            this.program = null;
            this.uniforms = {};
            this.attribs = {};
            delete ShaderProgram.programs[this.id];
            this.compiled = false;
        }

        // Use program wrapper with simple state cache
    }, {
        key: 'use',
        value: function use() {
            if (!this.compiled) {
                return;
            }

            if (ShaderProgram.current !== this) {
                this.gl.useProgram(this.program);
            }
            ShaderProgram.current = this;
        }
    }, {
        key: 'compile',
        value: function compile() {
            if (this.compiling) {
                throw new Error('ShaderProgram.compile(): skipping for ' + this.id + ' (' + this.name + ') because already compiling');
            }
            this.compiling = true;
            this.compiled = false;
            this.error = null;

            // Copy sources from pre-modified template
            this.computed_vertex_source = this.vertex_source;
            this.computed_fragment_source = this.fragment_source;

            // Check for extension availability
            var extensions = this.checkExtensions();

            // Make list of defines to be injected later
            var defines = this.buildDefineList();

            // Inject user-defined blocks (arbitrary code points matching named #pragmas)
            // Replace according to this pattern:
            // #pragma tangram: [key]
            // e.g. #pragma tangram: global

            // Gather all block code snippets
            var blocks = this.buildShaderBlockList();
            var regexp;

            for (var key in blocks) {
                var block = blocks[key];
                if (!block || Array.isArray(block) && block.length === 0) {
                    continue;
                }

                // First find code replace points in shaders
                regexp = new RegExp('^\\s*#pragma\\s+tangram:\\s+' + key + '\\s*$', 'm');
                var inject_vertex = this.computed_vertex_source.match(regexp);
                var inject_fragment = this.computed_fragment_source.match(regexp);

                // Avoid network request if nothing to replace
                if (inject_vertex == null && inject_fragment == null) {
                    continue;
                }

                // Combine all blocks into one string
                var source = '';
                block.forEach(function (val) {
                    // Mark start and end of each block with metadata (which can be extracted from
                    // final source for error handling, debugging, etc.)
                    var mark = val.scope + ', ' + val.key + ', ' + val.num;
                    source += '\n// tangram-block-start: ' + mark + '\n';
                    source += val.source;
                    source += '\n// tangram-block-end: ' + mark + '\n';
                });

                // Inject
                if (inject_vertex != null) {
                    this.computed_vertex_source = this.computed_vertex_source.replace(regexp, source);
                }
                if (inject_fragment != null) {
                    this.computed_fragment_source = this.computed_fragment_source.replace(regexp, source);
                }

                // Add a #define for this injection point
                defines['TANGRAM_BLOCK_' + key.replace(/[\s-]+/g, '_').toUpperCase()] = true;
            }

            // Clean-up any #pragmas that weren't replaced (to prevent compiler warnings)
            this.computed_vertex_source = this.computed_vertex_source.replace(re_pragma, '');
            this.computed_fragment_source = this.computed_fragment_source.replace(re_pragma, '');

            // Detect uniform definitions, inject any missing ones
            this.ensureUniforms(this.dependent_uniforms);

            // Build & inject extensions & defines
            // This is done *after* code injection so that we can add defines for which code points were injected
            var info = this.name ? this.name + ' / id ' + this.id : 'id ' + this.id;
            var header = '// Program: ' + info + '\n';
            var precision = '';
            var high = this.gl.getShaderPrecisionFormat(this.gl.FRAGMENT_SHADER, this.gl.HIGH_FLOAT);
            if (high && high.precision > 0) {
                precision = 'precision highp float;\n';
            } else {
                precision = 'precision mediump float;\n';
            }

            defines['TANGRAM_VERTEX_SHADER'] = true;
            defines['TANGRAM_FRAGMENT_SHADER'] = false;
            this.computed_vertex_source = header + precision + ShaderProgram.buildDefineString(defines) + this.computed_vertex_source;

            // Precision qualifier only valid in fragment shader
            // NB: '#extension' statements added to fragment shader only, as IE11 throws error when they appear in
            // vertex shader (even when guarded by #ifdef), and no WebGL extensions require '#extension' in vertex shaders
            defines['TANGRAM_VERTEX_SHADER'] = false;
            defines['TANGRAM_FRAGMENT_SHADER'] = true;
            this.computed_fragment_source = ShaderProgram.buildExtensionString(extensions) + header + precision + ShaderProgram.buildDefineString(defines) + this.computed_fragment_source;

            // Replace multi-line backslashes
            this.computed_vertex_source = this.computed_vertex_source.replace(re_continue_line, '');
            this.computed_fragment_source = this.computed_fragment_source.replace(re_continue_line, '');

            // Compile & set uniforms to cached values
            try {
                this.program = ShaderProgram.updateProgram(this.gl, this.program, this.computed_vertex_source, this.computed_fragment_source);
                this.compiled = true;
                this.compiling = false;
            } catch (error) {
                this.program = null;
                this.compiled = false;
                this.compiling = false;
                this.error = error;

                // shader error info
                if (error.type === 'vertex' || error.type === 'fragment') {
                    this.shader_errors = error.errors;
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = _getIterator(this.shader_errors), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var e = _step.value;

                            e.type = error.type;
                            e.block = this.block(error.type, e.line);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator['return']) {
                                _iterator['return']();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }

                throw new Error('ShaderProgram.compile(): program ' + this.id + ' (' + this.name + ') error:', error);
            }

            this.use();
            this.refreshUniforms();
            this.refreshAttributes();
        }

        // Make list of defines (global, then program-specific)
    }, {
        key: 'buildDefineList',
        value: function buildDefineList() {
            var d,
                defines = {};
            for (d in ShaderProgram.defines) {
                defines[d] = ShaderProgram.defines[d];
            }
            for (d in this.defines) {
                defines[d] = this.defines[d];
            }
            return defines;
        }

        // Make list of shader blocks (global, then program-specific)
    }, {
        key: 'buildShaderBlockList',
        value: function buildShaderBlockList() {
            var key = undefined,
                blocks = {};

            // Global blocks
            for (key in ShaderProgram.blocks) {
                blocks[key] = [];

                if (Array.isArray(ShaderProgram.blocks[key])) {
                    var _blocks$key;

                    (_blocks$key = blocks[key]).push.apply(_blocks$key, _toConsumableArray(ShaderProgram.blocks[key].map(function (source, num) {
                        return { key: key, source: source, num: num, scope: 'ShaderProgram' };
                    })));
                } else {
                    blocks[key] = [{ key: key, source: ShaderProgram.blocks[key], num: 0, scope: 'ShaderProgram' }];
                }
            }

            // Program-specific blocks
            for (key in this.blocks) {
                blocks[key] = blocks[key] || [];

                if (Array.isArray(this.blocks[key])) {
                    var scopes = this.block_scopes && this.block_scopes[key] || [];
                    var cur_scope = null,
                        num = 0;

                    for (var b = 0; b < this.blocks[key].length; b++) {
                        // Count blocks relative to current scope
                        if (scopes[b] !== cur_scope) {
                            cur_scope = scopes[b];
                            num = 0;
                        }

                        blocks[key].push({
                            key: key,
                            source: this.blocks[key][b],
                            num: num,
                            scope: cur_scope || this.name
                        });

                        num++;
                    }
                } else {
                    // TODO: address discrepancy in array vs. single-value blocks
                    // styles assume array when tracking block scopes
                    blocks[key].push({ key: key, source: this.blocks[key], num: 0, scope: this.name });
                }
            }
            return blocks;
        }

        // Detect uniform definitions, inject any missing ones
    }, {
        key: 'ensureUniforms',
        value: function ensureUniforms(uniforms) {
            if (!uniforms) {
                return;
            }

            var vs = (0, _stripComments2['default'])(this.computed_vertex_source);
            var fs = (0, _stripComments2['default'])(this.computed_fragment_source);
            var inject,
                vs_injections = [],
                fs_injections = [];

            // Check for missing uniform definitions
            for (var name in uniforms) {
                inject = null;

                // Check vertex shader
                if (!_glsl2['default'].isUniformDefined(name, vs)) {
                    if (!inject) {
                        inject = _glsl2['default'].defineUniform(name, uniforms[name]);
                    }
                    (0, _utilsLog2['default'])('trace', 'Program ' + this.name + ': ' + name + ' not defined in vertex shader, injecting: \'' + inject + '\'');
                    vs_injections.push(inject);
                }
                // Check fragment shader
                if (!_glsl2['default'].isUniformDefined(name, fs)) {
                    if (!inject) {
                        inject = _glsl2['default'].defineUniform(name, uniforms[name]);
                    }
                    (0, _utilsLog2['default'])('trace', 'Program ' + this.name + ': ' + name + ' not defined in fragment shader, injecting: \'' + inject + '\'');
                    fs_injections.push(inject);
                }
            }

            // Inject missing uniforms
            // NOTE: these are injected at the very top of the shaders, even before any #defines or #pragmas are added
            // this could cause some issues with certain #pragmas, or other functions that might expect #defines
            if (vs_injections.length > 0) {
                this.computed_vertex_source = vs_injections.join('\n') + this.computed_vertex_source;
            }

            if (fs_injections.length > 0) {
                this.computed_fragment_source = fs_injections.join('\n') + this.computed_fragment_source;
            }
        }

        // Set uniforms from a JS object, with inferred types
    }, {
        key: 'setUniforms',
        value: function setUniforms(uniforms) {
            var reset_texture_unit = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

            if (!this.compiled) {
                return;
            }

            // TODO: only update uniforms when changed

            // Texture units must be tracked and incremented each time a texture sampler uniform is set.
            // By default, the texture unit is reset to 0 each time setUniforms is called, but they can
            // also be preserved, for example in cases where multiple calls to setUniforms are expected
            // (e.g. program-specific uniforms followed by mesh-specific ones).
            if (reset_texture_unit) {
                this.texture_unit = 0;
            }

            // Parse uniform types and values from the JS object
            var parsed = _glsl2['default'].parseUniforms(uniforms);

            // Set each uniform
            for (var u = 0; u < parsed.length; u++) {
                var uniform = parsed[u];
                if (uniform.type === 'sampler2D') {
                    // For textures, we need to track texture units, so we have a special setter
                    this.setTextureUniform(uniform.name, uniform.value);
                } else {
                    this.uniform(uniform.method, uniform.name, uniform.value);
                }
            }
        }

        // Cache some or all uniform values so they can be restored
    }, {
        key: 'saveUniforms',
        value: function saveUniforms(subset) {
            var uniforms = subset || this.uniforms;
            for (var u in uniforms) {
                var uniform = this.uniforms[u];
                if (uniform) {
                    uniform.saved_value = uniform.value;
                }
            }
            this.saved_texture_unit = this.texture_unit || 0;
        }

        // Restore some or all uniforms to saved values
    }, {
        key: 'restoreUniforms',
        value: function restoreUniforms(subset) {
            var uniforms = subset || this.uniforms;
            for (var u in uniforms) {
                var uniform = this.uniforms[u];
                if (uniform && uniform.saved_value) {
                    uniform.value = uniform.saved_value;
                    this.updateUniform(uniform);
                }
            }
            this.texture_unit = this.saved_texture_unit || 0;
        }

        // Set a texture uniform, finds texture by name or creates a new one
    }, {
        key: 'setTextureUniform',
        value: function setTextureUniform(uniform_name, texture_name) {
            var texture = _texture2['default'].textures[texture_name];
            if (texture == null) {
                (0, _utilsLog2['default'])('warn', 'Cannot find texture \'' + texture_name + '\'');
                return;
            }

            texture.bind(this.texture_unit);
            this.uniform('1i', uniform_name, this.texture_unit);
            this.texture_unit++; // TODO: track max texture units and log/throw errors
        }

        // ex: program.uniform('3fv', 'position', [x, y, z]);
        // TODO: only update uniforms when changed
    }, {
        key: 'uniform',
        value: function uniform(method, name, value) {
            // 'value' is a method-appropriate arguments list
            if (!this.compiled) {
                return;
            }

            this.uniforms[name] = this.uniforms[name] || {};
            var uniform = this.uniforms[name];
            uniform.name = name;
            if (uniform.location === undefined) {
                uniform.location = this.gl.getUniformLocation(this.program, name);
            }
            uniform.method = method;
            uniform.value = value;
            this.updateUniform(uniform);
        }

        // Set a single uniform
    }, {
        key: 'updateUniform',
        value: function updateUniform(uniform) {
            if (!this.compiled) {
                return;
            }

            if (!uniform || uniform.location == null) {
                return;
            }

            this.use();
            this.commitUniform(uniform);
        }

        // Commits the uniform to the GPU
    }, {
        key: 'commitUniform',
        value: function commitUniform(uniform) {
            var location = uniform.location;
            var value = uniform.value;

            switch (uniform.method) {
                case '1i':
                    this.gl.uniform1i(location, value);
                    break;
                case '1f':
                    this.gl.uniform1f(location, value);
                    break;
                case '2f':
                    this.gl.uniform2f(location, value[0], value[1]);
                    break;
                case '3f':
                    this.gl.uniform3f(location, value[0], value[1], value[2]);
                    break;
                case '4f':
                    this.gl.uniform4f(location, value[0], value[1], value[2], value[3]);
                    break;
                case '1iv':
                    this.gl.uniform1iv(location, value);
                    break;
                case '3iv':
                    this.gl.uniform3iv(location, value);
                    break;
                case '1fv':
                    this.gl.uniform1fv(location, value);
                    break;
                case '2fv':
                    this.gl.uniform2fv(location, value);
                    break;
                case '3fv':
                    this.gl.uniform3fv(location, value);
                    break;
                case '4fv':
                    this.gl.uniform4fv(location, value);
                    break;
                case 'Matrix3fv':
                    this.gl.uniformMatrix3fv(location, false, value);
                    break;
                case 'Matrix4fv':
                    this.gl.uniformMatrix4fv(location, false, value);
                    break;
            }
        }

        // Refresh uniform locations and set to last cached values
    }, {
        key: 'refreshUniforms',
        value: function refreshUniforms() {
            if (!this.compiled) {
                return;
            }

            for (var u in this.uniforms) {
                var uniform = this.uniforms[u];
                uniform.location = this.gl.getUniformLocation(this.program, u);
                this.updateUniform(uniform);
            }
        }
    }, {
        key: 'refreshAttributes',
        value: function refreshAttributes() {
            // var len = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_ATTRIBUTES);
            // for (var i=0; i < len; i++) {
            //     var a = this.gl.getActiveAttrib(this.program, i);
            // }
            this.attribs = {};
        }

        // Get the location of a vertex attribute
    }, {
        key: 'attribute',
        value: function attribute(name) {
            if (!this.compiled) {
                return;
            }

            var attrib = this.attribs[name] = this.attribs[name] || {};
            if (attrib.location != null) {
                return attrib;
            }

            attrib.name = name;
            attrib.location = this.gl.getAttribLocation(this.program, name);

            // var info = this.gl.getActiveAttrib(this.program, attrib.location);
            // attrib.type = info.type;
            // attrib.size = info.size;

            return attrib;
        }

        // Get shader source as string
    }, {
        key: 'source',
        value: function source(type) {
            if (type === 'vertex') {
                return this.computed_vertex_source;
            } else if (type === 'fragment') {
                return this.computed_fragment_source;
            }
        }

        // Get shader source as array of line strings
    }, {
        key: 'lines',
        value: function lines(type) {
            var source = this.source(type);
            if (source) {
                return source.split('\n');
            }
            return [];
        }

        // Get a specific line from shader source
    }, {
        key: 'line',
        value: function line(type, num) {
            var source = this.lines(type);
            if (source) {
                return source[num];
            }
        }

        // Get info on which shader block (if any) a particular line number in a shader is in
        // Returns an object with the following info if a block is found: { name, line, source }
        //  scope: where the shader block originated, either a style name, or global such as ShaderProgram
        //  name: shader block name (e.g. 'color', 'position', 'global')
        //  num: the block number *within* local scope (e.g. if a style has multiple 'color' blocks)
        //  line: line number *within* the shader block (not the whole shader program), useful for error highlighting
        //  source: the code for the line
        // NOTE: this does a bruteforce loop over the shader source and looks for shader block start/end markers
        // We could track line ranges for shader blocks as they are inserted, but as this code is only used for
        // error handling on compilation failure, it was simpler to keep it separate than to burden the core
        // compilation path.
    }, {
        key: 'block',
        value: function block(type, num) {
            var lines = this.lines(type);
            var block = undefined;
            for (var i = 0; i < num && i < lines.length; i++) {
                var line = lines[i];
                var match = line.match(/\/\/ tangram-block-start: ([A-Za-z0-9_-]+), ([A-Za-z0-9_-]+), (\d+)/);
                if (match && match.length > 1) {
                    // mark current block
                    block = {
                        scope: match[1],
                        name: match[2],
                        num: match[3]
                    };
                } else {
                    match = line.match(/\/\/ tangram-block-end: ([A-Za-z0-9_-]+), ([A-Za-z0-9_-]+), (\d+)/);
                    if (match && match.length > 1) {
                        block = null; // clear current block
                    }
                }

                // update line # and content
                if (block) {
                    // init to -1 so that line 0 is first actual line of block code, after comment marker
                    block.line = block.line == null ? -1 : block.line + 1;
                    block.source = line;
                }
            }
            return block;
        }

        // Returns list of available extensions from those requested
        // Sets internal #defines indicating availability of each requested extension
    }, {
        key: 'checkExtensions',
        value: function checkExtensions() {
            var exts = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = _getIterator(this.extensions), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _name = _step2.value;

                    var ext = (0, _extensions2['default'])(this.gl, _name);
                    var def = 'TANGRAM_EXTENSION_' + _name;

                    this.defines[def] = ext != null;

                    if (ext) {
                        exts.push(_name);
                    } else {
                        (0, _utilsLog2['default'])('debug', 'Could not enable extension \'' + _name + '\'');
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return exts;
        }
    }]);

    return ShaderProgram;
})();

exports['default'] = ShaderProgram;
ShaderProgram.id = 0; // assign each program a unique id
ShaderProgram.programs = {}; // programs, by id
ShaderProgram.current = null; // currently bound program

// Global config applied to all programs (duplicate properties for a specific program will take precedence)
ShaderProgram.defines = {};
ShaderProgram.blocks = {};

// Turn an object of key/value pairs into single string of #define statements
ShaderProgram.buildDefineString = function (defines) {
    var define_str = "";
    for (var d in defines) {
        if (defines[d] == null || defines[d] === false) {
            continue;
        } else if (typeof defines[d] === 'boolean' && defines[d] === true) {
            // booleans are simple defines with no value
            define_str += "#define " + d + "\n";
        } else if (typeof defines[d] === 'number' && Math.floor(defines[d]) === defines[d]) {
            // int to float conversion to satisfy GLSL floats
            define_str += "#define " + d + " " + defines[d].toFixed(1) + "\n";
        } else {
            // any other float or string value
            define_str += "#define " + d + " " + defines[d] + "\n";
        }
    }
    return define_str;
};

// Turn a list of extension names into single string of #extension statements
ShaderProgram.buildExtensionString = function (extensions) {
    extensions = extensions || [];
    var str = "";
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = _getIterator(extensions), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var ext = _step3.value;

            str += '#ifdef GL_' + ext + '\n#extension GL_' + ext + ' : enable\n#endif\n';
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                _iterator3['return']();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    return str;
};

ShaderProgram.addBlock = function (key) {
    var _ShaderProgram$blocks$key;

    ShaderProgram.blocks[key] = ShaderProgram.blocks[key] || [];

    for (var _len = arguments.length, blocks = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        blocks[_key - 1] = arguments[_key];
    }

    (_ShaderProgram$blocks$key = ShaderProgram.blocks[key]).push.apply(_ShaderProgram$blocks$key, blocks);
};

// Remove all global shader blocks for a given key
ShaderProgram.removeBlock = function (key) {
    ShaderProgram.blocks[key] = [];
};

ShaderProgram.replaceBlock = function (key) {
    ShaderProgram.removeBlock(key);

    for (var _len2 = arguments.length, blocks = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        blocks[_key2 - 1] = arguments[_key2];
    }

    ShaderProgram.addBlock.apply(ShaderProgram, [key].concat(blocks));
};

// Compile & link a WebGL program from provided vertex and fragment shader sources
// update a program if one is passed in. Create one if not. Alert and don't update anything if the shaders don't compile.
ShaderProgram.updateProgram = function (gl, program, vertex_shader_source, fragment_shader_source) {
    try {
        var vertex_shader = ShaderProgram.createShader(gl, vertex_shader_source, gl.VERTEX_SHADER);
        var fragment_shader = ShaderProgram.createShader(gl, fragment_shader_source, gl.FRAGMENT_SHADER);
    } catch (err) {
        (0, _utilsLog2['default'])('error', err.message);
        throw err;
    }

    gl.useProgram(null);
    if (program != null) {
        var old_shaders = gl.getAttachedShaders(program);
        for (var i = 0; i < old_shaders.length; i++) {
            gl.detachShader(program, old_shaders[i]);
        }
    } else {
        program = gl.createProgram();
    }

    if (vertex_shader == null || fragment_shader == null) {
        return program;
    }

    gl.attachShader(program, vertex_shader);
    gl.attachShader(program, fragment_shader);

    gl.deleteShader(vertex_shader);
    gl.deleteShader(fragment_shader);

    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        var message = new Error('WebGL program error:\n            VALIDATE_STATUS: ' + gl.getProgramParameter(program, gl.VALIDATE_STATUS) + '\n            ERROR: ' + gl.getError() + '\n            --- Vertex Shader ---\n            ' + vertex_shader_source + '\n            --- Fragment Shader ---\n            ' + fragment_shader_source);

        var error = { type: 'program', message: message };
        (0, _utilsLog2['default'])('error', error.message);
        throw error;
    }

    return program;
};

// Compile a vertex or fragment shader from provided source
ShaderProgram.createShader = function (gl, source, stype) {
    var shader = gl.createShader(stype);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        var type = stype === gl.VERTEX_SHADER ? 'vertex' : 'fragment';
        var message = gl.getShaderInfoLog(shader);
        var errors = (0, _glShaderErrors2['default'])(message);
        throw { type: type, message: message, errors: errors };
    }

    return shader;
};
module.exports = exports['default'];

},{"../utils/log":243,"./extensions":203,"./glsl":204,"./texture":206,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/assign":6,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/to-consumable-array":25,"gl-shader-errors":156,"strip-comments":190}],206:[function(_dereq_,module,exports){
// Texture management
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _Object$keys = _dereq_('babel-runtime/core-js/object/keys')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsLog = _dereq_('../utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _utilsUtils = _dereq_('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _utilsSubscribe = _dereq_('../utils/subscribe');

var _utilsSubscribe2 = _interopRequireDefault(_utilsSubscribe);

var _utilsWorker_broker = _dereq_('../utils/worker_broker');

var _utilsWorker_broker2 = _interopRequireDefault(_utilsWorker_broker);

// GL texture wrapper object for keeping track of a global set of textures, keyed by a unique user-defined name

var Texture = (function () {
    function Texture(gl, name) {
        var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        _classCallCheck(this, Texture);

        this.gl = gl;
        this.texture = gl.createTexture();
        if (this.texture) {
            this.valid = true;
        }
        this.bind();

        this.name = name;
        this.retain_count = 0;
        this.source = null;
        this.source_type = null;
        this.config_type = null;
        this.loading = null; // a Promise object to track the loading state of this texture
        this.loaded = false; // successfully loaded as expected
        this.filtering = options.filtering;
        this.sprites = options.sprites;
        this.texcoords = {}; // sprite UVs ([0, 1] range)
        this.sizes = {}; // sprite sizes (pixel size)

        // Default to a 1-pixel black texture so we can safely render while we wait for an image to load
        // See: http://stackoverflow.com/questions/19722247/webgl-wait-for-texture-to-load
        this.setData(1, 1, new Uint8Array([0, 0, 0, 255]), { filtering: 'nearest' });

        // Destroy previous texture if present
        if (Texture.textures[this.name]) {
            // Preserve previous retain count
            this.retain_count = Texture.textures[this.name].retain_count;
            Texture.textures[this.name].retain_count = 0; // allow to be freed
            Texture.textures[this.name].destroy();
        }

        // Cache texture instance and definition
        Texture.textures[this.name] = this;
        Texture.texture_configs[this.name] = _Object$assign({ name: name }, options);

        this.load(options);
        (0, _utilsLog2['default'])('trace', 'creating Texture ' + this.name);
    }

    // Static/class methods and state

    // Destroy a single texture instance

    _createClass(Texture, [{
        key: 'destroy',
        value: function destroy() {
            if (this.retain_count > 0) {
                (0, _utilsLog2['default'])('error', 'Texture \'' + this.name + '\': destroying texture with retain count of \'' + this.retain_count + '\'');
                return;
            }

            if (!this.valid) {
                return;
            }
            this.gl.deleteTexture(this.texture);
            this.texture = null;
            delete this.data;
            this.data = null;
            delete Texture.textures[this.name];
            this.valid = false;
            (0, _utilsLog2['default'])('trace', 'destroying Texture ' + this.name);
        }
    }, {
        key: 'retain',
        value: function retain() {
            this.retain_count++;
        }
    }, {
        key: 'release',
        value: function release() {
            if (this.retain_count <= 0) {
                (0, _utilsLog2['default'])('error', 'Texture \'' + this.name + '\': releasing texture with retain count of \'' + this.retain_count + '\'');
            }

            this.retain_count--;
            if (this.retain_count <= 0) {
                this.destroy();
            }
        }
    }, {
        key: 'bind',
        value: function bind() {
            var unit = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

            if (!this.valid) {
                return;
            }

            if (Texture.activeUnit !== unit) {
                this.gl.activeTexture(this.gl.TEXTURE0 + unit);
                Texture.activeUnit = unit;
                Texture.boundTexture = null; // texture must be re-bound when unit changes
            }

            if (Texture.boundTexture !== this.texture) {
                this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
                Texture.boundTexture = this.texture;
            }
        }
    }, {
        key: 'load',
        value: function load(options) {
            var _this = this;

            if (!options) {
                return this.loading || _Promise.resolve(this);
            }

            this.loading = null;
            if (typeof options.url === 'string') {
                this.config_type = 'url';
                this.setUrl(options.url, options);
            } else if (options.element) {
                this.config_type = 'element';
                this.setElement(options.element, options);
            } else if (options.data && options.width && options.height) {
                this.config_type = 'data';
                this.setData(options.width, options.height, options.data, options);
            }

            this.loading = this.loading && this.loading.then(function () {
                _this.calculateSprites();return _this;
            }) || _Promise.resolve(this);
            return this.loading;
        }

        // Sets texture from an url
    }, {
        key: 'setUrl',
        value: function setUrl(url) {
            var _this2 = this;

            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            if (!this.valid) {
                return;
            }

            if (Texture.base_url) {
                url = _utilsUtils2['default'].addBaseURL(url, Texture.base_url);
            }

            this.url = _utilsUtils2['default'].cacheBusterForUrl(url); // save URL reference (will be overwritten when element is loaded below)
            this.source = this.url;
            this.source_type = 'url';

            this.loading = new _Promise(function (resolve, reject) {
                var image = new Image();
                image.onload = function () {
                    try {
                        _this2.setElement(image, options);
                    } catch (e) {
                        _this2.loaded = false;
                        (0, _utilsLog2['default'])('warn', 'Texture \'' + _this2.name + '\': failed to load url: \'' + _this2.source + '\'', e, options);
                        Texture.trigger('warning', { message: 'Failed to load texture from ' + _this2.source, error: e, texture: options });
                    }

                    _this2.loaded = true;
                    resolve(_this2);
                };
                image.onerror = function (e) {
                    // Warn and resolve on error
                    _this2.loaded = false;
                    (0, _utilsLog2['default'])('warn', 'Texture \'' + _this2.name + '\': failed to load url: \'' + _this2.source + '\'', e, options);
                    Texture.trigger('warning', { message: 'Failed to load texture from ' + _this2.source, error: e, texture: options });
                    resolve(_this2);
                };

                // Safari has a bug loading data-URL images with CORS enabled, so it must be disabled in that case
                // https://bugs.webkit.org/show_bug.cgi?id=123978
                if (!(_utilsUtils2['default'].isSafari() && _this2.source.slice(0, 5) === 'data:')) {
                    image.crossOrigin = 'anonymous';
                }

                image.src = _this2.source;
            });
            return this.loading;
        }

        // Sets texture to a raw image buffer
    }, {
        key: 'setData',
        value: function setData(width, height, data) {
            var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

            this.width = width;
            this.height = height;

            this.source = data;
            this.source_type = 'data';

            // Convert regular array to typed array
            if (Array.isArray(this.source)) {
                this.source = new Uint8Array(this.source);
            }

            this.update(options);
            this.setFiltering(options);

            this.loaded = true;
            this.loading = _Promise.resolve(this);
            return this.loading;
        }

        // Sets the texture to track a element (canvas/image)
    }, {
        key: 'setElement',
        value: function setElement(element, options) {
            var el = element;

            // a string element is interpeted as a CSS selector
            if (typeof element === 'string') {
                element = document.querySelector(element);
            }

            if (element instanceof HTMLCanvasElement || element instanceof HTMLImageElement || element instanceof HTMLVideoElement) {
                this.source = element;
                this.source_type = 'element';

                this.update(options);
                this.setFiltering(options);
            } else {
                this.loaded = false;
                var msg = 'the \'element\' parameter (`element: ' + JSON.stringify(el) + '`) must be a CSS ';
                msg += 'selector string, or a <canvas>, <image> or <video> object';
                (0, _utilsLog2['default'])('warn', 'Texture \'' + this.name + '\': ' + msg, options);
                Texture.trigger('warning', { message: 'Failed to load texture because ' + msg, texture: options });
            }

            this.loaded = true;
            this.loading = _Promise.resolve(this);
            return this.loading;
        }

        // Uploads current image or buffer to the GPU (can be used to update animated textures on the fly)
    }, {
        key: 'update',
        value: function update() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            if (!this.valid) {
                return;
            }

            this.bind();
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, options.UNPACK_FLIP_Y_WEBGL === false ? false : true);
            this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.UNPACK_PREMULTIPLY_ALPHA_WEBGL || false);

            // Image or Canvas element
            if (this.source instanceof HTMLCanvasElement || this.source instanceof HTMLVideoElement || this.source instanceof HTMLImageElement && this.source.complete) {

                this.width = this.source.width;
                this.height = this.source.height;
                this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.source);
            }
            // Raw image buffer
            else if (this.source_type === 'data') {
                    this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.width, this.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, this.source);
                }

            Texture.trigger('update', this);
        }

        // Determines appropriate filtering mode
    }, {
        key: 'setFiltering',
        value: function setFiltering() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            if (!this.valid) {
                return;
            }

            options.filtering = options.filtering || 'linear';

            var gl = this.gl;
            this.bind();

            // For power-of-2 textures, the following presets are available:
            // mipmap: linear blend from nearest mip
            // linear: linear blend from original image (no mips)
            // nearest: nearest pixel from original image (no mips, 'blocky' look)
            if (_utilsUtils2['default'].isPowerOf2(this.width) && _utilsUtils2['default'].isPowerOf2(this.height)) {
                this.power_of_2 = true;
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, options.TEXTURE_WRAP_S || options.repeat && gl.REPEAT || gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, options.TEXTURE_WRAP_T || options.repeat && gl.REPEAT || gl.CLAMP_TO_EDGE);

                if (options.filtering === 'mipmap') {
                    this.filtering = 'mipmap';
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); // TODO: use trilinear filtering by defualt instead?
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                    gl.generateMipmap(gl.TEXTURE_2D);
                } else if (options.filtering === 'linear') {
                    this.filtering = 'linear';
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                } else if (options.filtering === 'nearest') {
                    this.filtering = 'nearest';
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                }
            } else {
                // WebGL has strict requirements on non-power-of-2 textures:
                // No mipmaps and must clamp to edge
                this.power_of_2 = false;
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

                if (options.filtering === 'nearest') {
                    this.filtering = 'nearest';
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                } else {
                    // default to linear for non-power-of-2 textures
                    this.filtering = 'linear';
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                }
            }

            Texture.trigger('update', this);
        }

        // Pre-calc sprite regions for a texture sprite in UV [0, 1] space
    }, {
        key: 'calculateSprites',
        value: function calculateSprites() {
            if (this.sprites) {
                for (var s in this.sprites) {
                    var sprite = this.sprites[s];

                    // Map [0, 0] to [1, 1] coords to the appropriate sprite sub-area of the texture
                    this.texcoords[s] = Texture.getTexcoordsForSprite([sprite[0], sprite[1]], [sprite[2], sprite[3]], [this.width, this.height]);

                    // Pixel size of sprite
                    this.sizes[s] = [sprite[2], sprite[3]];
                }
            }
        }
    }]);

    return Texture;
})();

exports['default'] = Texture;
Texture.create = function (gl, name, options) {
    return new Texture(gl, name, options);
};

Texture.retain = function (name) {
    if (Texture.textures[name]) {
        Texture.textures[name].retain();
    }
};

Texture.release = function (name) {
    if (Texture.textures[name]) {
        Texture.textures[name].release();
    }
};

// Destroy all texture instances for a given GL context
Texture.destroy = function (gl) {
    var textures = _Object$keys(Texture.textures);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = _getIterator(textures), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var t = _step.value;

            var texture = Texture.textures[t];
            if (texture.gl === gl) {
                texture.destroy();
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};

// Get sprite pixel size and UVs
Texture.getSpriteInfo = function (texname, sprite) {
    var texture = Texture.textures[texname];
    return texture && { size: texture.sizes[sprite], texcoords: texture.texcoords[sprite] };
};

// Re-scale UVs from [0, 1] range to a smaller area within the image
Texture.getTexcoordsForSprite = function (area_origin, area_size, tex_size) {
    var area_origin_y = tex_size[1] - area_origin[1] - area_size[1];

    return [area_origin[0] / tex_size[0], area_origin_y / tex_size[1], (area_size[0] + area_origin[0]) / tex_size[0], (area_size[1] + area_origin_y) / tex_size[1]];
};

// Create a set of textures keyed in an object
// Optionally load each if it has a URL specified
Texture.createFromObject = function (gl, textures) {
    var loading = [];
    if (textures) {
        for (var texname in textures) {
            var config = textures[texname];

            // If texture already exists and definition hasn't changed, no need to re-create
            // Note: to avoid flicker when other textures/scene items change
            if (!Texture.changed(texname, config)) {
                continue;
            }

            var texture = Texture.create(gl, texname, config);
            loading.push(texture.loading);
        }
    }
    return _Promise.all(loading);
};

// Create a 'default' texture (1x1 pixel) that can be used as a placeholder
// (for example to prevent GL from complaining about unbound textures)
Texture['default'] = '__default';
Texture.createDefault = function (gl) {
    return Texture.create(gl, Texture['default']);
};

// Indicate if a texture definition would be a change from the current cache
Texture.changed = function (name, config) {
    var texture = Texture.textures[name];
    if (texture) {
        // cached texture
        // canvas/image-based textures are considered dynamic and always refresh
        if (texture.config_type === 'element' || config.element != null) {
            return true;
        }

        // compare definitions
        if (JSON.stringify(Texture.texture_configs[name]) === JSON.stringify(_Object$assign({ name: name }, config))) {
            return false;
        }
    }
    return true;
};

// Get metadata for a texture by name
// Returns via promise, in case texture is still loading
// Can be called on main thread from worker, to sync texture info to worker
Texture.getInfo = function (name) {
    // Get info for all textures by default
    if (!name) {
        name = _Object$keys(Texture.textures);
    }

    // Get multiple textures
    if (Array.isArray(name)) {
        return _Promise.all(name.map(function (n) {
            return Texture.getInfo(n);
        }));
    }

    // Get single texture
    var tex = Texture.textures[name];
    if (tex) {
        // Wait for this texture to finish loading, or return immediately
        var loading = tex.loading || _Promise.resolve(tex);
        return loading.then(function () {
            // Return a subset of texture info
            // (compatible w/structured cloning, suitable for passing to a worker)
            return {
                name: tex.name,
                width: tex.width,
                height: tex.height,
                sprites: tex.sprites,
                texcoords: tex.texcoords,
                sizes: tex.sizes,
                filtering: tex.filtering,
                power_of_2: tex.power_of_2,
                valid: tex.valid
            };
        });
    } else {
        // No texture found
        return _Promise.resolve(null);
    }
};

// Sync texture info to worker
// Called from worker, gets info on one or more textures info from main thread via remote call, then stores it
// locally in worker. 'textures' can be an array of texture names to sync, or if null, all textures are synced.
Texture.syncTexturesToWorker = function (names) {
    return _utilsWorker_broker2['default'].postMessage('Texture.getInfo', names).then(function (textures) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = _getIterator(textures), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var tex = _step2.value;

                Texture.textures[tex.name] = tex;
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                    _iterator2['return']();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        return Texture.textures;
    });
};

// Report max texture size for a GL context
Texture.getMaxTextureSize = function (gl) {
    return gl.getParameter(gl.MAX_TEXTURE_SIZE);
};

// Global set of textures, by name
Texture.textures = {};
Texture.texture_configs = {};
Texture.boundTexture = null;
Texture.activeUnit = null;

Texture.base_url = null; // optional base URL to add to textures

_utilsWorker_broker2['default'].addTarget('Texture', Texture);
(0, _utilsSubscribe2['default'])(Texture);
module.exports = exports['default'];

},{"../utils/log":243,"../utils/subscribe":246,"../utils/utils":248,"../utils/worker_broker":250,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/keys":12,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/interop-require-default":23}],207:[function(_dereq_,module,exports){
// Creates a Vertex Array Object if the extension is available, or falls back on standard attribute calls

'use strict';

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsLog = _dereq_('../utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var VertexArrayObject;
exports['default'] = VertexArrayObject = {};

VertexArrayObject.disabled = false; // set to true to disable VAOs even if extension is available
VertexArrayObject.bound_vao = null; // currently bound VAO

VertexArrayObject.init = function (gl) {
    if (VertexArrayObject.disabled !== true) {
        VertexArrayObject.ext = gl.getExtension("OES_vertex_array_object");
    }

    if (VertexArrayObject.ext != null) {
        (0, _utilsLog2['default'])('info', 'Vertex Array Object extension available');
    } else if (VertexArrayObject.disabled !== true) {
        (0, _utilsLog2['default'])('warn', 'Vertex Array Object extension NOT available');
    } else {
        (0, _utilsLog2['default'])('warn', 'Vertex Array Object extension force disabled');
    }
};

VertexArrayObject.create = function (setup, teardown) {
    var vao = {};
    vao.setup = setup;
    vao.teardown = teardown;

    var ext = VertexArrayObject.ext;
    if (ext != null) {
        vao._vao = ext.createVertexArrayOES();
        ext.bindVertexArrayOES(vao._vao);
    }

    vao.setup(true);

    return vao;
};

VertexArrayObject.bind = function (vao) {
    var ext = VertexArrayObject.ext;
    if (vao != null) {
        if (ext != null && vao._vao != null) {
            ext.bindVertexArrayOES(vao._vao);
            VertexArrayObject.bound_vao = vao;
        } else {
            vao.setup(false);
        }
    } else {
        if (ext != null) {
            ext.bindVertexArrayOES(null);
        } else if (VertexArrayObject.bound_vao != null && typeof VertexArrayObject.bound_vao.teardown === 'function') {
            VertexArrayObject.bound_vao.teardown();
        }
        VertexArrayObject.bound_vao = null;
    }
};

VertexArrayObject.destroy = function (vao) {
    var ext = VertexArrayObject.ext;
    if (ext != null && vao != null && vao._vao != null) {
        ext.deleteVertexArrayOES(vao._vao);
        vao._vao = null;
    }
    // destroy is a no-op if VAO extension isn't available
};
module.exports = exports['default'];

},{"../utils/log":243,"babel-runtime/helpers/interop-require-default":23}],208:[function(_dereq_,module,exports){
// Manage rendering for primitives
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _Map = _dereq_('babel-runtime/core-js/map')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsLog = _dereq_('../utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _shader_program = _dereq_('./shader_program');

var _shader_program2 = _interopRequireDefault(_shader_program);

var _vao = _dereq_('./vao');

var _vao2 = _interopRequireDefault(_vao);

// A single mesh/VBO, described by a vertex layout, that can be drawn with one or more programs

var VBOMesh = (function () {
    function VBOMesh(gl, vertex_data, element_data, vertex_layout, options) {
        _classCallCheck(this, VBOMesh);

        options = options || {};

        this.gl = gl;
        this.vertex_data = vertex_data; // typed array
        this.element_data = element_data; // typed array
        this.vertex_layout = vertex_layout;
        this.vertex_buffer = this.gl.createBuffer();
        this.draw_mode = options.draw_mode || this.gl.TRIANGLES;
        this.data_usage = options.data_usage || this.gl.STATIC_DRAW;
        this.vertices_per_geometry = 3; // TODO: support lines, strip, fan, etc.
        this.uniforms = options.uniforms;
        this.retain = options.retain || false; // whether to retain mesh data in CPU after uploading to GPU

        this.vertex_count = this.vertex_data.byteLength / this.vertex_layout.stride;
        this.vaos = new _Map(); // map of VertexArrayObjects, keyed by program

        this.toggle_element_array = false;
        if (this.element_data) {
            this.toggle_element_array = true;
            this.element_count = this.element_data.length;
            this.geometry_count = this.element_count / this.vertices_per_geometry;
            this.element_type = this.element_data.constructor === Uint16Array ? this.gl.UNSIGNED_SHORT : this.gl.UNSIGNED_INT;
            this.element_buffer = this.gl.createBuffer();
            this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.element_buffer);
            this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this.element_data, this.data_usage);
        } else {
            this.geometry_count = this.vertex_count / this.vertices_per_geometry;
        }

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertex_buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.vertex_data, this.data_usage);

        if (!this.retain) {
            delete this.vertex_data;
            delete this.element_data;
        }
        this.valid = true;
    }

    // Render, by default with currently bound program, or otherwise with optionally provided one

    _createClass(VBOMesh, [{
        key: 'render',
        value: function render() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            if (!this.valid) {
                return false;
            }

            var program = options.program || _shader_program2['default'].current;
            program.use();

            if (this.uniforms) {
                program.saveUniforms(this.uniforms);
                program.setUniforms(this.uniforms, false); // don't reset texture unit
            }

            this.bind(program);

            if (this.toggle_element_array) {
                this.gl.drawElements(this.draw_mode, this.element_count, this.element_type, 0);
            } else {
                this.gl.drawArrays(this.draw_mode, 0, this.vertex_count);
            }

            _vao2['default'].bind(null);

            if (this.uniforms) {
                program.restoreUniforms(this.uniforms);
            }

            return true;
        }

        // Bind buffers and vertex attributes to prepare for rendering
    }, {
        key: 'bind',
        value: function bind(program) {
            var _this = this;

            // Bind VAO for this progam, or create one
            var vao = this.vaos.get(program);
            if (vao) {
                _vao2['default'].bind(vao);
            } else {
                this.vaos.set(program, _vao2['default'].create(function (force) {
                    _this.gl.bindBuffer(_this.gl.ARRAY_BUFFER, _this.vertex_buffer);
                    if (_this.toggle_element_array) {
                        _this.gl.bindBuffer(_this.gl.ELEMENT_ARRAY_BUFFER, _this.element_buffer);
                    }
                    _this.vertex_layout.enable(_this.gl, program, force);
                }));
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (!this.valid) {
                return false;
            }
            this.valid = false;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _getIterator(this.vaos.values()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var vao = _step.value;

                    _vao2['default'].destroy(vao);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            (0, _utilsLog2['default'])('trace', 'VBOMesh.destroy: delete buffer' + (this.vertex_data ? ' of size ' + this.vertex_data.byteLength : ''));

            this.gl.deleteBuffer(this.vertex_buffer);
            this.vertex_buffer = null;

            if (this.element_buffer) {
                this.gl.deleteBuffer(this.element_buffer);
                this.element_buffer = null;
            }

            delete this.vertex_data;
            delete this.element_data;

            return true;
        }
    }]);

    return VBOMesh;
})();

exports['default'] = VBOMesh;
module.exports = exports['default'];

},{"../utils/log":243,"./shader_program":205,"./vao":207,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/map":4,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/interop-require-default":23}],209:[function(_dereq_,module,exports){
'use strict';

var _defineProperty = _dereq_('babel-runtime/helpers/define-property')['default'];

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _toConsumableArray = _dereq_('babel-runtime/helpers/to-consumable-array')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _array_types;

var _constants = _dereq_('./constants');

var _constants2 = _interopRequireDefault(_constants);

// web workers don't have access to GL context, so import all GL constants

var _utilsLog = _dereq_('../utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _vertex_elements = _dereq_('./vertex_elements');

var _vertex_elements2 = _interopRequireDefault(_vertex_elements);

// Maps GL types to JS array types
var array_types = (_array_types = {}, _defineProperty(_array_types, _constants2['default'].FLOAT, Float32Array), _defineProperty(_array_types, _constants2['default'].BYTE, Int8Array), _defineProperty(_array_types, _constants2['default'].UNSIGNED_BYTE, Uint8Array), _defineProperty(_array_types, _constants2['default'].INT, Int32Array), _defineProperty(_array_types, _constants2['default'].UNSIGNED_INT, Uint32Array), _defineProperty(_array_types, _constants2['default'].SHORT, Int16Array), _defineProperty(_array_types, _constants2['default'].UNSIGNED_SHORT, Uint16Array), _array_types);

// An intermediary object that holds vertex data in typed arrays, according to a given vertex layout
// Used to construct a mesh/VBO for rendering

var VertexData = (function () {
    function VertexData(vertex_layout) {
        var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        var _ref$prealloc = _ref.prealloc;
        var prealloc = _ref$prealloc === undefined ? 500 : _ref$prealloc;

        _classCallCheck(this, VertexData);

        this.vertex_layout = vertex_layout;
        this.vertex_elements = new _vertex_elements2['default']();

        if (VertexData.array_pool.length > 0) {
            this.vertex_buffer = VertexData.array_pool.pop();
            this.byte_length = this.vertex_buffer.byteLength;
            this.size = Math.floor(this.byte_length / this.vertex_layout.stride);
            (0, _utilsLog2['default'])('trace', 'VertexData: reused buffer of bytes ' + this.byte_length + ', ' + this.size + ' vertices');
        } else {
            this.size = prealloc; // # of vertices to allocate
            this.byte_length = this.vertex_layout.stride * this.size;
            this.vertex_buffer = new Uint8Array(this.byte_length);
        }
        this.offset = 0; // byte offset into currently allocated buffer

        this.components = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = _getIterator(this.vertex_layout.components), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var component = _step.value;

                this.components.push([].concat(_toConsumableArray(component)));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        this.vertex_count = 0;
        this.realloc_count = 0;
        this.setBufferViews();
    }

    // (Re-)allocate typed views into the main buffer - only create the types we need for this layout

    _createClass(VertexData, [{
        key: 'setBufferViews',
        value: function setBufferViews() {
            this.views = {};
            this.views[_constants2['default'].UNSIGNED_BYTE] = this.vertex_buffer;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = _getIterator(this.vertex_layout.attribs), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var attrib = _step2.value;

                    // Need view for this type?
                    if (this.views[attrib.type] == null) {
                        var array_type = array_types[attrib.type];
                        this.views[attrib.type] = new array_type(this.vertex_buffer.buffer);
                    }
                }

                // Update component buffer pointers
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                        _iterator2['return']();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = _getIterator(this.components), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var component = _step3.value;

                    component[1] = this.views[component[0]];
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                        _iterator3['return']();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        }

        // Check allocated buffer size, expand/realloc buffer if needed
    }, {
        key: 'checkBufferSize',
        value: function checkBufferSize() {
            if (this.offset + this.vertex_layout.stride > this.byte_length) {
                this.size = Math.floor(this.size * 1.5);
                this.size -= this.size % 4;
                this.byte_length = this.vertex_layout.stride * this.size;
                var new_view = new Uint8Array(this.byte_length);
                new_view.set(this.vertex_buffer); // copy existing data to new buffer
                VertexData.array_pool.push(this.vertex_buffer); // save previous buffer for use by next tile
                this.vertex_buffer = new_view;
                this.setBufferViews();
                this.realloc_count++;
                // log('info', `VertexData: expanded vertex block to ${this.size} vertices`);
            }
        }

        // Add a vertex, copied from a plain JS array of elements matching the order of the vertex layout.
        // Note: uses pre-calculated info about each attribute, including pointer to appropriate typed array
        // view and offset into it. This was the fastest method profiled so far for filling a mixed-type
        // vertex layout (though still slower than the previous method that only supported Float32Array attributes).
    }, {
        key: 'addVertex',
        value: function addVertex(vertex) {
            this.checkBufferSize();
            var i = 0;

            var clen = this.components.length;
            for (var c = 0; c < clen; c++) {
                var component = this.components[c];
                component[1][(this.offset >> component[2]) + component[3]] = vertex[i++];
            }

            this.offset += this.vertex_layout.stride;
            this.vertex_count++;
        }

        // Finalize vertex buffer for use in constructing a mesh
    }, {
        key: 'end',
        value: function end() {
            // Clip the buffer to size used for this VBO
            this.vertex_buffer = this.vertex_buffer.subarray(0, this.offset);
            this.element_buffer = this.vertex_elements.end();

            (0, _utilsLog2['default'])('trace', 'VertexData: ' + this.size + ' vertices total, realloc count ' + this.realloc_count);

            return this;
        }
    }]);

    return VertexData;
})();

exports['default'] = VertexData;

VertexData.array_pool = []; // pool of currently available (previously used) buffers (uint8)
module.exports = exports['default'];

},{"../utils/log":243,"./constants":202,"./vertex_elements":210,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/define-property":20,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/to-consumable-array":25}],210:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsWorker_broker = _dereq_('../utils/worker_broker');

var _utilsWorker_broker2 = _interopRequireDefault(_utilsWorker_broker);

var MAX_VALUE = Math.pow(2, 16) - 1;
var Uint32_flag = false;

var VertexElements = (function () {
    function VertexElements() {
        _classCallCheck(this, VertexElements);

        this.array = [];
        this.has_overflown = false;
    }

    _createClass(VertexElements, [{
        key: 'push',
        value: function push(value) {
            // If values have overflown and no Uint32 option is available, do not push values
            if (this.has_overflown && !Uint32_flag) {
                return;
            }

            // Trigger overflow if value is greater than Uint16 max
            if (value > MAX_VALUE) {
                this.has_overflown = true;
                if (!Uint32_flag) {
                    return;
                }
            }

            this.array.push(value);
        }
    }, {
        key: 'end',
        value: function end() {
            if (this.array.length) {
                var buffer = createBuffer(this.array, this.has_overflown);
                this.array = [];
                this.has_overflown = false;
                return buffer;
            } else {
                return false;
            }
        }
    }]);

    return VertexElements;
})();

exports['default'] = VertexElements;

VertexElements.setUint32Flag = function (flag) {
    Uint32_flag = flag;
};

function createBuffer(array, overflown) {
    var typedArray = overflown && Uint32_flag ? Uint32Array : Uint16Array;
    return new typedArray(array);
}

_utilsWorker_broker2['default'].addTarget('VertexElements', VertexElements);
module.exports = exports['default'];

},{"../utils/worker_broker":250,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/interop-require-default":23}],211:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _constants = _dereq_('./constants');

var _constants2 = _interopRequireDefault(_constants);

// web workers don't have access to GL context, so import all GL constants

var _vertex_data = _dereq_('./vertex_data');

var _vertex_data2 = _interopRequireDefault(_vertex_data);

// Describes a vertex layout that can be used with many different GL programs.

var VertexLayout = (function () {
    // Attribs are an array, in layout order, of: name, size, type, normalized
    // ex: { name: 'position', size: 3, type: gl.FLOAT, normalized: false }

    function VertexLayout(attribs) {
        _classCallCheck(this, VertexLayout);

        this.attribs = attribs; // dictionary of attributes, specified as standard GL attrib options
        this.components = []; // list of type and offset info about each attribute component
        this.index = {}; // linear buffer index of each attribute component, e.g. this.index.position.x

        // Calc vertex stride
        this.stride = 0;

        var count = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = _getIterator(this.attribs), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var attrib = _step.value;

                attrib.offset = this.stride;
                attrib.byte_size = attrib.size;
                var shift = 0;

                switch (attrib.type) {
                    case _constants2['default'].FLOAT:
                    case _constants2['default'].INT:
                    case _constants2['default'].UNSIGNED_INT:
                        attrib.byte_size *= 4;
                        shift = 2;
                        break;
                    case _constants2['default'].SHORT:
                    case _constants2['default'].UNSIGNED_SHORT:
                        attrib.byte_size *= 2;
                        shift = 1;
                        break;
                }

                // Force 4-byte alignment on attributes
                this.stride += attrib.byte_size;
                if (this.stride & 3) {
                    // pad to multiple of 4 bytes
                    this.stride += 4 - (this.stride & 3);
                }

                // Add info to list of attribute components
                // Used to build the vertex data, provides pointers and offsets into each typed array view
                // Each component is an array of:
                // [GL attrib type, pointer to typed array view, bits to shift right to determine buffer offset, additional buffer offset for the component]
                var offset_typed = attrib.offset >> shift;
                if (attrib.size > 1) {
                    for (var a = 0; a < attrib.size; a++) {
                        this.components.push([attrib.type, null, shift, offset_typed++]);
                    }
                } else {
                    this.components.push([attrib.type, null, shift, offset_typed]);
                }

                // Provide an index into the vertex data buffer for each attribute component
                this.index[attrib.name] = count;
                count += attrib.size;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    // Track currently enabled attribs, by the program they are bound to
    // Static class property to reflect global GL state

    // Setup a vertex layout for a specific GL program
    // Assumes that the desired vertex buffer (VBO) is already bound
    // If a given program doesn't include all attributes, it can still use the vertex layout
    // to read those attribs that it does recognize, using the attrib offsets to skip others.

    _createClass(VertexLayout, [{
        key: 'enable',
        value: function enable(gl, program, force) {
            var attrib, location;

            // Enable all attributes for this layout
            for (var a = 0; a < this.attribs.length; a++) {
                attrib = this.attribs[a];
                location = program.attribute(attrib.name).location;

                if (location !== -1) {
                    if (!VertexLayout.enabled_attribs[location] || force) {
                        gl.enableVertexAttribArray(location);
                    }
                    gl.vertexAttribPointer(location, attrib.size, attrib.type, attrib.normalized, this.stride, attrib.offset);
                    VertexLayout.enabled_attribs[location] = program;
                }
            }

            // Disable any previously bound attributes that aren't for this layout
            for (location in VertexLayout.enabled_attribs) {
                this.disableUnusedAttribute(gl, location, program);
            }
        }

        // Disable an attribute if it was not enabled for the specified program
        // NOTE: this was moved out of the inner loop in enable() to assist w/VM optimization
    }, {
        key: 'disableUnusedAttribute',
        value: function disableUnusedAttribute(gl, location, program) {
            if (VertexLayout.enabled_attribs[location] !== program) {
                gl.disableVertexAttribArray(location);
                delete VertexLayout.enabled_attribs[location];
            }
        }
    }, {
        key: 'createVertexData',
        value: function createVertexData() {
            return new _vertex_data2['default'](this);
        }
    }]);

    return VertexLayout;
})();

exports['default'] = VertexLayout;
VertexLayout.enabled_attribs = {};
module.exports = exports['default'];

},{"./constants":202,"./vertex_data":209,"babel-runtime/core-js/get-iterator":2,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/interop-require-default":23}],212:[function(_dereq_,module,exports){
'use strict';

var _Set = _dereq_('babel-runtime/core-js/set')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _Object$keys = _dereq_('babel-runtime/core-js/object/keys')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _repeat_group = _dereq_('./repeat_group');

var _repeat_group2 = _interopRequireDefault(_repeat_group);

var _utilsLog = _dereq_('../utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var Collision;

exports['default'] = Collision = {

    tiles: {},
    links: {},
    link_id: 0,

    nextLinkId: function nextLinkId() {
        return this.link_id++;
    },

    startTile: function startTile(tile) {
        var state = this.tiles[tile] = {
            bboxes: { // current set of placed bounding boxes
                aabb: [],
                obb: []
            },
            objects: {}, // objects to collide, grouped by priority, then by style
            keep: {}, // objects that were kept after collision, grouped by style
            styles: new _Set() // styles contributing collision objects
        };

        // Promise resolved when all registered styles have added objects
        state.complete = new _Promise(function (resolve, reject) {
            state.resolve = resolve;
            state.reject = reject;
        });
    },

    resetTile: function resetTile(tile) {
        delete this.tiles[tile];
    },

    // Add a style to the pending set, collision will block on all styles submitting to collision set
    addStyle: function addStyle(style, tile) {
        this.tiles[tile].styles.add(style);
    },

    // Add collision objects for a style
    collide: function collide(objects, style, tile) {
        var state = this.tiles[tile];
        if (!state) {
            (0, _utilsLog2['default'])('trace', 'Collision.collide() called with null tile', tile, this.tiles, style, objects);
            return _Promise.reject(Error('Collision.collide() called with null tile', tile, this.tiles, style, objects));
        }

        // Group by priority and style
        var tile_objects = state.objects;
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var priority = obj.layout.priority;
            tile_objects[priority] = tile_objects[priority] || {};
            tile_objects[priority][style] = tile_objects[priority][style] || [];
            tile_objects[priority][style].push(obj);
        }

        // Remove from pending style set, if no more styles, do collision & finish tile
        state.styles['delete'](style);
        if (state.styles.size === 0) {
            this.endTile(tile);
        }

        // Wait for objects to be added from all styles
        return state.complete.then(function () {
            return state.keep[style] || [];
        });
    },

    // Test labels for collisions, higher to lower priority
    // When two collide, discard the lower-priority label
    endTile: function endTile(tile) {
        var state = this.tiles[tile];
        var bboxes = state.bboxes;
        var keep = state.keep;

        _repeat_group2['default'].clear(tile);

        // Process labels by priority, then by style
        var priorities = _Object$keys(state.objects).sort(function (a, b) {
            return a - b;
        });
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = _getIterator(priorities), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var priority = _step.value;

                var style_objects = state.objects[priority];
                if (!style_objects) {
                    // no labels at this priority, skip to next
                    continue;
                }

                // For each style
                for (var style in style_objects) {
                    var objects = style_objects[style];
                    keep[style] = keep[style] || [];

                    for (var i = 0; i < objects.length; i++) {
                        var _objects$i = objects[i];
                        var label = _objects$i.label;
                        var layout = _objects$i.layout;
                        var link = _objects$i.link;
                        // TODO: `label` should be generic

                        // Skip if linked label not visible
                        if (link && this.links[link] === false) {
                            // log('trace', 'discard label because linked parent is not visible', label);
                            continue;
                        }

                        // test the label for intersections with other labels in the tile
                        if (!layout.collide || !label.discard(bboxes)) {
                            // check for repeats
                            var check = _repeat_group2['default'].check(label, layout, tile);
                            if (check) {
                                // log('trace', `discard label '${label.text}', (one_per_group: ${check.one_per_group}), dist ${Math.sqrt(check.dist_sq)/layout.units_per_pixel} < ${Math.sqrt(check.repeat_dist_sq)/layout.units_per_pixel}`);
                                continue;
                            }
                            // register as placed for future repeat culling
                            _repeat_group2['default'].add(label, layout, tile);

                            label.add(bboxes); // add label to currently visible set
                            keep[style].push(objects[i]);

                            if (link) {
                                this.links[link] = true; // mark visibility for linked labels
                            }
                        } else if (layout.collide) {
                                // log('trace', `discard label '${label.text}' due to collision`);
                                if (link) {
                                    this.links[link] = false; // mark visibility for linked labels
                                }
                            }
                    }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        delete this.tiles[tile];
        state.resolve();
    }

};
module.exports = exports['default'];

},{"../utils/log":243,"./repeat_group":216,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/keys":12,"babel-runtime/core-js/promise":14,"babel-runtime/core-js/set":15,"babel-runtime/helpers/interop-require-default":23}],213:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _boxIntersect = _dereq_('box-intersect');

var _boxIntersect2 = _interopRequireDefault(_boxIntersect);

// https://github.com/mikolalysenko/box-intersect

var _utilsUtils = _dereq_('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _utilsObb = _dereq_('../utils/obb');

var _utilsObb2 = _interopRequireDefault(_utilsObb);

// import log from '../utils/log';

var Label = (function () {
    function Label(size) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        _classCallCheck(this, Label);

        this.size = size;
        this.options = options;
        this.position = null;
        this.aabb = null;
        this.obb = null;
    }

    // check for overlaps with other labels in the tile

    _createClass(Label, [{
        key: 'occluded',
        value: function occluded(bboxes) {
            var _this = this;

            var intersect = false;
            var aabbs = bboxes.aabb;
            var obbs = bboxes.obb;

            // Broad phase
            if (aabbs.length > 0) {
                (0, _boxIntersect2['default'])([this.aabb], aabbs, function (i, j) {
                    // log('trace', 'collision: broad phase collide', this.options.id, this, this.aabb, aabbs[j]);

                    // Skip narrow phase collision if no rotation
                    if (_this.obb.angle === 0 && obbs[j].angle === 0) {
                        // log('trace', 'collision: skip narrow phase collide because neither is rotated', this.options.id, this, this.obb, obbs[j]);
                        intersect = true;
                        return true;
                    }

                    // Narrow phase
                    if (_utilsObb2['default'].intersect(_this.obb, obbs[j])) {
                        // log('trace', 'collision: narrow phase collide', this.options.id, this, this.obb, obbs[j]);
                        intersect = true;
                        return true;
                    }
                });
            }
            return intersect;
        }

        // Add this label's bounding box to the provided set
    }, {
        key: 'add',
        value: function add(bboxes) {
            bboxes.aabb.push(this.aabb);
            bboxes.obb.push(this.obb);
        }

        // checks whether the label is within the tile boundaries
    }, {
        key: 'inTileBounds',
        value: function inTileBounds() {
            var min = [this.aabb[0], this.aabb[1]];
            var max = [this.aabb[2], this.aabb[3]];

            if (!_utilsUtils2['default'].pointInTile(min) || !_utilsUtils2['default'].pointInTile(max)) {
                return false;
            }

            return true;
        }

        // Whether the label should be discarded
        // Depends on whether label must fit in the tile bounds, and if so, can it be moved to fit there
    }, {
        key: 'discard',
        value: function discard(bboxes) {
            // Should the label be culled if it can't fit inside the tile bounds?
            if (this.options.cull_from_tile) {
                var in_tile = this.inTileBounds();

                // If it doesn't fit, should we try to move it into the tile bounds?
                if (!in_tile && this.options.move_into_tile) {
                    // Can we fit the label into the tile?
                    if (!this.moveIntoTile()) {
                        return true; // can't fit in tile, discard
                    }
                } else if (!in_tile) {
                        return true; // out of tile bounds, discard
                    }
            }

            // If the label hasn't been discarded yet, check to see if it's occluded by other labels
            return this.occluded(bboxes);
        }
    }]);

    return Label;
})();

exports['default'] = Label;

Label.epsilon = 0.9999; // tolerance around collision boxes, prevent perfectly adjacent objects from colliding
module.exports = exports['default'];

},{"../utils/obb":245,"../utils/utils":248,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/interop-require-default":23,"box-intersect":122}],214:[function(_dereq_,module,exports){
'use strict';

var _get = _dereq_('babel-runtime/helpers/get')['default'];

var _inherits = _dereq_('babel-runtime/helpers/inherits')['default'];

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _vector = _dereq_('../vector');

var _vector2 = _interopRequireDefault(_vector);

var _label = _dereq_('./label');

var _label2 = _interopRequireDefault(_label);

var _utilsObb = _dereq_('../utils/obb');

var _utilsObb2 = _interopRequireDefault(_utilsObb);

var LabelLine = (function (_Label) {
    _inherits(LabelLine, _Label);

    function LabelLine(size, lines, options) {
        _classCallCheck(this, LabelLine);

        _get(Object.getPrototypeOf(LabelLine.prototype), 'constructor', this).call(this, size, options);

        this.lines = lines;
        this.offset = [this.options.offset[0], this.options.offset[1]];

        // optionally limit the line segments that the label may be placed in, by specifying a segment index range
        // used as a coarse subdivide for placing multiple labels per line geometry
        this.segment_index = options.segment_start || 0;
        this.segment_max = options.segment_end || this.lines.length;
        this.update();
    }

    _createClass(LabelLine, [{
        key: 'update',
        value: function update() {
            var segment = this.currentSegment();
            this.angle = this.computeAngle();
            this.position = [(segment[0][0] + segment[1][0]) / 2, (segment[0][1] + segment[1][1]) / 2];
            this.updateBBoxes();
        }
    }, {
        key: 'moveNextSegment',
        value: function moveNextSegment() {
            if (this.segment_index + 1 >= this.segment_max - 1) {
                return false;
            }

            this.segment_index++;
            this.update();

            return true;
        }
    }, {
        key: 'computeAngle',
        value: function computeAngle() {
            var segment = this.currentSegment();
            var p0p1 = _vector2['default'].sub(segment[0], segment[1]);

            p0p1 = _vector2['default'].normalize(p0p1);

            var PI_2 = Math.PI / 2;
            var theta = Math.atan2(p0p1[0], p0p1[1]) + PI_2;

            if (theta > PI_2 || theta < -PI_2) {
                theta += Math.PI;
            }
            theta %= Math.PI * 2;

            return theta;
        }
    }, {
        key: 'fitToSegment',
        value: function fitToSegment() {
            var segment = this.currentSegment();
            var p0p1 = _vector2['default'].sub(segment[0], segment[1]);
            var length = _vector2['default'].length(p0p1);

            var label_length = this.size[0] * this.options.units_per_pixel;

            if (label_length > length) {
                // an exceed heurestic of 100% would let the label fit in any cases
                var exceed = (1 - length / label_length) * 100;
                return exceed < this.options.line_exceed;
            }

            return label_length <= length;
        }
    }, {
        key: 'currentSegment',
        value: function currentSegment() {
            var p1 = this.lines[this.segment_index];
            var p2 = this.lines[this.segment_index + 1];

            return [p1, p2];
        }
    }, {
        key: 'updateBBoxes',
        value: function updateBBoxes() {
            var upp = this.options.units_per_pixel;
            var width = (this.size[0] + this.options.buffer[0] * 2) * upp * _label2['default'].epsilon;
            var height = (this.size[1] + this.options.buffer[1] * 2) * upp * _label2['default'].epsilon;

            // apply offset, x positive, y pointing down
            var offset = _vector2['default'].rot(this.offset, this.angle);
            var p = [this.position[0] + offset[0] * upp, this.position[1] - offset[1] * upp];

            // the angle of the obb is negative since it's the tile system y axis is pointing down
            this.obb = new _utilsObb2['default'](p[0], p[1], -this.angle, width, height);
            this.aabb = this.obb.getExtent();
        }

        // Try to move the label into the tile bounds
        // Returns true if label was moved into tile, false if it couldn't be moved
    }, {
        key: 'moveIntoTile',
        value: function moveIntoTile() {
            var in_tile = false;
            var fits_to_segment = this.fitToSegment();

            // Try line segments until we find one that fits the label (and is inside the tile)
            while (!in_tile || !fits_to_segment) {
                if (!this.moveNextSegment()) {
                    break; // we can't move further in this line
                }

                in_tile = this.inTileBounds();
                fits_to_segment = this.fitToSegment();
            }

            return in_tile && fits_to_segment;
        }
    }, {
        key: 'discard',
        value: function discard(bboxes) {
            // First find a line segment that fits the label
            if (this.lines && !this.fitToSegment()) {
                while (!this.fitToSegment()) {
                    if (!this.moveNextSegment()) {
                        return true;
                    }
                }
            }

            // If label fits in line, run standard discard tests
            return _get(Object.getPrototypeOf(LabelLine.prototype), 'discard', this).call(this, bboxes);
        }
    }]);

    return LabelLine;
})(_label2['default']);

exports['default'] = LabelLine;
module.exports = exports['default'];

},{"../utils/obb":245,"../vector":251,"./label":213,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/get":21,"babel-runtime/helpers/inherits":22,"babel-runtime/helpers/interop-require-default":23}],215:[function(_dereq_,module,exports){
'use strict';

var _get = _dereq_('babel-runtime/helpers/get')['default'];

var _inherits = _dereq_('babel-runtime/helpers/inherits')['default'];

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _label = _dereq_('./label');

var _label2 = _interopRequireDefault(_label);

var _geo = _dereq_('../geo');

var _geo2 = _interopRequireDefault(_geo);

var _utilsObb = _dereq_('../utils/obb');

var _utilsObb2 = _interopRequireDefault(_utilsObb);

var _stylesPointsPoint_anchor = _dereq_('../styles/points/point_anchor');

var _stylesPointsPoint_anchor2 = _interopRequireDefault(_stylesPointsPoint_anchor);

var LabelPoint = (function (_Label) {
    _inherits(LabelPoint, _Label);

    function LabelPoint(position, size, options) {
        _classCallCheck(this, LabelPoint);

        _get(Object.getPrototypeOf(LabelPoint.prototype), 'constructor', this).call(this, size, options);
        this.position = [position[0], position[1]];
        this.offset = [this.options.offset[0], this.options.offset[1]];
        this.update();
    }

    _createClass(LabelPoint, [{
        key: 'update',
        value: function update() {
            this.offset = this.computeOffset();
            this.updateBBoxes();
        }
    }, {
        key: 'computeOffset',
        value: function computeOffset() {
            return _stylesPointsPoint_anchor2['default'].computeOffset(this.offset, this.size, this.options.anchor);
        }
    }, {
        key: 'updateBBoxes',
        value: function updateBBoxes() {
            var width = (this.size[0] + this.options.buffer[0] * 2) * this.options.units_per_pixel * _label2['default'].epsilon;
            var height = (this.size[1] + this.options.buffer[1] * 2) * this.options.units_per_pixel * _label2['default'].epsilon;

            var p = [this.position[0] + this.offset[0] * this.options.units_per_pixel, this.position[1] - this.offset[1] * this.options.units_per_pixel];

            this.obb = new _utilsObb2['default'](p[0], p[1], 0, width, height);
            this.aabb = this.obb.getExtent();
        }

        // Try to move the label into the tile bounds
        // Returns true if label was moved into tile, false if it couldn't be moved
    }, {
        key: 'moveIntoTile',
        value: function moveIntoTile() {
            var updated = false;

            if (this.aabb[0] < 0) {
                this.position[0] += -this.aabb[0];
                updated = true;
            }

            if (this.aabb[2] >= _geo2['default'].tile_scale) {
                this.position[0] -= this.aabb[2] - _geo2['default'].tile_scale + 1;
                updated = true;
            }

            if (this.aabb[3] > 0) {
                this.position[1] -= this.aabb[3];
                updated = true;
            }

            if (this.aabb[1] <= -_geo2['default'].tile_scale) {
                this.position[1] -= this.aabb[1] + _geo2['default'].tile_scale - 1;
                updated = true;
            }

            if (updated) {
                this.updateBBoxes();
            }

            return this.inTileBounds();
        }
    }]);

    return LabelPoint;
})(_label2['default']);

exports['default'] = LabelPoint;
module.exports = exports['default'];

},{"../geo":201,"../styles/points/point_anchor":229,"../utils/obb":245,"./label":213,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/get":21,"babel-runtime/helpers/inherits":22,"babel-runtime/helpers/interop-require-default":23}],216:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _geo = _dereq_('../geo');

var _geo2 = _interopRequireDefault(_geo);

var RepeatGroup = (function () {
    function RepeatGroup(key, repeat_dist, max_repeat_dist) {
        _classCallCheck(this, RepeatGroup);

        this.key = key;
        this.repeat_dist = repeat_dist;
        this.repeat_dist_sq = this.repeat_dist * this.repeat_dist;
        this.max_repeat_dist_sq = max_repeat_dist * max_repeat_dist;
        this.one_per_group = this.repeat_dist_sq >= this.max_repeat_dist_sq ? true : false;
        this.positions = [];
    }

    // Current set of repeat groups, grouped and keyed by tile

    // Check an object to see if it's a repeat in this group

    _createClass(RepeatGroup, [{
        key: 'check',
        value: function check(obj) {
            // If only one object allowed per group, shortcut distance logic
            if (this.one_per_group) {
                if (this.positions.length > 0) {
                    // reported distance maxes out at threshold in this case
                    // (not true dist value since we skipped calculating it)
                    return {
                        dist_sq: this.max_repeat_dist_sq,
                        repeat_dist_sq: this.repeat_dist_sq,
                        one_per_group: this.one_per_group
                    };
                }
                return; // no object for this group yet
            }

            // Check distance from new object to objects already in group
            var p1 = obj.position;
            for (var i = 0; i < this.positions.length; i++) {
                var p2 = this.positions[i];
                var dx = p1[0] - p2[0];
                var dy = p1[1] - p2[1];
                var dist_sq = dx * dx + dy * dy;

                // Found an existing object within allowed distance
                if (dist_sq < this.repeat_dist_sq) {
                    return {
                        dist_sq: dist_sq,
                        repeat_dist_sq: this.repeat_dist_sq
                    };
                }
            }
        }

        // Add object to this group
    }, {
        key: 'add',
        value: function add(obj) {
            // only store object's position, to save space / prevent unnecessary references
            if (obj && obj.position) {
                this.positions.push(obj.position);
            }
        }

        // Static methods are used to manage repeat groups, within and across tiles

        // Reset all groups for this tile
    }], [{
        key: 'clear',
        value: function clear(tile) {
            this.groups[tile] = {};
        }

        // Check an object to see if it's a repeat within its designated group
    }, {
        key: 'check',
        value: function check(obj, layout, tile) {
            if (layout.repeat_distance && this.groups[tile][layout.repeat_group]) {
                return this.groups[tile][layout.repeat_group].check(obj);
            }
        }

        // Add an object to its designated group
    }, {
        key: 'add',
        value: function add(obj, layout, tile) {
            if (layout.repeat_distance) {
                if (this.groups[tile][layout.repeat_group] == null) {
                    this.groups[tile][layout.repeat_group] = new RepeatGroup(layout.repeat_group, layout.repeat_distance, RepeatGroup.max_repeat_dist);
                }
                this.groups[tile][layout.repeat_group].add(obj);
            }
        }
    }]);

    return RepeatGroup;
})();

exports['default'] = RepeatGroup;
RepeatGroup.groups = {};

// Max repeat dist: for groups with a repeat dist beyond this threshold, only one label
// will be allowed per group, e.g. set to tile size for one-label-per-tile
RepeatGroup.max_repeat_dist = _geo2['default'].tile_scale;
module.exports = exports['default'];

},{"../geo":201,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/interop-require-default":23}],217:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _get = _dereq_('babel-runtime/helpers/get')['default'];

var _inherits = _dereq_('babel-runtime/helpers/inherits')['default'];

var _slicedToArray = _dereq_('babel-runtime/helpers/sliced-to-array')['default'];

var _Object$keys = _dereq_('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _glShader_program = _dereq_('./gl/shader_program');

var _glShader_program2 = _interopRequireDefault(_glShader_program);

var _glGlsl = _dereq_('./gl/glsl');

var _glGlsl2 = _interopRequireDefault(_glGlsl);

var _geo = _dereq_('./geo');

var _geo2 = _interopRequireDefault(_geo);

var _stylesStyle_parser = _dereq_('./styles/style_parser');



var shaderSrc_ambientLight = "/*\n\nExpected globals:\nlight_accumulator_*\n\n*/\n\nstruct AmbientLight {\n    vec4 ambient;\n};\n\nvoid calculateLight(in AmbientLight _light, in vec3 _eyeToPoint, in vec3 _normal) {\n    light_accumulator_ambient += _light.ambient;\n}\n";
var shaderSrc_directionalLight = "/*\n\nExpected globals:\nmaterial\nlight_accumulator_*\n\n*/\n\nstruct DirectionalLight {\n    vec4 ambient;\n    vec4 diffuse;\n    vec4 specular;\n    vec3 direction;\n};\n\nvoid calculateLight(in DirectionalLight _light, in vec3 _eyeToPoint, in vec3 _normal) {\n\n    light_accumulator_ambient += _light.ambient;\n\n    float nDotVP = clamp(dot(_normal, -normalize(_light.direction)), 0.0, 1.0);\n\n    #ifdef TANGRAM_MATERIAL_DIFFUSE\n        light_accumulator_diffuse += _light.diffuse * nDotVP;\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_SPECULAR\n        float pf = 0.0;\n        if (nDotVP > 0.0) {\n            vec3 reflectVector = reflect(normalize(_light.direction), _normal);\n            float eyeDotR = max(dot(normalize(_eyeToPoint), reflectVector), 0.0);\n            pf = pow(eyeDotR, material.shininess);\n        }\n        light_accumulator_specular += _light.specular * pf;\n    #endif\n}\n";
var shaderSrc_pointLight = "/*\n\nExpected globals:\nmaterial\nlight_accumulator_*\n\n*/\n\nstruct PointLight {\n    vec4 ambient;\n    vec4 diffuse;\n    vec4 specular;\n    vec4 position;\n\n#ifdef TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT\n    float attenuationExponent;\n#endif\n\n#ifdef TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS\n    float innerRadius;\n#endif\n\n#ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n    float outerRadius;\n#endif\n};\n\nvoid calculateLight(in PointLight _light, in vec3 _eyeToPoint, in vec3 _normal) {\n\n    float dist = length(_light.position.xyz - _eyeToPoint);\n\n    // Compute vector from surface to light position\n    vec3 VP = (_light.position.xyz - _eyeToPoint) / dist;\n\n    // Normalize the vector from surface to light position\n    float nDotVP = clamp(dot(VP, _normal), 0.0, 1.0);\n\n    // Attenuation defaults\n    float attenuation = 1.0;\n    #ifdef TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT\n        float Rin = 1.0;\n        float e = _light.attenuationExponent;\n\n        #ifdef TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS\n            Rin = _light.innerRadius;\n        #endif\n\n        #ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n            float Rdiff = _light.outerRadius-Rin;\n            float d = clamp(max(0.0,dist-Rin)/Rdiff, 0.0, 1.0);\n            attenuation = 1.0-(pow(d,e));\n        #else\n            // If no outer is provide behaves like:\n            // https://imdoingitwrong.wordpress.com/2011/01/31/light-attenuation/\n            float d = max(0.0,dist-Rin)/Rin+1.0;\n            attenuation = clamp(1.0/(pow(d,e)), 0.0, 1.0);\n        #endif\n    #else\n        float Rin = 0.0;\n\n        #ifdef TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS\n            Rin = _light.innerRadius;\n            #ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n                float Rdiff = _light.outerRadius-Rin;\n                float d = clamp(max(0.0,dist-Rin)/Rdiff, 0.0, 1.0);\n                attenuation = 1.0-d*d;\n            #else\n                // If no outer is provide behaves like:\n                // https://imdoingitwrong.wordpress.com/2011/01/31/light-attenuation/\n                float d = max(0.0,dist-Rin)/Rin+1.0;\n                attenuation = clamp(1.0/d, 0.0, 1.0);\n            #endif\n        #else\n            #ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n                float d = clamp(dist/_light.outerRadius, 0.0, 1.0);\n                attenuation = 1.0-d*d;\n            #else\n                attenuation = 1.0;\n            #endif\n        #endif\n    #endif\n\n    // Computer accumulators\n    light_accumulator_ambient += _light.ambient * attenuation;\n\n    #ifdef TANGRAM_MATERIAL_DIFFUSE\n        light_accumulator_diffuse += _light.diffuse * nDotVP * attenuation;\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_SPECULAR\n        float pf = 0.0; // power factor for shiny speculars\n        if (nDotVP > 0.0) {\n            vec3 reflectVector = reflect(-VP, _normal);\n            float eyeDotR = max(0.0, dot(-normalize(_eyeToPoint), reflectVector));\n            pf = pow(eyeDotR, material.shininess);\n        }\n\n        light_accumulator_specular += _light.specular * pf * attenuation;\n    #endif\n}\n";
var shaderSrc_spotLight = "/*\n\nExpected globals:\nmaterial\nlight_accumulator_*\n\n*/\n\nstruct SpotLight {\n    vec4 ambient;\n    vec4 diffuse;\n    vec4 specular;\n    vec4 position;\n\n#ifdef TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT\n    float attenuationExponent;\n#endif\n\n#ifdef TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS\n    float innerRadius;\n#endif\n\n#ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n    float outerRadius;\n#endif\n\n    vec3 direction;\n    float spotCosCutoff;\n    float spotExponent;\n};\n\nvoid calculateLight(in SpotLight _light, in vec3 _eyeToPoint, in vec3 _normal) {\n\n    float dist = length(_light.position.xyz - _eyeToPoint);\n\n    // Compute vector from surface to light position\n    vec3 VP = (_light.position.xyz - _eyeToPoint) / dist;\n\n    // normal . light direction\n    float nDotVP = clamp(dot(_normal, VP), 0.0, 1.0);\n\n    // Attenuation defaults\n    float attenuation = 1.0;\n    #ifdef TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT\n        float Rin = 1.0;\n        float e = _light.attenuationExponent;\n\n        #ifdef TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS\n            Rin = _light.innerRadius;\n        #endif\n\n        #ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n            float Rdiff = _light.outerRadius-Rin;\n            float d = clamp(max(0.0,dist-Rin)/Rdiff, 0.0, 1.0);\n            attenuation = 1.0-(pow(d,e));\n        #else\n            // If no outer is provide behaves like:\n            // https://imdoingitwrong.wordpress.com/2011/01/31/light-attenuation/\n            float d = max(0.0,dist-Rin)/Rin+1.0;\n            attenuation = clamp(1.0/(pow(d,e)), 0.0, 1.0);\n        #endif\n    #else\n        float Rin = 0.0;\n\n        #ifdef TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS\n            Rin = _light.innerRadius;\n            #ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n                float Rdiff = _light.outerRadius-Rin;\n                float d = clamp(max(0.0,dist-Rin)/Rdiff, 0.0, 1.0);\n                attenuation = 1.0-d*d;\n            #else\n                // If no outer is provide behaves like:\n                // https://imdoingitwrong.wordpress.com/2011/01/31/light-attenuation/\n                float d = max(0.0,dist-Rin)/Rin+1.0;\n                attenuation = clamp(1.0/d, 0.0, 1.0);\n            #endif\n        #else\n            #ifdef TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS\n                float d = clamp(dist/_light.outerRadius, 0.0, 1.0);\n                attenuation = 1.0-d*d;\n            #else\n                attenuation = 1.0;\n            #endif\n        #endif\n    #endif\n\n    // spotlight attenuation factor\n    float spotAttenuation = 0.0;\n\n    // See if point on surface is inside cone of illumination\n    float spotDot = clamp(dot(-VP, normalize(_light.direction)), 0.0, 1.0);\n\n    if (spotDot >= _light.spotCosCutoff) {\n        spotAttenuation = pow(spotDot, _light.spotExponent);\n    }\n\n    light_accumulator_ambient += _light.ambient * attenuation * spotAttenuation;\n\n    #ifdef TANGRAM_MATERIAL_DIFFUSE\n        light_accumulator_diffuse += _light.diffuse * nDotVP * attenuation * spotAttenuation;\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_SPECULAR\n        // Power factor for shiny speculars\n        float pf = 0.0;\n        if (nDotVP > 0.0) {\n            vec3 reflectVector = reflect(-VP, _normal);\n            float eyeDotR = max(dot(-normalize(_eyeToPoint), reflectVector), 0.0);\n            pf = pow(eyeDotR, material.shininess);\n        }\n        light_accumulator_specular += _light.specular * pf * attenuation * spotAttenuation;\n    #endif\n}\n";

// Abstract light

var Light = (function () {
    function Light(view, config) {
        _classCallCheck(this, Light);

        this.name = config.name;
        this.view = view;

        if (config.ambient == null || typeof config.ambient === 'number') {
            this.ambient = _glGlsl2['default'].expandVec4(config.ambient || 0);
        } else {
            this.ambient = _stylesStyle_parser.StyleParser.parseColor(config.ambient);
        }

        if (config.diffuse == null || typeof config.diffuse === 'number') {
            this.diffuse = _glGlsl2['default'].expandVec4(config.diffuse != null ? config.diffuse : 1);
        } else {
            this.diffuse = _stylesStyle_parser.StyleParser.parseColor(config.diffuse);
        }

        if (config.specular == null || typeof config.specular === 'number') {
            this.specular = _glGlsl2['default'].expandVec4(config.specular || 0);
        } else {
            this.specular = _stylesStyle_parser.StyleParser.parseColor(config.specular);
        }
    }

    // Create a light by type name, factory-style
    // 'config' must include 'name' and 'type', along with any other type-specific properties

    _createClass(Light, [{
        key: 'inject',

        // Common instance definition
        value: function inject() {
            var instance = '\n            uniform ' + this.struct_name + ' u_' + this.name + ';\n            ' + this.struct_name + ' ' + this.name + ';\n            ';
            var assign = '\n            ' + this.name + ' = u_' + this.name + ';\n\n        ';

            _glShader_program2['default'].addBlock(Light.block, instance);
            _glShader_program2['default'].addBlock('setup', assign);
        }

        // Update method called once per frame
    }, {
        key: 'update',
        value: function update() {}

        // Called once per frame per program (e.g. for main render pass, then for each additional
        // pass for feature selection, etc.)
    }, {
        key: 'setupProgram',
        value: function setupProgram(_program) {
            //  Three common light properties
            _program.uniform('4fv', 'u_' + this.name + '.ambient', this.ambient);
            _program.uniform('4fv', 'u_' + this.name + '.diffuse', this.diffuse);
            _program.uniform('4fv', 'u_' + this.name + '.specular', this.specular);
        }
    }], [{
        key: 'create',
        value: function create(view, config) {
            if (Light.types[config.type]) {
                return new Light.types[config.type](view, config);
            }
        }

        // Set light for a style: fragment lighting, vertex lighting, or none
    }, {
        key: 'setMode',
        value: function setMode(mode, style) {
            if (mode === true) {
                mode = 'fragment';
            }
            mode = Light.enabled && (mode != null ? mode : 'fragment'); // default to fragment lighting
            style.defines['TANGRAM_LIGHTING_FRAGMENT'] = mode === 'fragment';
            style.defines['TANGRAM_LIGHTING_VERTEX'] = mode === 'vertex';
        }

        // Inject all provided light definitions, and calculate cumulative light function
    }, {
        key: 'inject',
        value: function inject(lights) {
            // Clear previous injections
            _glShader_program2['default'].removeBlock(Light.block);

            // If lighting is globally disabled, nothing is injected (mostly for debugging or live editing)
            if (!Light.enabled) {
                return;
            }

            // Construct code to calculate each light instance
            var calculateLights = "";
            if (lights && _Object$keys(lights).length > 0) {
                // Collect uniques types of lights
                var types = {};
                for (var light_name in lights) {
                    types[lights[light_name].type] = true;
                }

                // Inject each type of light
                for (var type in types) {
                    Light.types[type].inject();
                }

                // Inject per-instance blocks and construct the list of functions to calculate each light
                for (var light_name in lights) {
                    // Define instance
                    lights[light_name].inject();

                    // Add the calculation function to the list
                    calculateLights += 'calculateLight(' + light_name + ', _eyeToPoint, _normal);\n';
                }
            } else {
                // If no light is defined, use 100% omnidirectional diffuse light
                calculateLights = '\n                #ifdef TANGRAM_MATERIAL_DIFFUSE\n                    light_accumulator_diffuse = vec4(1.);\n                #endif\n            ';
            }

            // Glue together the final lighting function that sums all the lights
            var calculateFunction = '\n            vec4 calculateLighting(in vec3 _eyeToPoint, in vec3 _normal, in vec4 _color) {\n\n                // Do initial material calculations over normal, emission, ambient, diffuse and specular values\n                calculateMaterial(_eyeToPoint,_normal);\n\n                // Un roll the loop of individual ligths to calculate\n                ' + calculateLights + '\n\n                //  Final light intensity calculation\n                vec4 color = vec4(0.0);\n\n                #ifdef TANGRAM_MATERIAL_EMISSION\n                    color = material.emission;\n                #endif\n\n                #ifdef TANGRAM_MATERIAL_AMBIENT\n                    color += light_accumulator_ambient * _color * material.ambient;\n                #else\n                    #ifdef TANGRAM_MATERIAL_DIFFUSE\n                        color += light_accumulator_ambient * _color * material.diffuse;\n                    #endif\n                #endif\n\n                #ifdef TANGRAM_MATERIAL_DIFFUSE\n                    color += light_accumulator_diffuse * _color * material.diffuse;\n                #endif\n\n                #ifdef TANGRAM_MATERIAL_SPECULAR\n                    color += light_accumulator_specular * material.specular;\n                #endif\n\n                // Clamp final color\n                color = clamp(color, 0.0, 1.0);\n\n                return color;\n            }';

            _glShader_program2['default'].addBlock(Light.block, calculateFunction);
        }
    }]);

    return Light;
})();

exports['default'] = Light;

Light.types = {}; // references to subclasses by short name
Light.block = 'lighting'; // shader block name
Light.enabled = true; // lighting can be globally enabled/disabled

// Light subclasses

var AmbientLight = (function (_Light) {
    _inherits(AmbientLight, _Light);

    function AmbientLight(view, config) {
        _classCallCheck(this, AmbientLight);

        _get(Object.getPrototypeOf(AmbientLight.prototype), 'constructor', this).call(this, view, config);
        this.type = 'ambient';
        this.struct_name = 'AmbientLight';
    }

    // Inject struct and calculate function

    _createClass(AmbientLight, [{
        key: 'setupProgram',
        value: function setupProgram(_program) {
            _program.uniform('4fv', 'u_' + this.name + '.ambient', this.ambient);
        }
    }], [{
        key: 'inject',
        value: function inject() {
            _glShader_program2['default'].addBlock(Light.block, shaderSrc_ambientLight);
        }
    }]);

    return AmbientLight;
})(Light);

Light.types['ambient'] = AmbientLight;

var DirectionalLight = (function (_Light2) {
    _inherits(DirectionalLight, _Light2);

    function DirectionalLight(view, config) {
        _classCallCheck(this, DirectionalLight);

        _get(Object.getPrototypeOf(DirectionalLight.prototype), 'constructor', this).call(this, view, config);
        this.type = 'directional';
        this.struct_name = 'DirectionalLight';

        this.direction = (config.direction || [0.2, 0.7, -0.5]).map(parseFloat); // [x, y, z]
    }

    // Inject struct and calculate function

    _createClass(DirectionalLight, [{
        key: 'setupProgram',
        value: function setupProgram(_program) {
            _get(Object.getPrototypeOf(DirectionalLight.prototype), 'setupProgram', this).call(this, _program);
            _program.uniform('3fv', 'u_' + this.name + '.direction', this.direction);
        }
    }], [{
        key: 'inject',
        value: function inject() {
            _glShader_program2['default'].addBlock(Light.block, shaderSrc_directionalLight);
        }
    }]);

    return DirectionalLight;
})(Light);

Light.types['directional'] = DirectionalLight;

var PointLight = (function (_Light3) {
    _inherits(PointLight, _Light3);

    function PointLight(view, config) {
        _classCallCheck(this, PointLight);

        _get(Object.getPrototypeOf(PointLight.prototype), 'constructor', this).call(this, view, config);
        this.type = 'point';
        this.struct_name = 'PointLight';

        this.position = config.position || [0, 0, '100px'];
        this.position_eye = []; // position in eyespace
        this.origin = config.origin || 'ground';
        this.attenuation = !isNaN(parseFloat(config.attenuation)) ? parseFloat(config.attenuation) : 0;

        if (config.radius) {
            if (Array.isArray(config.radius) && config.radius.length === 2) {
                this.radius = config.radius;
            } else {
                this.radius = [null, config.radius];
            }
        } else {
            this.radius = null;
        }
    }

    // Inject struct and calculate function

    _createClass(PointLight, [{
        key: 'inject',

        // Inject isntance-specific settings
        value: function inject() {
            _get(Object.getPrototypeOf(PointLight.prototype), 'inject', this).call(this);

            _glShader_program2['default'].defines['TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT'] = this.attenuation !== 0;
            _glShader_program2['default'].defines['TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS'] = this.radius != null && this.radius[0] != null;
            _glShader_program2['default'].defines['TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS'] = this.radius != null;
        }
    }, {
        key: 'update',
        value: function update() {
            this.updateEyePosition();
        }
    }, {
        key: 'updateEyePosition',
        value: function updateEyePosition() {
            if (this.origin === 'world') {
                // For world origin, format is: [longitude, latitude, meters (default) or pixels w/px units]

                var _Geo$latLngToMeters = _geo2['default'].latLngToMeters(this.position);

                var _Geo$latLngToMeters2 = _slicedToArray(_Geo$latLngToMeters, 2);

                var x = _Geo$latLngToMeters2[0];
                var y = _Geo$latLngToMeters2[1];

                this.position_eye[0] = x - this.view.camera.position_meters[0];
                this.position_eye[1] = y - this.view.camera.position_meters[1];

                this.position_eye[2] = _stylesStyle_parser.StyleParser.convertUnits(this.position[2], { zoom: this.view.zoom, meters_per_pixel: _geo2['default'].metersPerPixel(this.view.zoom) });
                this.position_eye[2] = this.position_eye[2] - this.view.camera.position_meters[2];
            } else if (this.origin === 'ground' || this.origin === 'camera') {
                // For camera or ground origin, format is: [x, y, z] in meters (default) or pixels w/px units

                // Light is in camera space by default
                this.position_eye = _stylesStyle_parser.StyleParser.convertUnits(this.position, { zoom: this.view.zoom, meters_per_pixel: _geo2['default'].metersPerPixel(this.view.zoom) });

                if (this.origin === 'ground') {
                    // Leave light's xy in camera space, but z needs to be moved relative to ground plane
                    this.position_eye[2] = this.position_eye[2] - this.view.camera.position_meters[2];
                }
            }
            this.position_eye[3] = 1;
        }
    }, {
        key: 'setupProgram',
        value: function setupProgram(_program) {
            _get(Object.getPrototypeOf(PointLight.prototype), 'setupProgram', this).call(this, _program);

            _program.uniform('4fv', 'u_' + this.name + '.position', this.position_eye);

            if (_glShader_program2['default'].defines['TANGRAM_POINTLIGHT_ATTENUATION_EXPONENT']) {
                _program.uniform('1f', 'u_' + this.name + '.attenuationExponent', this.attenuation);
            }

            if (_glShader_program2['default'].defines['TANGRAM_POINTLIGHT_ATTENUATION_INNER_RADIUS']) {
                _program.uniform('1f', 'u_' + this.name + '.innerRadius', _stylesStyle_parser.StyleParser.convertUnits(this.radius[0], { zoom: this.view.zoom, meters_per_pixel: _geo2['default'].metersPerPixel(this.view.zoom) }));
            }

            if (_glShader_program2['default'].defines['TANGRAM_POINTLIGHT_ATTENUATION_OUTER_RADIUS']) {
                _program.uniform('1f', 'u_' + this.name + '.outerRadius', _stylesStyle_parser.StyleParser.convertUnits(this.radius[1], { zoom: this.view.zoom, meters_per_pixel: _geo2['default'].metersPerPixel(this.view.zoom) }));
            }
        }
    }], [{
        key: 'inject',
        value: function inject() {
            _glShader_program2['default'].addBlock(Light.block, shaderSrc_pointLight);
        }
    }]);

    return PointLight;
})(Light);

Light.types['point'] = PointLight;

var SpotLight = (function (_PointLight) {
    _inherits(SpotLight, _PointLight);

    function SpotLight(view, config) {
        _classCallCheck(this, SpotLight);

        _get(Object.getPrototypeOf(SpotLight.prototype), 'constructor', this).call(this, view, config);
        this.type = 'spotlight';
        this.struct_name = 'SpotLight';

        this.direction = (config.direction || [0, 0, -1]).map(parseFloat); // [x, y, z]
        this.exponent = config.exponent ? parseFloat(config.exponent) : 0.2;
        this.angle = config.angle ? parseFloat(config.angle) : 20;
    }

    // Inject struct and calculate function

    _createClass(SpotLight, [{
        key: 'setupProgram',
        value: function setupProgram(_program) {
            _get(Object.getPrototypeOf(SpotLight.prototype), 'setupProgram', this).call(this, _program);

            _program.uniform('3fv', 'u_' + this.name + '.direction', this.direction);
            _program.uniform('1f', 'u_' + this.name + '.spotCosCutoff', Math.cos(this.angle * 3.14159 / 180));
            _program.uniform('1f', 'u_' + this.name + '.spotExponent', this.exponent);
        }
    }], [{
        key: 'inject',
        value: function inject() {
            _glShader_program2['default'].addBlock(Light.block, shaderSrc_spotLight);
        }
    }]);

    return SpotLight;
})(PointLight);

Light.types['spotlight'] = SpotLight;
module.exports = exports['default'];
// Move light's world position into camera space

},{"./geo":201,"./gl/glsl":204,"./gl/shader_program":205,"./styles/style_parser":235,"babel-runtime/core-js/object/keys":12,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/get":21,"babel-runtime/helpers/inherits":22,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/sliced-to-array":24}],218:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _glGlsl = _dereq_('./gl/glsl');

var _glGlsl2 = _interopRequireDefault(_glGlsl);

var _stylesStyle_parser = _dereq_('./styles/style_parser');


var shaderSrc_material = "/*\n\nDefines globals:\nmaterial\nlight_accumulator_*\n\n*/\n\n\n// MATERIALS\n//\nstruct Material {\n    #ifdef TANGRAM_MATERIAL_EMISSION\n        vec4 emission;\n        #ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE\n            vec3 emissionScale;\n        #endif\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_AMBIENT\n        vec4 ambient;\n        #ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE\n            vec3 ambientScale;\n        #endif\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_DIFFUSE\n        vec4 diffuse;\n        #ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE\n            vec3 diffuseScale;\n        #endif\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_SPECULAR\n        vec4 specular;\n        float shininess;\n        #ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE\n            vec3 specularScale;\n        #endif\n    #endif\n\n\n    #ifdef TANGRAM_MATERIAL_NORMAL_TEXTURE\n        vec3 normalScale;\n        float normalAmount;\n    #endif\n};\n\n// Note: uniform is copied to a global instance to allow modification\nuniform Material u_material;\nMaterial material;\n\n#ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE\nuniform sampler2D u_material_emission_texture;\n#endif\n\n#ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE\nuniform sampler2D u_material_ambient_texture;\n#endif\n\n#ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE\nuniform sampler2D u_material_diffuse_texture;\n#endif\n\n#ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE\nuniform sampler2D u_material_specular_texture;\n#endif\n\n#ifdef TANGRAM_MATERIAL_NORMAL_TEXTURE\nuniform sampler2D u_material_normal_texture;\n#endif\n\n// Global light accumulators for each property\nvec4 light_accumulator_ambient = vec4(0.0);\nvec4 light_accumulator_diffuse = vec4(0.0);\n#ifdef TANGRAM_MATERIAL_SPECULAR\n    vec4 light_accumulator_specular = vec4(0.0);\n#endif\n\n\n#ifdef TANGRAM_MATERIAL_TEXTURE_SPHEREMAP\nvec4 getSphereMap (in sampler2D _tex, in vec3 _eyeToPoint, in vec3 _normal, in vec2 _skew) {\n    vec3 eye = normalize(_eyeToPoint);\n    eye.xy -= _skew;\n    eye = normalize(eye);\n\n    vec3 r = reflect(eye, _normal);\n    r.z += 1.0;\n    float m = 2. * length(r);\n    vec2 uv = r.xy / m + .5;\n    return texture2D(_tex, uv);\n}\n#endif\n\n\n#ifdef TANGRAM_MATERIAL_TEXTURE_TRIPLANAR\nvec3 getTriPlanarBlend (in vec3 _normal) {\n    vec3 blending = abs(_normal);\n    blending = normalize(max(blending, 0.00001));\n    float b = (blending.x + blending.y + blending.z);\n    return blending / b;\n}\n\nvec4 getTriPlanar (in sampler2D _tex, in vec3 _pos, in vec3 _normal, in vec3 _scale) {\n    vec3 blending = getTriPlanarBlend(_normal);\n    vec4 xaxis = texture2D(_tex, fract(_pos.yz * _scale.x));\n    vec4 yaxis = texture2D(_tex, fract(_pos.xz * _scale.y));\n    vec4 zaxis = texture2D(_tex, fract(_pos.xy * _scale.z));\n    return  xaxis * blending.x + yaxis * blending.y + zaxis * blending.z;\n}\n#endif\n\n\n#ifdef TANGRAM_MATERIAL_TEXTURE_PLANAR\nvec4 getPlanar (in sampler2D _tex, in vec3 _pos, in vec2 _scale) {\n    return texture2D( _tex, fract(_pos.xy * _scale.x) );\n}\n#endif\n\n\n#ifdef TANGRAM_MATERIAL_NORMAL_TEXTURE\nvoid calculateNormal (inout vec3 _normal) {\n    // Get NORMALMAP\n    //------------------------------------------------\n    #ifdef TANGRAM_MATERIAL_NORMAL_TEXTURE_UV\n    _normal += texture2D(u_material_normal_texture, fract(v_texcoord*material.normalScale.xy)).rgb*2.0-1.0;\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_NORMAL_TEXTURE_PLANAR\n    vec3 normalTex = getPlanar(u_material_normal_texture, v_world_position.xyz, material.normalScale.xy).rgb*2.0-1.0;\n    _normal += normalTex;\n    #endif\n\n    #ifdef TANGRAM_MATERIAL_NORMAL_TEXTURE_TRIPLANAR\n    vec3 normalTex = getTriPlanar(u_material_normal_texture, v_world_position.xyz, _normal, material.normalScale).rgb*2.0-1.0;\n    _normal += normalTex;\n    #endif\n\n    _normal = normalize(_normal);\n}\n#endif\n\nvoid calculateMaterial (in vec3 _eyeToPoint, inout vec3 _normal) {\n    // get EMISSION TEXTUREMAP\n    //------------------------------------------------\n    #ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE\n        #ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE_UV\n        material.emission *= texture2D(u_material_emission_texture,v_texcoord);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE_PLANAR\n        material.emission *= getPlanar(u_material_emission_texture, v_world_position.xyz, material.emissionScale.xy);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE_TRIPLANAR\n        material.emission *= getTriPlanar(u_material_emission_texture, v_world_position.xyz, _normal, material.emissionScale);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_EMISSION_TEXTURE_SPHEREMAP\n        material.emission *= getSphereMap(u_material_emission_texture, _eyeToPoint, _normal, u_vanishing_point);\n        #endif\n    #endif\n\n    // get AMBIENT TEXTUREMAP\n    //------------------------------------------------\n    #ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE\n        #ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE_UV\n        material.ambient *= texture2D(u_material_ambient_texture,v_texcoord);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE_PLANAR\n        material.ambient *= getPlanar(u_material_ambient_texture, v_world_position.xyz, material.ambientScale.xy);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE_TRIPLANAR\n        material.ambient *= getTriPlanar(u_material_ambient_texture, v_world_position.xyz, _normal, material.ambientScale);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_AMBIENT_TEXTURE_SPHEREMAP\n        material.ambient *= getSphereMap(u_material_ambient_texture, _eyeToPoint, _normal, u_vanishing_point);\n        #endif\n    #endif\n\n    // get DIFFUSE TEXTUREMAP\n    //------------------------------------------------\n    #ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE\n        #ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE_UV\n        material.diffuse *= texture2D(u_material_diffuse_texture,v_texcoord);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE_PLANAR\n        material.diffuse *= getPlanar(u_material_diffuse_texture, v_world_position.xyz, material.diffuseScale.xy);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE_TRIPLANAR\n        material.diffuse *= getTriPlanar(u_material_diffuse_texture, v_world_position.xyz, _normal, material.diffuseScale);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_DIFFUSE_TEXTURE_SPHEREMAP\n        material.diffuse *= getSphereMap(u_material_diffuse_texture, _eyeToPoint, _normal, u_vanishing_point);\n        #endif\n    #endif\n\n    // get SPECULAR TEXTUREMAP\n    //------------------------------------------------\n    #ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE\n        #ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE_UV\n        material.specular *= texture2D(u_material_specular_texture,v_texcoord);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE_PLANAR\n        material.specular *= getPlanar(u_material_specular_texture, v_world_position.xyz, material.specularScale.xy);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE_TRIPLANAR\n        material.specular *= getTriPlanar(u_material_specular_texture, v_world_position.xyz, _normal, material.specularScale);\n        #endif\n\n        #ifdef TANGRAM_MATERIAL_SPECULAR_TEXTURE_SPHEREMAP\n        material.specular *= getSphereMap(u_material_specular_texture, _eyeToPoint, _normal, u_vanishing_point);\n        #endif\n    #endif\n}\n";

var Material = (function () {
    function Material(config) {
        _classCallCheck(this, Material);

        config = config || {};

        // These properties all have the same defaults, so they can be set in bulk
        var _arr = ['emission', 'ambient', 'diffuse', 'specular'];
        for (var _i = 0; _i < _arr.length; _i++) {
            var prop = _arr[_i];
            var value = config[prop];
            if (value != null) {
                if (value.texture) {
                    this[prop] = {
                        texture: value.texture,
                        mapping: value.mapping || 'spheremap',
                        scale: _glGlsl2['default'].expandVec3(value.scale != null ? value.scale : 1),
                        amount: _glGlsl2['default'].expandVec4(value.amount != null ? value.amount : 1)
                    };
                } else if (typeof value === 'number' || Array.isArray(value)) {
                    this[prop] = { amount: _glGlsl2['default'].expandVec4(value) };
                } else if (typeof value === 'string') {
                    this[prop] = { amount: _stylesStyle_parser.StyleParser.parseColor(value) };
                } else {
                    this[prop] = value;
                }
            }
        }

        // Extra specular props
        if (this.specular) {
            this.specular.shininess = config.shininess ? parseFloat(config.shininess) : 0.2;
        }

        // Normal mapping
        if (config.normal != null) {
            this.normal = {
                texture: config.normal.texture,
                mapping: config.normal.mapping || 'triplanar',
                scale: _glGlsl2['default'].expandVec3(config.normal.scale != null ? config.normal.scale : 1),
                amount: config.normal.amount != null ? config.normal.amount : 1
            };
        }
    }

    // Determine if a material config block has sufficient properties to create a material

    _createClass(Material, [{
        key: 'inject',
        value: function inject(style) {
            // For each property, sets defines to configure texture mapping, with a pattern like:
            //   TANGRAM_MATERIAL_DIFFUSE, TANGRAM_MATERIAL_DIFFUSE_TEXTURE, TANGRAM_MATERIAL_DIFFUSE_TEXTURE_SPHEREMAP
            // Also sets flags to keep track of each unique mapping type being used, e.g.:
            //   TANGRAM_MATERIAL_TEXTURE_SPHEREMAP
            // Enables texture coordinates if needed and not already on
            var _arr2 = ['emission', 'ambient', 'diffuse', 'specular'];
            for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
                var prop = _arr2[_i2];
                var def = 'TANGRAM_MATERIAL_' + prop.toUpperCase();
                var texdef = def + '_TEXTURE';
                style.defines[def] = this[prop] != null;
                if (this[prop] && this[prop].texture) {
                    style.defines[texdef] = true;
                    style.defines[texdef + '_' + this[prop].mapping.toUpperCase()] = true;
                    style.defines['TANGRAM_MATERIAL_TEXTURE_' + this[prop].mapping.toUpperCase()] = true;
                    style.texcoords = style.texcoords || this[prop].mapping === 'uv';
                }
            }

            // Normal mapping
            // As anove, sets flags to keep track of each unique mapping type being used, e.g.:
            //   TANGRAM_MATERIAL_TEXTURE_SPHEREMAP
            if (this.normal && this.normal.texture) {
                style.defines['TANGRAM_MATERIAL_NORMAL_TEXTURE'] = true;
                style.defines['TANGRAM_MATERIAL_NORMAL_TEXTURE_' + this.normal.mapping.toUpperCase()] = true;
                style.defines['TANGRAM_MATERIAL_TEXTURE_' + this.normal.mapping.toUpperCase()] = true;
                style.texcoords = style.texcoords || this.normal.mapping === 'uv';
            }

            style.replaceShaderBlock(Material.block, shaderSrc_material, 'Material');
            style.addShaderBlock('setup', '\nmaterial = u_material;\n', 'Material');
        }
    }, {
        key: 'setupProgram',
        value: function setupProgram(_program) {
            // For each property, sets uniforms in the pattern:
            // u_material.diffuse, u_material.diffuseScale u_material_diffuse_texture
            var _arr3 = ['emission', 'ambient', 'diffuse', 'specular'];
            for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
                var prop = _arr3[_i3];
                if (this[prop]) {
                    if (this[prop].texture) {
                        _program.setTextureUniform('u_material_' + prop + '_texture', this[prop].texture);
                        _program.uniform('3fv', 'u_material.' + prop + 'Scale', this[prop].scale);
                        _program.uniform('4fv', 'u_material.' + prop, this[prop].amount);
                    } else if (this[prop].amount) {
                        _program.uniform('4fv', 'u_material.' + prop, this[prop].amount);
                    }
                }
            }

            // Extra specular props
            if (this.specular) {
                _program.uniform('1f', 'u_material.shininess', this.specular.shininess);
            }

            // Normal mapping
            if (this.normal && this.normal.texture) {
                _program.setTextureUniform('u_material_normal_texture', this.normal.texture);
                _program.uniform('3fv', 'u_material.normalScale', this.normal.scale);
                _program.uniform('1f', 'u_material.normalAmount', this.normal.amount);
            }
        }
    }], [{
        key: 'isValid',
        value: function isValid(config) {
            if (config == null) {
                return false;
            }

            if (config.emission == null && config.ambient == null && config.diffuse == null && config.specular == null) {
                return false;
            }

            return true;
        }
    }]);

    return Material;
})();

exports['default'] = Material;

Material.block = 'material';
module.exports = exports['default'];

},{"./gl/glsl":204,"./styles/style_parser":235,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/interop-require-default":23}],219:[function(_dereq_,module,exports){
/*jshint worker: true*/
'use strict';

var _toConsumableArray = _dereq_('babel-runtime/helpers/to-consumable-array')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _Object$keys = _dereq_('babel-runtime/core-js/object/keys')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsThread = _dereq_('./utils/thread');

var _utilsThread2 = _interopRequireDefault(_utilsThread);

var _utilsUtils = _dereq_('./utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _utilsLog = _dereq_('./utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _utilsWorker_broker = _dereq_('./utils/worker_broker');

var _utilsWorker_broker2 = _interopRequireDefault(_utilsWorker_broker);

// jshint ignore:line

var _utilsMerge = _dereq_('./utils/merge');

var _utilsMerge2 = _interopRequireDefault(_utilsMerge);

var _tile = _dereq_('./tile');

var _tile2 = _interopRequireDefault(_tile);

var _sourcesData_source = _dereq_('./sources/data_source');

var _sourcesData_source2 = _interopRequireDefault(_sourcesData_source);

var _selection = _dereq_('./selection');

var _selection2 = _interopRequireDefault(_selection);

var _stylesStyle_parser = _dereq_('./styles/style_parser');

var _stylesStyle_manager = _dereq_('./styles/style_manager');

var _stylesLayer = _dereq_('./styles/layer');

var _glTexture = _dereq_('./gl/texture');

var _glTexture2 = _interopRequireDefault(_glTexture);

var _stylesPolygonsPolygons = _dereq_('./styles/polygons/polygons');

var _stylesLinesLines = _dereq_('./styles/lines/lines');

var _stylesPointsPoints = _dereq_('./styles/points/points');

var _stylesTextText = _dereq_('./styles/text/text');

var _stylesRasterRaster = _dereq_('./styles/raster/raster');

_dereq_('./sources/geojson');

_dereq_('./sources/topojson');

_dereq_('./sources/mvt');

_dereq_('./sources/raster');

_dereq_('./gl/vertex_elements');

var SceneWorker = self;

exports.SceneWorker = SceneWorker;
self.Thread = _utilsThread2['default'];

// Worker functionality will only be defined in worker thread
if (_utilsThread2['default'].is_worker) {

    // Add built-in rendering styles
    _stylesStyle_manager.StyleManager.register(_stylesPolygonsPolygons.Polygons);
    _stylesStyle_manager.StyleManager.register(_stylesLinesLines.Lines);
    _stylesStyle_manager.StyleManager.register(_stylesPointsPoints.Points);
    _stylesStyle_manager.StyleManager.register(_stylesTextText.TextStyle);
    _stylesStyle_manager.StyleManager.register(_stylesRasterRaster.RasterStyle);

    _Object$assign(self, {

        FeatureSelection: _selection2['default'],

        sources: {
            tiles: {},
            objects: {}
        },
        styles: {},
        layers: {},
        tiles: {},
        objects: {},
        config: {}, // raw config (e.g. functions, etc. not expanded)

        // Initialize worker
        init: function init(worker_id, num_workers, log_level, device_pixel_ratio) {
            self._worker_id = worker_id;
            self.num_workers = num_workers;
            _utilsLog2['default'].setLevel(log_level);
            _utilsUtils2['default'].device_pixel_ratio = device_pixel_ratio;
            _selection2['default'].setPrefix(self._worker_id);
            return worker_id;
        },

        // Starts a config refresh
        updateConfig: function updateConfig(_ref) {
            var config = _ref.config;
            var generation = _ref.generation;
            var introspection = _ref.introspection;

            config = JSON.parse(config);

            self.last_config = (0, _utilsMerge2['default'])({}, self.config);
            self.config = (0, _utilsMerge2['default'])({}, config);
            self.generation = generation;
            self.introspection = introspection;

            // Data block functions are not context wrapped like the rest of the style functions are
            // TODO: probably want a cleaner way to exclude these
            for (var layer in config.layers) {
                if (config.layers[layer]) {
                    config.layers[layer].data = _utilsUtils2['default'].stringsToFunctions(config.layers[layer].data);
                }
            }

            // Expand global properties
            self.global = _utilsUtils2['default'].stringsToFunctions(config.global);

            // Create data sources
            config.sources = _utilsUtils2['default'].stringsToFunctions(config.sources); // parse new sources
            self.sources.tiles = {}; // clear previous sources
            for (var _name in config.sources) {
                var source = undefined;
                try {
                    source = _sourcesData_source2['default'].create(_Object$assign({}, config.sources[_name], { name: _name }), self.sources.tiles);
                } catch (e) {
                    continue;
                }

                if (!source) {
                    continue;
                }

                if (source.tiled) {
                    self.sources.tiles[_name] = source;
                } else {
                    // Distribute object sources across workers
                    if (source.id % self.num_workers === self._worker_id) {
                        // Load source if not cached
                        self.sources.objects[_name] = source;
                        if (!self.objects[source.name]) {
                            self.objects[source.name] = {};
                            source.load(self.objects[source.name]);
                        }
                    }
                }
            }

            // Clear tile cache if data source config changed
            if (!self.config.sources || !self.last_config.sources || _Object$keys(self.config.sources).some(function (s) {
                return JSON.stringify(self.config.sources[s]) !== JSON.stringify(self.last_config.sources[s]);
            })) {
                self.tiles = {};
            }

            // Expand styles
            config.styles = _utilsUtils2['default'].stringsToFunctions(config.styles, _stylesStyle_parser.StyleParser.wrapFunction);
            self.styles = _stylesStyle_manager.StyleManager.build(config.styles, {
                generation: self.generation,
                sources: self.sources.tiles,
                introspection: self.introspection
            });

            // Parse each top-level layer as a separate tree
            self.layers = (0, _stylesLayer.parseLayers)(config.layers);

            // Sync tetxure info from main thread
            self.syncing_textures = self.syncTextures(config.textures);

            // Return promise for when config refresh finishes
            self.configuring = self.syncing_textures.then(function () {
                (0, _utilsLog2['default'])('debug', 'updated config');
            });
        },

        // Returns a promise that fulfills when config refresh is finished
        awaitConfiguration: function awaitConfiguration() {
            return self.configuring;
        },

        // Build a tile: load from tile source if building for first time, otherwise rebuild with existing data
        buildTile: function buildTile(_ref2) {
            var tile = _ref2.tile;

            // Tile cached?
            if (self.getTile(tile.key) != null) {
                // Already loading?
                if (self.getTile(tile.key).loading === true) {
                    return;
                }
            }

            // Update tile cache
            tile = self.tiles[tile.key] = _Object$assign(self.getTile(tile.key) || {}, tile);

            // Update config (styles, etc.), then build tile
            return self.awaitConfiguration().then(function () {
                // First time building the tile
                if (tile.loaded !== true) {

                    return new _Promise(function (resolve, reject) {

                        tile.loading = true;
                        tile.loaded = false;
                        tile.error = null;

                        self.loadTileSourceData(tile).then(function () {
                            if (!self.getTile(tile.key)) {
                                (0, _utilsLog2['default'])('trace', 'stop tile build after data source load because tile was removed: ' + tile.key);
                                return;
                            }

                            // Warn and continue on data source error
                            if (tile.source_data.error) {
                                (0, _utilsLog2['default'])('warn', 'tile load error(s) for ' + tile.key + ': ' + tile.source_data.error);
                            }

                            tile.loading = false;
                            tile.loaded = true;
                            _tile2['default'].buildGeometry(tile, self).then(function (keys) {
                                resolve(_utilsWorker_broker2['default'].returnWithTransferables({ tile: _tile2['default'].slice(tile, keys) }));
                            });
                        })['catch'](function (error) {
                            tile.loading = false;
                            tile.loaded = false;
                            tile.error = error.toString();
                            (0, _utilsLog2['default'])('error', 'tile load error for ' + tile.key + ': ' + tile.error + ' at: ' + error.stack);

                            resolve({ tile: _tile2['default'].slice(tile) });
                        });
                    });
                }
                // Tile already loaded, just rebuild
                else {
                        (0, _utilsLog2['default'])('trace', 'used worker cache for tile ' + tile.key);

                        // Build geometry
                        return _tile2['default'].buildGeometry(tile, self).then(function (keys) {
                            return _utilsWorker_broker2['default'].returnWithTransferables({ tile: _tile2['default'].slice(tile, keys) });
                        });
                    }
            });
        },

        // Load this tile's data source
        loadTileSourceData: function loadTileSourceData(tile) {
            if (self.sources.tiles[tile.source]) {
                return self.sources.tiles[tile.source].load(tile);
            } else {
                tile.source_data = { error: 'Data source \'' + tile.source + '\' not found' };
                return _Promise.resolve(tile);
            }
        },

        getTile: function getTile(key) {
            return self.tiles[key];
        },

        // Remove tile
        removeTile: function removeTile(key) {
            var tile = self.tiles[key];

            if (tile != null) {
                // Cancel if loading
                if (tile.loading === true) {
                    (0, _utilsLog2['default'])('trace', 'cancel tile load for ' + key);
                    tile.loading = false;
                    _tile2['default'].cancel(tile);
                }

                // Remove from cache
                _selection2['default'].clearTile(key);
                delete self.tiles[key];
                (0, _utilsLog2['default'])('trace', 'remove tile from cache for ' + key);
            }
        },

        // Get a feature from the selection map
        getFeatureSelection: function getFeatureSelection() {
            var _ref3 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

            var id = _ref3.id;
            var key = _ref3.key;

            var selection = _selection2['default'].map[key];

            return {
                id: id,
                feature: selection && selection.feature
            };
        },

        // Resets the feature selection state
        resetFeatureSelection: function resetFeatureSelection() {
            _selection2['default'].reset();
        },

        // Selection map size for this worker
        getFeatureSelectionMapSize: function getFeatureSelectionMapSize() {
            return _selection2['default'].getMapSize();
        },

        // Texture info needs to be synced from main thread, e.g. width/height, which we only know after the texture loads
        syncTextures: function syncTextures(tex_config) {
            var textures = [];
            if (tex_config) {
                textures.push.apply(textures, _toConsumableArray(_Object$keys(tex_config)));
            }

            (0, _utilsLog2['default'])('trace', 'sync textures to worker:', textures);
            if (textures.length > 0) {
                return _glTexture2['default'].syncTexturesToWorker(textures);
            }
            return _Promise.resolve();
        },

        // Sync device pixel ratio from main thread
        updateDevicePixelRatio: function updateDevicePixelRatio(device_pixel_ratio) {
            _utilsUtils2['default'].device_pixel_ratio = device_pixel_ratio;
        },

        // Profiling helpers
        profile: function profile(name) {
            console.profile('worker ' + self._worker_id + ': ' + name);
        },

        profileEnd: function profileEnd(name) {
            console.profileEnd('worker ' + self._worker_id + ': ' + name);
        }

    });

    _utilsWorker_broker2['default'].addTarget('self', self);
}

},{"./gl/texture":206,"./gl/vertex_elements":210,"./selection":220,"./sources/data_source":221,"./sources/geojson":222,"./sources/mvt":223,"./sources/raster":224,"./sources/topojson":225,"./styles/layer":226,"./styles/lines/lines":228,"./styles/points/points":230,"./styles/polygons/polygons":231,"./styles/raster/raster":232,"./styles/style_manager":234,"./styles/style_parser":235,"./styles/text/text":237,"./tile":240,"./utils/log":243,"./utils/merge":244,"./utils/thread":247,"./utils/utils":248,"./utils/worker_broker":250,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/keys":12,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/to-consumable-array":25}],220:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsLog = _dereq_('./utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _glTexture = _dereq_('./gl/texture');

var _glTexture2 = _interopRequireDefault(_glTexture);

var _utilsWorker_broker = _dereq_('./utils/worker_broker');

var _utilsWorker_broker2 = _interopRequireDefault(_utilsWorker_broker);

var FeatureSelection = (function () {
    function FeatureSelection(gl, workers) {
        _classCallCheck(this, FeatureSelection);

        this.gl = gl;
        this.workers = workers; // pool of workers to request feature look-ups from, keyed by id
        this.init();
    }

    // Static properties

    _createClass(FeatureSelection, [{
        key: 'init',
        value: function init() {
            // Selection state tracking
            this.requests = {}; // pending selection requests
            this.feature = null; // currently selected feature
            this.read_delay = 5; // delay time from selection render to framebuffer sample, to avoid CPU/GPU sync lock
            this.read_delay_timer = null; // current timer (setTimeout) for delayed selection reads

            this.pixel = new Uint8Array(4);
            this.pixel32 = new Float32Array(this.pixel.buffer);

            // Frame buffer for selection
            // TODO: initiate lazily in case we don't need to do any selection
            this.fbo = this.gl.createFramebuffer();
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
            this.fbo_size = { width: 256, height: 256 }; // TODO: make configurable / adaptive based on canvas size
            this.fbo_size.aspect = this.fbo_size.width / this.fbo_size.height;

            // Texture for the FBO color attachment
            var fbo_texture = _glTexture2['default'].create(this.gl, 'selection_fbo', { filtering: 'nearest' });
            fbo_texture.setData(this.fbo_size.width, this.fbo_size.height, null, { filtering: 'nearest' });
            this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, fbo_texture.texture, 0);

            // Renderbuffer for the FBO depth attachment
            var fbo_depth_rb = this.gl.createRenderbuffer();
            this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, fbo_depth_rb);
            this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this.fbo_size.width, this.fbo_size.height);
            this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, fbo_depth_rb);

            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.gl && this.fbo) {
                this.gl.deleteFramebuffer(this.fbo);
                this.fbo = null;
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
            }

            // TODO: free texture?
        }
    }, {
        key: 'bind',
        value: function bind() {
            // Switch to FBO
            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbo);
            this.gl.viewport(0, 0, this.fbo_size.width, this.fbo_size.height);
        }

        // Request feature selection
        // Runs asynchronously, schedules selection buffer to be updated
    }, {
        key: 'getFeatureAt',
        value: function getFeatureAt(point) {
            var _this = this;

            return new _Promise(function (resolve, reject) {
                // Queue requests for feature selection, and they will be picked up by the render loop
                _this.selection_request_id = _this.selection_request_id + 1 || 0;
                _this.requests[_this.selection_request_id] = {
                    type: 'point',
                    id: _this.selection_request_id,
                    point: point,
                    resolve: resolve,
                    reject: reject
                };
            });
        }

        // Any pending selection requests
    }, {
        key: 'pendingRequests',
        value: function pendingRequests() {
            return this.requests;
        }
    }, {
        key: 'clearPendingRequests',
        value: function clearPendingRequests() {
            for (var r in this.requests) {
                var request = this.requests[r];

                // This request was already sent to the worker, we're just awaiting its reply
                if (request.sent) {
                    continue;
                }

                // Reject request since it will never be fulfilled
                // TODO: pass a reason for rejection?
                request.reject({ request: request });
                delete this.requests[r];
            }
        }

        // Read pending results from the selection buffer. Called after rendering to selection buffer.
    }, {
        key: 'read',
        value: function read() {
            var _this2 = this;

            // Delay reading the pixel result from the selection buffer to avoid CPU/GPU sync lock.
            // Calling readPixels synchronously caused a massive performance hit, presumably since it
            // forced this function to wait for the GPU to finish rendering and retrieve the texture contents.
            if (this.read_delay_timer != null) {
                clearTimeout(this.read_delay_timer);
            }
            this.read_delay_timer = setTimeout(function () {
                var gl = _this2.gl;

                gl.bindFramebuffer(gl.FRAMEBUFFER, _this2.fbo);

                for (var r in _this2.requests) {
                    var request = _this2.requests[r];

                    // This request was already sent to the worker, we're just awaiting its reply
                    if (request.sent) {
                        continue;
                    }

                    // TODO: support other selection types, such as features within a box
                    if (request.type !== 'point') {
                        continue;
                    }

                    // Check selection map against FBO
                    gl.readPixels(Math.floor(request.point.x * _this2.fbo_size.width), Math.floor((1 - request.point.y) * _this2.fbo_size.height), 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, _this2.pixel);
                    var feature_key = _this2.pixel[0] + (_this2.pixel[1] << 8) + (_this2.pixel[2] << 16) + (_this2.pixel[3] << 24) >>> 0;

                    // If feature found, ask appropriate web worker to lookup feature
                    var worker_id = _this2.pixel[3];
                    if (worker_id !== 255) {
                        // 255 indicates an empty selection buffer pixel
                        if (_this2.workers[worker_id] != null) {
                            _utilsWorker_broker2['default'].postMessage(_this2.workers[worker_id], 'self.getFeatureSelection', { id: request.id, key: feature_key }).then(function (message) {
                                _this2.finishRead(message);
                            });
                        }
                    }
                    // No feature found, but still need to resolve promise
                    else {
                            _this2.finishRead({ id: request.id, feature: null });
                        }

                    request.sent = true;
                }

                gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            }, this.read_delay);
        }

        // Called on main thread when a web worker finds a feature in the selection buffer
    }, {
        key: 'finishRead',
        value: function finishRead(message) {
            var request = this.requests[message.id];
            if (!request) {
                (0, _utilsLog2['default'])('error', "FeatureSelection.finishRead(): could not find message", message);
                return; // request was cleared before it returned
            }

            var feature = message.feature;
            var changed = false;
            if (feature != null && this.feature == null || feature == null && this.feature != null || feature != null && this.feature != null && JSON.stringify(feature) !== JSON.stringify(this.feature)) {
                changed = true;
            }

            this.feature = feature; // store the most recently selected feature

            // Resolve the request
            request.resolve({ feature: feature, changed: changed, request: request });
            delete this.requests[message.id]; // done processing this request
        }

        // Selection map generation
        // Each worker will create its own independent, 'local' selection map

        // Create a unique 32-bit color to identify a feature
        // Workers independently create/modify selection colors in their own threads, but we also
        // need the main thread to know where each feature color originated. To accomplish this,
        // we partition the map by setting the 4th component (alpha channel) to the worker's id.
    }], [{
        key: 'makeEntry',
        value: function makeEntry(tile) {
            // 32-bit color key
            this.map_entry++;
            var ir = this.map_entry & 255;
            var ig = this.map_entry >> 8 & 255;
            var ib = this.map_entry >> 16 & 255;
            var ia = this.map_prefix;
            var r = ir / 255;
            var g = ig / 255;
            var b = ib / 255;
            var a = ia / 255;
            var key = ir + (ig << 8) + (ib << 16) + (ia << 24) >>> 0; // need unsigned right shift to convert to positive #

            this.map[key] = {
                color: [r, g, b, a]
            };
            this.map_size++;

            // Initialize tile-specific tracking info
            if (!this.tiles[tile.key]) {
                this.tiles[tile.key] = {
                    entries: [], // set of feature entries in this thread
                    tile: { // subset of tile properties to pass back with feature
                        key: tile.key,
                        coords: tile.coords,
                        style_zoom: tile.style_zoom,
                        source: tile.source,
                        generation: tile.generation
                    }
                };
            }

            this.tiles[tile.key].entries.push(key);

            return this.map[key];
        }
    }, {
        key: 'makeColor',
        value: function makeColor(feature, tile, context) {
            var selector = this.makeEntry(tile);
            selector.feature = {
                id: feature.id,
                properties: feature.properties,
                source_name: context.source,
                source_layer: context.layer,
                layers: context.layers,
                tile: this.tiles[tile.key].tile
            };

            return selector.color;
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.tiles = {};
            this.map = {};
            this.map_size = 0;
            this.map_entry = 0;
        }
    }, {
        key: 'clearTile',
        value: function clearTile(key) {
            var _this3 = this;

            if (this.tiles[key]) {
                this.tiles[key].entries.forEach(function (k) {
                    return delete _this3.map[k];
                });
                this.map_size -= this.tiles[key].entries.length;
                delete this.tiles[key];
            }
        }
    }, {
        key: 'getMapSize',
        value: function getMapSize() {
            return this.map_size;
        }
    }, {
        key: 'setPrefix',
        value: function setPrefix(prefix) {
            this.map_prefix = prefix;
        }
    }]);

    return FeatureSelection;
})();

exports['default'] = FeatureSelection;
FeatureSelection.map = {}; // this will be unique per module instance (so unique per worker)
FeatureSelection.tiles = {}; // selection keys, by tile
FeatureSelection.map_size = 0;
FeatureSelection.map_entry = 0;
FeatureSelection.map_prefix = 0; // set by worker to worker id #
FeatureSelection.defaultColor = [0, 0, 0, 1];
module.exports = exports['default'];

},{"./gl/texture":206,"./utils/log":243,"./utils/worker_broker":250,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/interop-require-default":23}],221:[function(_dereq_,module,exports){
/*jshint worker: true */
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _get = _dereq_('babel-runtime/helpers/get')['default'];

var _inherits = _dereq_('babel-runtime/helpers/inherits')['default'];

var _toConsumableArray = _dereq_('babel-runtime/helpers/to-consumable-array')['default'];

var _slicedToArray = _dereq_('babel-runtime/helpers/sliced-to-array')['default'];

var _Set = _dereq_('babel-runtime/core-js/set')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _geo = _dereq_('../geo');

var _geo2 = _interopRequireDefault(_geo);

var _utilsErrors = _dereq_('../utils/errors');

var _utilsUtils = _dereq_('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var DataSource = (function () {
    function DataSource(config, sources) {
        _classCallCheck(this, DataSource);

        this.config = config; // save original config
        this.sources = sources; // full set of data sources TODO: centralize these like textures?
        this.id = config.id;
        this.name = config.name;
        this.pad_scale = config.pad_scale || 0.0001; // scale tile up by small factor to cover seams
        this.default_winding = null; // winding order will adapt to data source
        this.rasters = // attached raster tile sources
        Array.isArray(config.rasters) ? [].concat(_toConsumableArray(new _Set(config.rasters))) : []; // de-dupe with set conversion

        // Optional function to transform source data
        this.transform = config.transform;
        if (typeof this.transform === 'function') {
            this.transform.bind(this);
        }

        // Optional additional data to pass to the transform function
        this.extra_data = config.extra_data;

        // Optional additional scripts made available to the transform function
        // NOTE: these are loaded alongside the library when the workers are instantiated
        this.scripts = config.scripts;

        // overzoom will apply for zooms higher than this
        this.max_zoom = config.max_zoom || _geo2['default'].default_source_max_zoom;
    }

    // Create a tile source by type, factory-style

    _createClass(DataSource, [{
        key: 'load',
        // flip coords positive
        value: function load(dest) {
            var _this = this;

            dest.source_data = {};
            dest.source_data.layers = {};
            dest.pad_scale = this.pad_scale;
            dest.rasters = [].concat(_toConsumableArray(this.rasters)); // copy list of rasters to load for tile

            return this._load(dest).then(function (dest) {
                // Post-processing
                for (var layer in dest.source_data.layers) {
                    var data = dest.source_data.layers[layer];
                    if (data && data.features) {
                        data.features.forEach(function (feature) {
                            _geo2['default'].transformGeometry(feature.geometry, function (coord) {
                                // Flip Y coords
                                coord[1] = -coord[1];

                                // Slightly scale up tile to cover seams
                                if (_this.pad_scale) {
                                    coord[0] = Math.round(coord[0] * (1 + _this.pad_scale) - _geo2['default'].tile_scale * _this.pad_scale / 2);
                                    coord[1] = Math.round(coord[1] * (1 + _this.pad_scale) - _geo2['default'].tile_scale * _this.pad_scale / 2);
                                }
                            });

                            // Use first encountered polygon winding order as default for data source
                            _this.updateDefaultWinding(feature.geometry);
                        });
                    }
                }

                dest.default_winding = _this.default_winding || 'CCW';
                return dest;
            });
        }

        // Sub-classes must implement
    }, {
        key: '_load',
        value: function _load(dest) {
            throw new _utilsErrors.MethodNotImplemented('_load');
        }

        // Infer winding for data source from first ring of provided geometry
    }, {
        key: 'updateDefaultWinding',
        value: function updateDefaultWinding(geom) {
            if (this.default_winding == null) {
                if (geom.type === 'Polygon') {
                    this.default_winding = _geo2['default'].ringWinding(geom.coordinates[0]);
                } else if (geom.type === 'MultiPolygon') {
                    this.default_winding = _geo2['default'].ringWinding(geom.coordinates[0][0]);
                }
            }
            return this.default_winding;
        }

        // Register a new data source type, under a type name
    }], [{
        key: 'create',
        value: function create(source, sources) {
            if (DataSource.types[source.type]) {
                return new DataSource.types[source.type](source, sources);
            }
        }

        // Check if a data source definition changed
    }, {
        key: 'changed',
        value: function changed(source, prev_source) {
            if (!source || !prev_source) {
                return true;
            }

            var cur = _Object$assign({}, source.config, { id: null }); // null out ids since we don't want to compare them
            var prev = _Object$assign({}, prev_source.config, { id: null });

            return JSON.stringify(cur) !== JSON.stringify(prev);
        }

        // Mercator projection
    }, {
        key: 'projectData',
        value: function projectData(source) {
            var timer = +new Date();
            for (var t in source.layers) {
                var num_features = source.layers[t].features.length;
                for (var f = 0; f < num_features; f++) {
                    var feature = source.layers[t].features[f];
                    _geo2['default'].transformGeometry(feature.geometry, function (coord) {
                        var _Geo$latLngToMeters = _geo2['default'].latLngToMeters(coord);

                        var _Geo$latLngToMeters2 = _slicedToArray(_Geo$latLngToMeters, 2);

                        var x = _Geo$latLngToMeters2[0];
                        var y = _Geo$latLngToMeters2[1];

                        coord[0] = x;
                        coord[1] = y;
                    });
                }
            }

            if (source.debug !== undefined) {
                source.debug.projection = +new Date() - timer;
            }
        }

        /**
         Re-scale geometries within each source to internal tile units
        */
    }, {
        key: 'scaleData',
        value: function scaleData(source, _ref) {
            var z = _ref.coords.z;
            var min = _ref.min;
            var max = _ref.max;

            var units_per_meter = _geo2['default'].unitsPerMeter(z);
            for (var t in source.layers) {
                var num_features = source.layers[t].features.length;
                for (var f = 0; f < num_features; f++) {
                    var feature = source.layers[t].features[f];
                    _geo2['default'].transformGeometry(feature.geometry, function (coord) {
                        coord[0] = (coord[0] - min.x) * units_per_meter;
                        coord[1] = (coord[1] - min.y) * units_per_meter * -1;
                    });
                }
            }
        }
    }, {
        key: 'register',
        value: function register(type_class, type_name) {
            if (!type_class || !type_name) {
                return;
            }

            DataSource.types[type_name] = type_class;
        }
    }]);

    return DataSource;
})();

exports['default'] = DataSource;

DataSource.types = {}; // set of supported data source classes, referenced by type name

/*** Generic network loading source - abstract class ***/

var NetworkSource = (function (_DataSource) {
    _inherits(NetworkSource, _DataSource);

    function NetworkSource(source) {
        _classCallCheck(this, NetworkSource);

        _get(Object.getPrototypeOf(NetworkSource.prototype), 'constructor', this).call(this, source);
        this.url = _utilsUtils2['default'].addParamsToURL(source.url, source.url_params);
        this.response_type = ""; // use to set explicit XHR type

        if (this.url == null) {
            throw Error('Network data source must provide a `url` property');
        }
    }

    /*** Generic network tile loading - abstract class ***/

    _createClass(NetworkSource, [{
        key: '_load',
        value: function _load(dest) {
            var _this2 = this;

            var url = this.formatUrl(this.url, dest);

            var source_data = dest.source_data;
            source_data.url = url;
            dest.debug = dest.debug || {};
            dest.debug.network = +new Date();

            return new _Promise(function (resolve, reject) {
                source_data.error = null;
                // For testing network errors
                // var promise = Utils.io(url, 60 * 100, this.response_type);
                // if (Math.random() < .7) {
                //     promise = Promise.reject(Error('fake data source error'));
                // }
                // promise.then((body) => {
                var promise = _utilsUtils2['default'].io(url, 60 * 1000, _this2.response_type);
                source_data.request = promise.request;

                promise.then(function (body) {
                    dest.debug.response_size = body.length || body.byteLength;
                    dest.debug.network = +new Date() - dest.debug.network;
                    dest.debug.parsing = +new Date();
                    _this2.parseSourceData(dest, source_data, body);
                    dest.debug.parsing = +new Date() - dest.debug.parsing;
                    resolve(dest);
                })['catch'](function (error) {
                    source_data.error = error.toString();
                    resolve(dest); // resolve request but pass along error
                });
            });
        }

        // Sub-classes must implement:

    }, {
        key: 'formatUrl',
        value: function formatUrl(url_template, dest) {
            throw new _utilsErrors.MethodNotImplemented('formatUrl');
        }
    }, {
        key: 'parseSourceData',
        value: function parseSourceData(dest, source, reponse) {
            throw new _utilsErrors.MethodNotImplemented('parseSourceData');
        }
    }]);

    return NetworkSource;
})(DataSource);

exports.NetworkSource = NetworkSource;

var NetworkTileSource = (function (_NetworkSource) {
    _inherits(NetworkTileSource, _NetworkSource);

    function NetworkTileSource(source) {
        _classCallCheck(this, NetworkTileSource);

        _get(Object.getPrototypeOf(NetworkTileSource.prototype), 'constructor', this).call(this, source);

        this.tiled = true;
        this.url_hosts = null;
        var host_match = this.url.match(/{s:\[([^}+]+)\]}/);
        if (host_match != null && host_match.length > 1) {
            this.url_hosts = host_match[1].split(',');
            this.next_host = 0;
        }
    }

    _createClass(NetworkTileSource, [{
        key: 'formatUrl',
        value: function formatUrl(url_template, tile) {
            var coords = _geo2['default'].wrapTile(tile.coords, { x: true });
            var url = url_template.replace('{x}', coords.x).replace('{y}', coords.y).replace('{z}', coords.z);

            if (this.url_hosts != null) {
                url = url.replace(/{s:\[([^}+]+)\]}/, this.url_hosts[this.next_host]);
                this.next_host = (this.next_host + 1) % this.url_hosts.length;
            }
            return url;
        }

        // Checks for the x/y/z tile pattern in URL template
    }, {
        key: 'urlHasTilePattern',
        value: function urlHasTilePattern(url) {
            return url && url.search('{x}') > -1 && url.search('{y}') > -1 && url.search('{z}') > -1;
        }
    }]);

    return NetworkTileSource;
})(NetworkSource);

exports.NetworkTileSource = NetworkTileSource;

},{"../geo":201,"../utils/errors":241,"../utils/utils":248,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/promise":14,"babel-runtime/core-js/set":15,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/get":21,"babel-runtime/helpers/inherits":22,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/sliced-to-array":24,"babel-runtime/helpers/to-consumable-array":25}],222:[function(_dereq_,module,exports){
'use strict';

var _get = _dereq_('babel-runtime/helpers/get')['default'];

var _inherits = _dereq_('babel-runtime/helpers/inherits')['default'];

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _data_source = _dereq_('./data_source');

var _data_source2 = _interopRequireDefault(_data_source);

var _mvt = _dereq_('./mvt');

var _geo = _dereq_('../geo');

var _geo2 = _interopRequireDefault(_geo);

// For tiling GeoJSON client-side

var _geojsonVt = _dereq_('geojson-vt');

var _geojsonVt2 = _interopRequireDefault(_geojsonVt);

/**
 GeoJSON standalone (non-tiled) source
 Uses geojson-vt split into tiles client-side
*/

var GeoJSONSource = (function (_NetworkSource) {
    _inherits(GeoJSONSource, _NetworkSource);

    function GeoJSONSource(source) {
        _classCallCheck(this, GeoJSONSource);

        _get(Object.getPrototypeOf(GeoJSONSource.prototype), 'constructor', this).call(this, source);
        this.tiled = true;
        this.load_data = null;
        this.tile_indexes = {}; // geojson-vt tile indices, by layer name
        this.max_zoom = Math.max(this.max_zoom || 0, 15); // TODO: max zoom < 15 causes artifacts/no-draw at 20, investigate
        this.pad_scale = 0; // we don't want padding on auto-tiled sources
    }

    /**
     Mapzen/OSM.US-style GeoJSON vector tiles
     @class GeoJSONTileSource
    */

    _createClass(GeoJSONSource, [{
        key: '_load',
        value: function _load(dest) {
            var _this = this;

            if (!this.load_data) {
                this.load_data = _get(Object.getPrototypeOf(GeoJSONSource.prototype), '_load', this).call(this, { source_data: { layers: {} } }).then(function (data) {
                    var layers = data.source_data.layers;
                    for (var layer_name in layers) {
                        _this.tile_indexes[layer_name] = (0, _geojsonVt2['default'])(layers[layer_name], {
                            maxZoom: _this.max_zoom, // max zoom to preserve detail on
                            tolerance: 3, // simplification tolerance (higher means simpler)
                            extent: _geo2['default'].tile_scale, // tile extent (both width and height)
                            buffer: 0.0001 // tile buffer on each side
                        });
                    }

                    _this.loaded = true;
                    return data;
                });
            }

            return this.load_data.then(function () {
                for (var layer_name in _this.tile_indexes) {
                    dest.source_data.layers[layer_name] = _this.getTileFeatures(dest, layer_name);
                }
                return dest;
            });
        }
    }, {
        key: 'getTileFeatures',
        value: function getTileFeatures(tile, layer_name) {
            var coords = _geo2['default'].wrapTile(tile.coords, { x: true });

            // request a particular tile
            var t = this.tile_indexes[layer_name].getTile(coords.z, coords.x, coords.y);

            // Convert from MVT-style JSON struct to GeoJSON
            var collection = undefined;
            if (t && t.features) {
                collection = {
                    type: 'FeatureCollection',
                    features: []
                };

                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = _getIterator(t.features), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var feature = _step.value;

                        // GeoJSON feature
                        var f = {
                            type: 'Feature',
                            geometry: {},
                            properties: feature.tags
                        };

                        if (feature.type === 1) {
                            f.geometry.coordinates = feature.geometry.map(function (coord) {
                                return [coord[0], coord[1]];
                            });
                            f.geometry.type = 'MultiPoint';
                        } else if (feature.type === 2 || feature.type === 3) {
                            f.geometry.coordinates = feature.geometry.map(function (ring) {
                                return ring.map(function (coord) {
                                    return [coord[0], coord[1]];
                                });
                            });

                            if (feature.type === 2) {
                                f.geometry.type = 'MultiLineString';
                            } else {
                                f.geometry = (0, _mvt.decodeMultiPolygon)(f.geometry); // un-flatten rings
                                if (f.geometry == null) {
                                    // skip polys that couldn't be decoded (e.g. degenerate)
                                    continue;
                                }
                            }
                        } else {
                            continue;
                        }

                        collection.features.push(f);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }

            return collection;
        }
    }, {
        key: 'formatUrl',
        value: function formatUrl(dest) {
            return this.url;
        }
    }, {
        key: 'parseSourceData',
        value: function parseSourceData(tile, source, response) {
            var parsed_response = JSON.parse(response);
            var layers = this.getLayers(parsed_response);
            this.preprocessLayers(layers);
            source.layers = layers;
        }
    }, {
        key: 'preprocessLayers',
        value: function preprocessLayers(layers) {
            for (var key in layers) {
                var layer = layers[key];
                this.preprocessFeatures(layer.features);
            }
        }

        // Preprocess features. Currently used to add a new "centroid" feature for polygon labeling
    }, {
        key: 'preprocessFeatures',
        value: function preprocessFeatures(features) {
            // Define centroids for polygons for centroid label placement
            // Avoids redundant label placement for each generated tile at higher zoom levels
            if (this.config.generate_label_centroids) {
                (function () {
                    var features_centroid = [];
                    var centroid_properties = { "label_placement": "yes" };

                    features.forEach(function (feature) {
                        var coordinates = undefined,
                            centroid_feature = undefined;
                        switch (feature.geometry.type) {
                            case 'Polygon':
                                coordinates = feature.geometry.coordinates;
                                centroid_feature = getCentroidFeatureForPolygon(coordinates, feature.properties, centroid_properties);
                                features_centroid.push(centroid_feature);
                                break;
                            case 'MultiPolygon':
                                // Add centroid feature for largest polygon
                                coordinates = feature.geometry.coordinates;
                                var max_area = -Infinity;
                                var max_area_index = 0;
                                for (var index = 0; index < coordinates.length; index++) {
                                    var area = _geo2['default'].polygonArea(coordinates[index]);
                                    if (area > max_area) {
                                        max_area = area;
                                        max_area_index = index;
                                    }
                                }
                                centroid_feature = getCentroidFeatureForPolygon(coordinates[max_area_index], feature.properties, centroid_properties);
                                features_centroid.push(centroid_feature);
                                break;
                        }
                    });

                    // append centroid features to features array
                    Array.prototype.push.apply(features, features_centroid);
                })();
            }

            return features;
        }

        // Detect single or multiple layers in returned data
    }, {
        key: 'getLayers',
        value: function getLayers(data) {
            if (data.type === 'Feature' || data.type === 'FeatureCollection') {
                return { _default: data };
            } else {
                return data;
            }
        }
    }]);

    return GeoJSONSource;
})(_data_source.NetworkSource);

exports.GeoJSONSource = GeoJSONSource;

var GeoJSONTileSource = (function (_NetworkTileSource) {
    _inherits(GeoJSONTileSource, _NetworkTileSource);

    function GeoJSONTileSource(source) {
        _classCallCheck(this, GeoJSONTileSource);

        _get(Object.getPrototypeOf(GeoJSONTileSource.prototype), 'constructor', this).call(this, source);

        // Check for URL tile pattern, if not found, treat as standalone GeoJSON/TopoJSON object
        if (!this.urlHasTilePattern(this.url)) {
            // Check instance type from parent class
            if (this instanceof GeoJSONTileSource) {
                // Replace instance type
                return new GeoJSONSource(source);
            } else {
                // Pass back to parent class to instantiate
                return null;
            }
        }
        return this;
    }

    _createClass(GeoJSONTileSource, [{
        key: 'parseSourceData',
        value: function parseSourceData(tile, source, response) {
            var data = JSON.parse(response);
            this.prepareGeoJSON(data, tile, source);
        }
    }, {
        key: 'prepareGeoJSON',
        value: function prepareGeoJSON(data, tile, source) {
            // Apply optional data transform
            if (typeof this.transform === 'function') {
                data = this.transform(data, this.extra_data);
            }

            source.layers = GeoJSONSource.prototype.getLayers(data);

            // A "synthetic" tile that adjusts the tile min anchor to account for tile longitude wrapping
            var anchor = {
                coords: tile.coords,
                min: _geo2['default'].metersForTile(_geo2['default'].wrapTile(tile.coords, { x: true }))
            };

            _data_source2['default'].projectData(source); // mercator projection
            _data_source2['default'].scaleData(source, anchor); // re-scale from meters to local tile coords
        }
    }]);

    return GeoJSONTileSource;
})(_data_source.NetworkTileSource);

exports.GeoJSONTileSource = GeoJSONTileSource;

_data_source2['default'].register(GeoJSONTileSource, 'GeoJSON'); // prefered shorter name
_data_source2['default'].register(GeoJSONTileSource, 'GeoJSONTiles'); // for backwards-compatibility

// Helper function to create centroid point feature from polygon coordinates and provided feature meta-data
function getCentroidFeatureForPolygon(coordinates, properties, newProperties) {
    var centroid = _geo2['default'].centroid(coordinates);

    // clone properties and mixix newProperties
    var centroid_properties = {};
    _Object$assign(centroid_properties, properties, newProperties);

    return {
        type: "Feature",
        properties: centroid_properties,
        geometry: {
            type: "Point",
            coordinates: centroid
        }
    };
}

},{"../geo":201,"./data_source":221,"./mvt":223,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/assign":6,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/get":21,"babel-runtime/helpers/inherits":22,"babel-runtime/helpers/interop-require-default":23,"geojson-vt":143}],223:[function(_dereq_,module,exports){
'use strict';

var _get = _dereq_('babel-runtime/helpers/get')['default'];

var _inherits = _dereq_('babel-runtime/helpers/inherits')['default'];

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.decodeMultiPolygon = decodeMultiPolygon;

var _data_source = _dereq_('./data_source');

var _data_source2 = _interopRequireDefault(_data_source);

var _geo = _dereq_('../geo');

var _geo2 = _interopRequireDefault(_geo);

var _pbf = _dereq_('pbf');

var _pbf2 = _interopRequireDefault(_pbf);

var _vectorTile = _dereq_('vector-tile');

/**
 Mapbox Vector Tile format
 @class MVTSource
*/

var MVTSource = (function (_NetworkTileSource) {
    _inherits(MVTSource, _NetworkTileSource);

    function MVTSource(source) {
        _classCallCheck(this, MVTSource);

        _get(Object.getPrototypeOf(MVTSource.prototype), 'constructor', this).call(this, source);
        this.response_type = "arraybuffer"; // binary data
    }

    // Decode multipolygons, which are encoded as a single set of rings
    // Winding order of first ring is assumed to indicate exterior ring,
    // the opposite winding order indicates the start of a new polygon.

    _createClass(MVTSource, [{
        key: 'parseSourceData',
        value: function parseSourceData(tile, source, response) {
            // Convert Mapbox vector tile to GeoJSON
            var data = new Uint8Array(response);
            var buffer = new _pbf2['default'](data);
            source.data = new _vectorTile.VectorTile(buffer);
            source.layers = this.toGeoJSON(source.data);
            delete source.data; // comment out to save raw data for debugging
        }

        // Loop through layers/features using Mapbox lib API, convert to GeoJSON features
        // Returns an object with keys for each layer, e.g. { layer: geojson }
    }, {
        key: 'toGeoJSON',
        value: function toGeoJSON(tile) {
            var layers = {};
            for (var l in tile.layers) {
                var layer = tile.layers[l];
                var layer_geojson = {
                    type: 'FeatureCollection',
                    features: []
                };

                for (var f = 0; f < layer.length; f++) {
                    var feature = layer.feature(f);
                    var feature_geojson = {
                        type: 'Feature',
                        geometry: {},
                        properties: feature.properties
                    };

                    var geometry = feature_geojson.geometry;
                    var coordinates = feature.loadGeometry();
                    for (var r = 0; r < coordinates.length; r++) {
                        var ring = coordinates[r];
                        for (var c = 0; c < ring.length; c++) {
                            ring[c] = [ring[c].x, ring[c].y];
                        }
                    }
                    geometry.coordinates = coordinates;

                    if (_vectorTile.VectorTileFeature.types[feature.type] === 'Point') {
                        geometry.type = 'Point';
                        geometry.coordinates = geometry.coordinates[0][0];
                    } else if (_vectorTile.VectorTileFeature.types[feature.type] === 'LineString') {
                        if (coordinates.length === 1) {
                            geometry.type = 'LineString';
                            geometry.coordinates = geometry.coordinates[0];
                        } else {
                            geometry.type = 'MultiLineString';
                        }
                    } else if (_vectorTile.VectorTileFeature.types[feature.type] === 'Polygon') {
                        geometry = decodeMultiPolygon(geometry); // un-flatten rings
                    }

                    layer_geojson.features.push(feature_geojson);
                }
                layers[l] = layer_geojson;
            }
            return layers;
        }
    }]);

    return MVTSource;
})(_data_source.NetworkTileSource);

exports.MVTSource = MVTSource;

function decodeMultiPolygon(geom) {
    var polys = [];
    var poly = [];
    var outer_winding = undefined;
    for (var r = 0; r < geom.coordinates.length; r++) {
        var ring = geom.coordinates[r];
        var winding = _geo2['default'].ringWinding(ring);
        if (winding == null) {
            continue; // skip zero-area rings
        }

        outer_winding = outer_winding || winding; // assume first ring indicates outer ring winding

        if (winding === outer_winding && poly.length > 0) {
            polys.push(poly);
            poly = [];
        }
        poly.push(ring);
    }
    if (poly.length > 0) {
        polys.push(poly);
    }

    // Single or multi?
    if (polys.length === 1) {
        geom.type = 'Polygon';
        geom.coordinates = polys[0];
    } else if (polys.length > 1) {
        geom.type = 'MultiPolygon';
        geom.coordinates = polys;
    } else {
        geom = null;
    }

    return geom;
}

_data_source2['default'].register(MVTSource, 'MVT');

},{"../geo":201,"./data_source":221,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/get":21,"babel-runtime/helpers/inherits":22,"babel-runtime/helpers/interop-require-default":23,"pbf":188,"vector-tile":192}],224:[function(_dereq_,module,exports){
'use strict';

var _get = _dereq_('babel-runtime/helpers/get')['default'];

var _inherits = _dereq_('babel-runtime/helpers/inherits')['default'];

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _toConsumableArray = _dereq_('babel-runtime/helpers/to-consumable-array')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _data_source = _dereq_('./data_source');

var _data_source2 = _interopRequireDefault(_data_source);

var _tile = _dereq_('../tile');

var _tile2 = _interopRequireDefault(_tile);

var _geo = _dereq_('../geo');

var _geo2 = _interopRequireDefault(_geo);

var RasterTileSource = (function (_NetworkTileSource) {
    _inherits(RasterTileSource, _NetworkTileSource);

    function RasterTileSource(source) {
        _classCallCheck(this, RasterTileSource);

        _get(Object.getPrototypeOf(RasterTileSource.prototype), 'constructor', this).call(this, source);

        if (this.rasters.indexOf(this.name) === -1) {
            this.rasters.unshift(this.name); // add this raster as the first
        }
        this.filtering = source.filtering; // optional texture filtering (nearest, linear, mipmap)

        // save texture objects by tile key, so URL remains stable if tile is built multiple times,
        // e.g. avoid re-loading the same tile texture under a different subdomain when using tile hosts
        this.textures = {};
    }

    _createClass(RasterTileSource, [{
        key: 'load',
        value: function load(tile) {
            tile.source_data = {};
            tile.source_data.layers = {};
            tile.pad_scale = this.pad_scale;
            tile.rasters = [].concat(_toConsumableArray(this.rasters)); // copy list of rasters to load for tile

            // Generate a single quad that fills the entire tile
            var scale = _geo2['default'].tile_scale;
            tile.source_data.layers = {
                _default: {
                    type: 'FeatureCollection',
                    features: [{
                        geometry: {
                            type: 'Polygon',
                            coordinates: [[[0, 0], [scale, 0], [scale, -scale], [0, -scale], [0, 0]]]
                        },
                        properties: {}
                    }]
                }
            };

            tile.default_winding = 'CW';
            return _Promise.resolve(tile);
        }

        // Return texture info for a raster tile
    }, {
        key: 'tileTexture',
        value: function tileTexture(tile) {
            var key = tile.coords.key;
            if (!this.textures[key]) {
                var coords = _tile2['default'].coordinateWithMaxZoom(tile.coords, this.max_zoom);
                var url = this.formatUrl(this.url, { coords: coords });
                this.textures[key] = { url: url, filtering: this.filtering, coords: coords };
            }
            return this.textures[key];
        }
    }]);

    return RasterTileSource;
})(_data_source.NetworkTileSource);

exports.RasterTileSource = RasterTileSource;

_data_source2['default'].register(RasterTileSource, 'Raster');

},{"../geo":201,"../tile":240,"./data_source":221,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/get":21,"babel-runtime/helpers/inherits":22,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/to-consumable-array":25}],225:[function(_dereq_,module,exports){
'use strict';

var _get = _dereq_('babel-runtime/helpers/get')['default'];

var _inherits = _dereq_('babel-runtime/helpers/inherits')['default'];

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _Object$keys = _dereq_('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _data_source = _dereq_('./data_source');

var _data_source2 = _interopRequireDefault(_data_source);

var _geojson = _dereq_('./geojson');

var _topojson = _dereq_('topojson');

var _topojson2 = _interopRequireDefault(_topojson);

/**
 TopoJSON standalone (non-tiled) source
 Uses geojson-vt split into tiles client-side
*/

var TopoJSONSource = (function (_GeoJSONSource) {
    _inherits(TopoJSONSource, _GeoJSONSource);

    function TopoJSONSource() {
        _classCallCheck(this, TopoJSONSource);

        _get(Object.getPrototypeOf(TopoJSONSource.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(TopoJSONSource, [{
        key: 'parseSourceData',
        value: function parseSourceData(tile, source, response) {
            var data = JSON.parse(response);
            data = this.toGeoJSON(data);

            var layers = this.getLayers(data);
            _get(Object.getPrototypeOf(TopoJSONSource.prototype), 'preprocessLayers', this).call(this, layers);
            source.layers = layers;
        }
    }, {
        key: 'toGeoJSON',
        value: function toGeoJSON(data) {
            // Single layer
            if (data.objects && _Object$keys(data.objects).length === 1) {
                var layer = _Object$keys(data.objects)[0];
                data = getTopoJSONFeature(data, data.objects[layer]);
            }
            // Multiple layers
            else {
                    var layers = {};
                    for (var key in data.objects) {
                        layers[key] = getTopoJSONFeature(data, data.objects[key]);
                    }
                    data = layers;
                }
            return data;
        }
    }]);

    return TopoJSONSource;
})(_geojson.GeoJSONSource);

exports.TopoJSONSource = TopoJSONSource;

function getTopoJSONFeature(topology, object) {
    var feature = _topojson2['default'].feature(topology, object);

    // Convert single feature to a feature collection
    if (feature.type === 'Feature') {
        feature = {
            type: 'FeatureCollection',
            features: [feature]
        };
    }
    return feature;
}

/**
 Mapzen/OSM.US-style TopoJSON vector tiles
 @class TopoJSONTileSource
*/

var TopoJSONTileSource = (function (_GeoJSONTileSource) {
    _inherits(TopoJSONTileSource, _GeoJSONTileSource);

    function TopoJSONTileSource(source) {
        _classCallCheck(this, TopoJSONTileSource);

        var _this = _get(Object.getPrototypeOf(TopoJSONTileSource.prototype), 'constructor', this).call(this, source);

        // Replace with non-tiled source if tiled source failed to instantiate
        if (_this !== this) {
            return new TopoJSONSource(source);
        }
    }

    _createClass(TopoJSONTileSource, [{
        key: 'parseSourceData',
        value: function parseSourceData(tile, source, response) {
            var data = JSON.parse(response);
            data = TopoJSONSource.prototype.toGeoJSON(data);
            this.prepareGeoJSON(data, tile, source);
        }
    }]);

    return TopoJSONTileSource;
})(_geojson.GeoJSONTileSource);

exports.TopoJSONTileSource = TopoJSONTileSource;

_data_source2['default'].register(TopoJSONTileSource, 'TopoJSON'); // prefered shorter name
_data_source2['default'].register(TopoJSONTileSource, 'TopoJSONTiles'); // for backwards-compatibility

},{"./data_source":221,"./geojson":222,"babel-runtime/core-js/object/keys":12,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/get":21,"babel-runtime/helpers/inherits":22,"babel-runtime/helpers/interop-require-default":23,"topojson":191}],226:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _get = _dereq_('babel-runtime/helpers/get')['default'];

var _inherits = _dereq_('babel-runtime/helpers/inherits')['default'];

var _toConsumableArray = _dereq_('babel-runtime/helpers/to-consumable-array')['default'];

var _slicedToArray = _dereq_('babel-runtime/helpers/sliced-to-array')['default'];

var _Object$keys = _dereq_('babel-runtime/core-js/object/keys')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.mergeTrees = mergeTrees;
exports.groupProps = groupProps;
exports.calculateDraw = calculateDraw;
exports.parseLayerTree = parseLayerTree;
exports.parseLayers = parseLayers;
exports.matchFeature = matchFeature;

var _style_manager = _dereq_('./style_manager');

var _style_parser = _dereq_('./style_parser');

var _utilsUtils = _dereq_('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _utilsLog = _dereq_('../utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _utilsMerge = _dereq_('../utils/merge');

var _utilsMerge2 = _interopRequireDefault(_utilsMerge);

var _matchFeature = _dereq_('match-feature');

var whiteList = ['filter', 'draw', 'visible', 'data'];

exports.whiteList = whiteList;
var layer_cache = {};

exports.layer_cache = layer_cache;
function cacheKey(layers) {
    if (layers.length > 1) {
        var k = layers[0];
        for (var i = 1; i < layers.length; i++) {
            k += '/' + layers[i];
        }

        return k;
    }
    return layers[0];
}

// Merge matching layer trees into a final draw group

function mergeTrees(matchingTrees, group) {
    var draws = undefined,
        treeDepth = 0;

    var draw = {
        visible: true // visible by default
    };

    // Find deepest tree
    for (var t = 0; t < matchingTrees.length; t++) {
        if (matchingTrees[t].length > treeDepth) {
            treeDepth = matchingTrees[t].length;
        }
    }

    // No layers to parse
    if (treeDepth === 0) {
        return null;
    }

    // Iterate trees in parallel

    var _loop = function (x) {
        // Pull out the requested draw group, for each tree, at this depth
        draws = matchingTrees.map(function (tree) {
            return tree[x] && tree[x][group];
        });
        if (draws.length === 0) {
            return 'continue';
        }

        // Sort by layer name before merging, so layers are applied deterministically
        // when multiple layers modify the same properties
        draws.sort(function (a, b) {
            return (a && a.layer_name) > (b && b.layer_name) ? 1 : -1;
        });

        // Merge draw objects
        _utilsMerge2['default'].apply(undefined, [draw].concat(_toConsumableArray(draws)));

        // Remove layer names, they were only used transiently to sort and calculate final layer
        // (final merged names will not be accurate since only one tree can win)
        delete draw.layer_name;
    };

    for (var x = 0; x < treeDepth; x++) {
        var _ret = _loop(x);

        if (_ret === 'continue') continue;
    }

    // Short-circuit if not visible
    if (draw.visible === false) {
        return null;
    }

    return draw;
}

var blacklist = ['any', 'all', 'not', 'none'];

var Layer = (function () {
    function Layer(_ref) {
        var layer = _ref.layer;
        var name = _ref.name;
        var parent = _ref.parent;
        var draw = _ref.draw;
        var visible = _ref.visible;
        var filter = _ref.filter;

        _classCallCheck(this, Layer);

        this.id = Layer.id++;
        this.config = layer;
        this.parent = parent;
        this.name = name;
        this.full_name = this.parent ? this.parent.full_name + ':' + this.name : this.name;
        this.draw = draw;
        this.filter = filter;
        this.is_built = false;
        this.visible = visible !== undefined ? visible : this.parent && this.parent.visible;

        // Denormalize layer name to draw groups
        if (this.draw) {
            for (var group in this.draw) {
                this.draw[group] = this.draw[group] || {};
                this.draw[group].layer_name = this.full_name;
            }
        }
    }

    _createClass(Layer, [{
        key: 'build',
        value: function build() {
            (0, _utilsLog2['default'])('trace', 'Building layer \'' + this.full_name + '\'');
            this.buildFilter();
            this.buildDraw();
            this.is_built = true;
        }
    }, {
        key: 'buildDraw',
        value: function buildDraw() {
            this.draw = _utilsUtils2['default'].stringsToFunctions(this.draw, _style_parser.StyleParser.wrapFunction);
            this.calculatedDraw = calculateDraw(this);
        }
    }, {
        key: 'buildFilter',
        value: function buildFilter() {
            this.filter = _utilsUtils2['default'].stringsToFunctions(this.filter, _style_parser.StyleParser.wrapFunction);

            var type = typeof this.filter;
            if (this.filter != null && type !== 'object' && type !== 'function') {
                // Invalid filter
                var msg = 'Filter for layer ' + this.full_name + ' is invalid, filter value must be an object or function, ';
                msg += 'but was set to `filter: ' + this.filter + '` instead';
                (0, _utilsLog2['default'])('warn', msg);
                return;
            }

            try {
                this.buildZooms();
                this.buildPropMatches();
                if (this.filter != null && (typeof this.filter === 'function' || _Object$keys(this.filter).length > 0)) {
                    this.filter = (0, _matchFeature.match)(this.filter);
                } else {
                    this.filter = null;
                }
            } catch (e) {
                // Invalid filter
                var msg = 'Filter for layer ' + this.full_name + ' is invalid, `filter: ' + JSON.stringify(this.filter) + '` ';
                msg += 'failed with error ' + e.message + ', ' + e.stack;
                (0, _utilsLog2['default'])('warn', msg);
            }
        }

        // Zooms often cull large swaths of the layer tree, so they get special treatment and are checked first
    }, {
        key: 'buildZooms',
        value: function buildZooms() {
            var zoom = this.filter && this.filter.$zoom;
            var ztype = typeof zoom;
            if (zoom != null && ztype !== 'function') {
                // don't accelerate function-based filters
                this.zooms = {};

                if (ztype === 'number') {
                    this.zooms[zoom] = true;
                } else if (Array.isArray(zoom)) {
                    for (var z = 0; z < zoom.length; z++) {
                        this.zooms[zoom[z]] = true;
                    }
                } else if (ztype === 'object' && (zoom.min != null || zoom.max != null)) {
                    var zmin = zoom.min || 0;
                    var zmax = zoom.max || 25; // TODO: replace constant for max possible zoom
                    for (var z = zmin; z < zmax; z++) {
                        this.zooms[z] = true;
                    }
                }

                delete this.filter.$zoom; // don't process zoom through usual generic filter logic
            }
        }
    }, {
        key: 'buildPropMatches',
        value: function buildPropMatches() {
            var _this = this;

            if (!this.filter || Array.isArray(this.filter) || typeof this.filter === 'function') {
                return;
            }

            _Object$keys(this.filter).forEach(function (key) {
                if (blacklist.indexOf(key) === -1) {
                    var val = _this.filter[key];
                    var type = typeof val;
                    var array = Array.isArray(val);

                    if (!(array || type === 'string' || type === 'number')) {
                        return;
                    }

                    if (key[0] === '$') {
                        // Context property
                        _this.context_prop_matches = _this.context_prop_matches || [];
                        _this.context_prop_matches.push([key.substring(1), array ? val : [val]]);
                    } else {
                        // Feature property
                        _this.feature_prop_matches = _this.feature_prop_matches || [];
                        _this.feature_prop_matches.push([key, array ? val : [val]]);
                    }

                    delete _this.filter[key];
                }
            });
        }
    }, {
        key: 'doPropMatches',
        value: function doPropMatches(context) {
            if (this.feature_prop_matches) {
                for (var r = 0; r < this.feature_prop_matches.length; r++) {
                    var _match = this.feature_prop_matches[r];
                    var val = context.feature.properties[_match[0]];
                    if (!val || _match[1].indexOf(val) === -1) {
                        return false;
                    }
                }
            }

            if (this.context_prop_matches) {
                for (var r = 0; r < this.context_prop_matches.length; r++) {
                    var _match2 = this.context_prop_matches[r];
                    var val = context[_match2[0]];
                    if (!val || _match2[1].indexOf(val) === -1) {
                        return false;
                    }
                }
            }

            return true;
        }
    }]);

    return Layer;
})();

Layer.id = 0;

var LayerLeaf = (function (_Layer) {
    _inherits(LayerLeaf, _Layer);

    function LayerLeaf(config) {
        _classCallCheck(this, LayerLeaf);

        _get(Object.getPrototypeOf(LayerLeaf.prototype), 'constructor', this).call(this, config);
        this.is_leaf = true;
    }

    return LayerLeaf;
})(Layer);

exports.LayerLeaf = LayerLeaf;

var LayerTree = (function (_Layer2) {
    _inherits(LayerTree, _Layer2);

    function LayerTree(config) {
        _classCallCheck(this, LayerTree);

        _get(Object.getPrototypeOf(LayerTree.prototype), 'constructor', this).call(this, config);
        this.is_tree = true;
        this.layers = config.layers || [];
    }

    _createClass(LayerTree, [{
        key: 'addLayer',
        value: function addLayer(layer) {
            this.layers.push(layer);
        }
    }, {
        key: 'buildDrawGroups',
        value: function buildDrawGroups(context) {
            var layers = [],
                layer_ids = [];
            matchFeature(context, [this], layers, layer_ids);

            if (layers.length > 0) {
                var cache_key = cacheKey(layer_ids);

                // Only evaluate each layer combination once (undefined means not yet evaluated,
                // null means evaluated with no draw object)
                if (layer_cache[cache_key] === undefined) {
                    // Find all the unique visible draw blocks for this layer tree
                    var draw_groups = layers.map(function (x) {
                        return x && x.visible !== false && x.calculatedDraw;
                    });
                    var draw_keys = {};

                    for (var r = 0; r < draw_groups.length; r++) {
                        var layer = draw_groups[r];
                        if (!layer) {
                            continue;
                        }
                        for (var g = 0; g < layer.length; g++) {
                            var group = layer[g];
                            for (var key in group) {
                                draw_keys[key] = true;
                            }
                        }
                    }

                    // Calculate each draw group
                    for (var draw_key in draw_keys) {
                        layer_cache[cache_key] = layer_cache[cache_key] || {};
                        layer_cache[cache_key][draw_key] = mergeTrees(draw_groups, draw_key);

                        // Only save the ones that weren't null
                        if (!layer_cache[cache_key][draw_key]) {
                            delete layer_cache[cache_key][draw_key];
                        } else {
                            layer_cache[cache_key][draw_key].key = cache_key + '/' + draw_key;
                            layer_cache[cache_key][draw_key].layers = layers.map(function (x) {
                                return x && x.full_name;
                            });
                        }
                    }

                    // No layers evaluated
                    if (layer_cache[cache_key] && _Object$keys(layer_cache[cache_key]).length === 0) {
                        layer_cache[cache_key] = null;
                    }
                }
                return layer_cache[cache_key];
            }
        }
    }]);

    return LayerTree;
})(Layer);

exports.LayerTree = LayerTree;

function isWhiteListed(key) {
    return whiteList.indexOf(key) > -1;
}

function isEmpty(obj) {
    return _Object$keys(obj).length === 0;
}

function groupProps(obj) {
    var whiteListed = {},
        nonWhiteListed = {};

    for (var key in obj) {
        if (isWhiteListed(key)) {
            whiteListed[key] = obj[key];
        } else {
            nonWhiteListed[key] = obj[key];
        }
    }
    return [whiteListed, nonWhiteListed];
}

function calculateDraw(layer) {

    var draw = [];

    if (layer.parent) {
        var cs = layer.parent.calculatedDraw || [];
        draw.push.apply(draw, _toConsumableArray(cs));
    }

    draw.push(layer.draw);
    return draw;
}

function parseLayerTree(name, layer, parent) {

    var properties = { name: name, layer: layer, parent: parent };

    var _groupProps = groupProps(layer);

    var _groupProps2 = _slicedToArray(_groupProps, 2);

    var whiteListed = _groupProps2[0];
    var nonWhiteListed = _groupProps2[1];

    var empty = isEmpty(nonWhiteListed);
    var Create = undefined;

    if (empty && parent != null) {
        Create = LayerLeaf;
    } else {
        Create = LayerTree;
    }

    var r = new Create(_Object$assign(properties, whiteListed));

    if (parent) {
        parent.addLayer(r);
    }

    if (!empty) {
        for (var key in nonWhiteListed) {
            var property = nonWhiteListed[key];
            if (typeof property === 'object' && !Array.isArray(property)) {
                parseLayerTree(key, property, r);
            } else {
                // Invalid layer
                var msg = 'Layer value must be an object: cannot create layer \'' + key + ': ' + JSON.stringify(property) + '\'';
                msg += ', under parent layer \'' + r.full_name + '\'.';

                // If the parent is a style name, this may be an incorrectly nested layer
                if (_style_manager.Styles[r.name]) {
                    msg += ' The parent \'' + r.name + '\' is also the name of a style, did you mean to create a \'draw\' group';
                    if (parent) {
                        msg += ' under \'' + parent.name + '\'';
                    }
                    msg += ' instead?';
                }
                (0, _utilsLog2['default'])('warn', msg);
            }
        }
    }

    return r;
}

function parseLayers(layers) {
    var layer_trees = {};

    for (var key in layers) {
        var layer = layers[key];
        if (layer) {
            layer_trees[key] = parseLayerTree(key, layer);
        }
    }

    return layer_trees;
}

function doesMatch(layer, context) {
    if (!layer.is_built) {
        layer.build();
    }

    // zoom pre-filter: skip rest of filter if out of layer zoom range
    if (layer.zooms != null && !layer.zooms[context.zoom]) {
        return false;
    }

    // direct feature property matches
    if (!layer.doPropMatches(context)) {
        return false;
    }

    // any remaining filter (more complex matches or dynamic function)
    return layer.filter == null || layer.filter(context);
}

function matchFeature(context, layers, collected_layers, collected_layers_ids) {
    var matched = false;
    var childMatched = false;

    if (layers.length === 0) {
        return;
    }

    for (var r = 0; r < layers.length; r++) {
        var current = layers[r];

        if (current.is_leaf) {
            if (doesMatch(current, context)) {
                matched = true;
                collected_layers.push(current);
                collected_layers_ids.push(current.id);
            }
        } else if (current.is_tree) {
            if (doesMatch(current, context)) {
                matched = true;

                childMatched = matchFeature(context, current.layers, collected_layers, collected_layers_ids);

                if (!childMatched) {
                    collected_layers.push(current);
                    collected_layers_ids.push(current.id);
                }
            }
        }
    }

    return matched;
}

},{"../utils/log":243,"../utils/merge":244,"../utils/utils":248,"./style_manager":234,"./style_parser":235,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/keys":12,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/get":21,"babel-runtime/helpers/inherits":22,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/sliced-to-array":24,"babel-runtime/helpers/to-consumable-array":25,"match-feature":186}],227:[function(_dereq_,module,exports){
// Renders an array specifying a line pattern of alternating dashes and spaces,
// similar to an SVG `dasharray` or Canvas setLineDash(), into a byte array of RGBA pixels
// Returns:
// {
//    pixel: rendered image in Uint8Array buffer
//    length: pixel length of rendered dash pattern (sum of all dashes and spaces)
// }
//
// https://www.w3.org/TR/SVG/painting.html#StrokeDasharrayProperty
// https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash

"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = renderDashArray;
var default_dash_color = [255, 255, 255, 255];
var default_background_color = [0, 0, 0, 0];

function renderDashArray(pattern) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var dash_pixel = options.dash_color || default_dash_color;
    var background_color = options.background_color || default_background_color;
    var dashes = pattern;

    // If pattern is odd, repeat it to make it even (see SVG spec)
    if (dashes.length % 2 === 1) {
        Array.prototype.push.apply(dashes, dashes);
    }

    var dash = true;
    var pixels = [];
    for (var i = 0; i < dashes.length; i++) {
        var segment = dashes[i];
        for (var s = 0; s < segment; s++) {
            Array.prototype.push.apply(pixels, dash ? dash_pixel : background_color);
        }
        dash = !dash; // alternate between dashes and spaces
    }

    pixels = new Uint8Array(pixels); // convert to typed array
    var length = pixels.length / 4; // one RGBA byte sequences to one pixel

    return { pixels: pixels, length: length };
}

module.exports = exports["default"];

},{}],228:[function(_dereq_,module,exports){
// Line rendering style

'use strict';

var _Object$create = _dereq_('babel-runtime/core-js/object/create')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _style = _dereq_('../style');

var _style_parser = _dereq_('../style_parser');

var _style_manager = _dereq_('../style_manager');

var _glConstants = _dereq_('../../gl/constants');

var _glConstants2 = _interopRequireDefault(_glConstants);

// web workers don't have access to GL context, so import all GL constants

var _glTexture = _dereq_('../../gl/texture');

var _glTexture2 = _interopRequireDefault(_glTexture);

var _glVertex_layout = _dereq_('../../gl/vertex_layout');

var _glVertex_layout2 = _interopRequireDefault(_glVertex_layout);

var _buildersPolylines = _dereq_('../../builders/polylines');

var _dasharray = _dereq_('./dasharray');

var _dasharray2 = _interopRequireDefault(_dasharray);

var _geo = _dereq_('../../geo');

var _geo2 = _interopRequireDefault(_geo);

var _polygonsPolygons = _dereq_('../polygons/polygons');

var Lines = _Object$create(_style.Style);

exports.Lines = Lines;
_Object$assign(Lines, {
    name: 'lines',
    built_in: true,
    vertex_shader_src: _polygonsPolygons.shaderSrc_polygonsVertex,
    fragment_shader_src: _polygonsPolygons.shaderSrc_polygonsFragment,
    selection: true, // turn feature selection on

    init: function init() {
        _style.Style.init.apply(this, arguments);

        // Basic attributes, others can be added (see texture UVs below)
        var attribs = [{ name: 'a_position', size: 4, type: _glConstants2['default'].SHORT, normalized: false }, { name: 'a_extrude', size: 4, type: _glConstants2['default'].SHORT, normalized: false }, { name: 'a_color', size: 4, type: _glConstants2['default'].UNSIGNED_BYTE, normalized: true }];

        // Tell the shader we want a order in vertex attributes, and to extrude lines
        this.defines.TANGRAM_LAYER_ORDER = true;
        this.defines.TANGRAM_EXTRUDE_LINES = true;

        // Optional feature selection
        if (this.selection) {
            attribs.push({ name: 'a_selection_color', size: 4, type: _glConstants2['default'].UNSIGNED_BYTE, normalized: true });
        }

        // Optional line texture or dash array
        // (latter will be rendered at compile-time, when GL context available)
        if (this.texture || this.dash) {
            this.texcoords = true;
        }

        // Optional texture UVs
        if (this.texcoords) {
            this.defines.TANGRAM_TEXTURE_COORDS = true;

            // Scaling factor to add precision to line texture V coordinate packed as normalized short
            this.defines.TANGRAM_V_SCALE_ADJUST = _geo2['default'].tile_scale;

            // Add vertex attribute for UVs only when needed
            attribs.push({ name: 'a_texcoord', size: 2, type: _glConstants2['default'].UNSIGNED_SHORT, normalized: true });
        }

        this.vertex_layout = new _glVertex_layout2['default'](attribs);

        // Additional single-allocated object used for holding outline style as it is processed
        // Separate from this.feature_style so that outline properties do not overwrite calculated
        // inline properties (outline call is made *within* the inline call)
        this.outline_feature_style = {};
        this.inline_feature_style = this.feature_style; // save reference to main computed style object
    },

    // Override
    compile: function compile() {
        this.parseLineTexture();
        return _style.Style.compile.apply(this, arguments);
    },

    // Optionally apply a dash array pattern to this line
    parseLineTexture: function parseLineTexture() {
        var _this = this;

        // Specify a line pattern
        if (this.dash) {
            // Optional background color for dash pattern (defaults transparent)
            if (this.dash_background_color) {
                this.dash_background_color = _style_parser.StyleParser.parseColor(this.dash_background_color);
                this.defines.TANGRAM_LINE_BACKGROUND_COLOR = 'vec3(' + this.dash_background_color.slice(0, 3).join(', ') + ')';
            }

            // Render line pattern
            var dash = (0, _dasharray2['default'])(this.dash);
            this.texture = '_' + this.name + '_dasharray';
            _glTexture2['default'].create(this.gl, this.texture, {
                data: dash.pixels,
                height: dash.length,
                width: 1,
                filtering: 'nearest'
            });
        }

        // Specify a line texture (either directly, or rendered dash pattern from above)
        if (this.texture) {
            this.defines.TANGRAM_LINE_TEXTURE = true;
            this.defines.TANGRAM_ALPHA_TEST = 0.5; // pixels below this threshold are transparent
            this.shaders.uniforms = this.shaders.uniforms || {};
            this.shaders.uniforms.u_texture = this.texture;
            this.shaders.uniforms.u_texture_ratio = 1;

            // update line pattern aspect ratio after texture loads
            _glTexture2['default'].getInfo(this.texture).then(function (texture) {
                if (texture) {
                    _this.shaders.uniforms.u_texture_ratio = texture.height / texture.width;
                }
            });
        }
    },

    // Calculate width at zoom given in `context`
    calcWidth: function calcWidth(width, context) {
        return width && _style_parser.StyleParser.cacheDistance(width, context) || 0;
    },

    // Calculate width at next zoom (used for line width interpolation)
    calcWidthNextZoom: function calcWidthNextZoom(width, context) {
        context.zoom++;
        var val = this.calcWidth(width, context);
        context.zoom--;
        return val;
    },

    _parseFeature: function _parseFeature(feature, draw, context) {
        var style = this.feature_style;

        // line width in meters
        var width = this.calcWidth(draw.width, context);
        if (width < 0) {
            return; // skip lines with negative width
        }
        var next_width = this.calcWidthNextZoom(draw.next_width, context);

        if (width === 0 && next_width === 0 || next_width < 0) {
            return; // skip lines that don't interpolate to a positive value at next zoom
        }

        // convert to units and relative change from previous zoom
        // NB: multiply by 2 because a given width is twice as big in screen space at the next zoom
        style.width = width * context.units_per_meter_overzoom;
        style.next_width = next_width * 2 - width;
        style.next_width *= context.units_per_meter_overzoom;
        style.next_width /= 2; // NB: divide by 2 because extrusion width is halved in builder - remove?

        style.color = this.parseColor(draw.color, context);
        if (!style.color) {
            return;
        }

        // height defaults to feature height, but extrude style can dynamically adjust height by returning a number or array (instead of a boolean)
        style.z = draw.z && _style_parser.StyleParser.cacheDistance(draw.z || 0, context) || _style_parser.StyleParser.defaults.z;
        style.height = feature.properties.height || _style_parser.StyleParser.defaults.height;
        style.extrude = _style_parser.StyleParser.evalProp(draw.extrude, context);
        if (style.extrude) {
            if (typeof style.extrude === 'number') {
                style.height = style.extrude;
            } else if (Array.isArray(style.extrude)) {
                style.height = style.extrude[1];
            }
        }

        // Raise line height if extruded
        if (style.extrude && style.height) {
            style.z += style.height;
        }

        style.z *= _geo2['default'].height_scale; // provide sub-meter precision of height values
        style.height *= _geo2['default'].height_scale;

        style.cap = draw.cap;
        style.join = draw.join;
        style.miter_limit = draw.miter_limit;
        style.tile_edges = draw.tile_edges; // usually activated for debugging, or rare visualization needs

        // Construct an outline style
        // Reusable outline style object, marked as already wrapped in cache objects (preprocessed = true)
        style.outline = style.outline || { width: {}, next_width: {}, preprocessed: true };

        if (draw.outline && draw.outline.visible !== false && draw.outline.color && draw.outline.width) {
            // outline width in meters
            // NB: multiply by 2 because outline is applied on both sides of line
            var outline_width = this.calcWidth(draw.outline.width, context) * 2;
            var outline_next_width = this.calcWidthNextZoom(draw.outline.next_width, context) * 2;

            if (outline_width === 0 && outline_next_width === 0 || outline_width < 0 || outline_next_width < 0) {
                // skip lines that don't interpolate between zero or greater width
                style.outline.width.value = null;
                style.outline.next_width.value = null;
                style.outline.color = null;
            } else {
                // Maintain consistent outline width around the line fill
                style.outline.width.value = outline_width + width;
                style.outline.next_width.value = outline_next_width + next_width;

                style.outline.color = draw.outline.color;
                style.outline.cap = draw.outline.cap || draw.cap;
                style.outline.join = draw.outline.join || draw.join;
                style.outline.miter_limit = draw.outline.miter_limit || draw.miter_limit;
                style.outline.style = draw.outline.style || this.name;

                // Explicitly defined outline order, or inherited from inner line
                if (draw.outline.order) {
                    style.outline.order = this.parseOrder(draw.outline.order, context);
                } else {
                    style.outline.order = style.order;
                }

                // Don't let outline be above inner line
                if (style.outline.order > style.order) {
                    style.outline.order = style.order;
                }

                // Outlines are always at half-layer intervals to avoid conflicting with inner lines
                style.outline.order -= 0.5;
            }
        } else {
            style.outline.width.value = null;
            style.outline.next_width.value = null;
            style.outline.color = null;
        }

        return style;
    },

    _preprocess: function _preprocess(draw) {
        draw.color = _style_parser.StyleParser.colorCacheObject(draw.color);
        draw.width = _style_parser.StyleParser.cacheObject(draw.width, _style_parser.StyleParser.cacheUnits);
        draw.next_width = _style_parser.StyleParser.cacheObject(draw.width, _style_parser.StyleParser.cacheUnits); // width will be computed for next zoom
        draw.z = _style_parser.StyleParser.cacheObject(draw.z, _style_parser.StyleParser.cacheUnits);

        if (draw.outline) {
            draw.outline.color = _style_parser.StyleParser.colorCacheObject(draw.outline.color);
            draw.outline.width = _style_parser.StyleParser.cacheObject(draw.outline.width, _style_parser.StyleParser.cacheUnits);
            draw.outline.next_width = _style_parser.StyleParser.cacheObject(draw.outline.width, _style_parser.StyleParser.cacheUnits); // width re-computed for next zoom
        }
        return draw;
    },

    /**
     * A "template" that sets constant attibutes for each vertex, which is then modified per vertex or per feature.
     * A plain JS array matching the order of the vertex layout.
     */
    makeVertexTemplate: function makeVertexTemplate(style) {
        var i = 0;

        // position - x & y coords will be filled in per-vertex below
        this.vertex_template[i++] = 0;
        this.vertex_template[i++] = 0;
        this.vertex_template[i++] = style.z || 0;

        // layer order - w coord of 'position' attribute (for packing efficiency)
        this.vertex_template[i++] = this.scaleOrder(style.order);

        // extrusion vector
        this.vertex_template[i++] = 0;
        this.vertex_template[i++] = 0;
        this.vertex_template[i++] = 0;

        // scaling to previous and next zoom
        this.vertex_template[i++] = style.next_width;

        // color
        this.vertex_template[i++] = style.color[0] * 255;
        this.vertex_template[i++] = style.color[1] * 255;
        this.vertex_template[i++] = style.color[2] * 255;
        this.vertex_template[i++] = style.color[3] * 255;

        // selection color
        if (this.selection) {
            this.vertex_template[i++] = style.selection_color[0] * 255;
            this.vertex_template[i++] = style.selection_color[1] * 255;
            this.vertex_template[i++] = style.selection_color[2] * 255;
            this.vertex_template[i++] = style.selection_color[3] * 255;
        }

        // Add texture UVs to template only if needed
        if (this.texcoords) {
            this.vertex_template[i++] = 0;
            this.vertex_template[i++] = 0;
        }

        return this.vertex_template;
    },

    buildLines: function buildLines(lines, style, vertex_data, context, options) {
        // Outline (build first so that blended geometry without a depth test is drawn first/under the inner line)
        this.feature_style = this.outline_feature_style; // swap in outline-specific style holder
        if (style.outline && style.outline.color != null && style.outline.width.value != null) {
            var outline_style = _style_manager.StyleManager.styles[style.outline.style];
            if (outline_style) {
                outline_style.addFeature(context.feature, style.outline, context);
            }
        }

        // Main line
        this.feature_style = this.inline_feature_style; // restore calculated style for inline
        var vertex_template = this.makeVertexTemplate(style);
        (0, _buildersPolylines.buildPolylines)(lines, style.width, vertex_data, vertex_template, {
            cap: style.cap,
            join: style.join,
            miter_limit: style.miter_limit,
            scaling_index: this.vertex_layout.index.a_extrude,
            scaling_normalize: 256, // values have an 8-bit fraction
            texcoord_index: this.vertex_layout.index.a_texcoord,
            texcoord_width: (style.width || style.next_width) / context.tile.overzoom2, // UVs can't calc for zero-width, use next zoom width in that case
            texcoord_normalize: 65535, // scale UVs to unsigned shorts
            closed_polygon: options && options.closed_polygon,
            remove_tile_edges: !style.tile_edges && options && options.remove_tile_edges,
            tile_edge_tolerance: _geo2['default'].tile_scale * context.tile.pad_scale * 4
        });
    },

    buildPolygons: function buildPolygons(polygons, style, vertex_data, context) {
        // Render polygons as individual lines
        for (var p = 0; p < polygons.length; p++) {
            this.buildLines(polygons[p], style, vertex_data, context, { closed_polygon: true, remove_tile_edges: true });
        }
    }

});

},{"../../builders/polylines":200,"../../geo":201,"../../gl/constants":202,"../../gl/texture":206,"../../gl/vertex_layout":211,"../polygons/polygons":231,"../style":233,"../style_manager":234,"../style_parser":235,"./dasharray":227,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/create":7,"babel-runtime/helpers/interop-require-default":23}],229:[function(_dereq_,module,exports){
// Sets of values to match for directional and corner anchors
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var lefts = ['left', 'top-left', 'bottom-left'];
var rights = ['right', 'top-right', 'bottom-right'];
var tops = ['top', 'top-left', 'top-right'];
var bottoms = ['bottom', 'bottom-left', 'bottom-right'];

var PointAnchor;

exports['default'] = PointAnchor = {

    computeOffset: function computeOffset(offset, size, anchor) {
        if (!anchor || anchor === 'center') {
            return offset;
        }

        var offset2 = [offset[0], offset[1]];

        // An optional left/right offset
        if (this.isLeftAnchor(anchor)) {
            offset2[0] -= size[0] / 2;
        } else if (this.isRightAnchor(anchor)) {
            offset2[0] += size[0] / 2;
        }

        // An optional top/bottom offset
        if (this.isTopAnchor(anchor)) {
            offset2[1] -= size[1] / 2;
        } else if (this.isBottomAnchor(anchor)) {
            offset2[1] += size[1] / 2;
        }

        return offset2;
    },

    isLeftAnchor: function isLeftAnchor(anchor) {
        return lefts.indexOf(anchor) > -1;
    },

    isRightAnchor: function isRightAnchor(anchor) {
        return rights.indexOf(anchor) > -1;
    },

    isTopAnchor: function isTopAnchor(anchor) {
        return tops.indexOf(anchor) > -1;
    },

    isBottomAnchor: function isBottomAnchor(anchor) {
        return bottoms.indexOf(anchor) > -1;
    }

};
module.exports = exports['default'];

},{}],230:[function(_dereq_,module,exports){
// Point + text label rendering style

'use strict';

var _slicedToArray = _dereq_('babel-runtime/helpers/sliced-to-array')['default'];

var _Object$create = _dereq_('babel-runtime/core-js/object/create')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsLog = _dereq_('../../utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _style = _dereq_('../style');

var _style_parser = _dereq_('../style_parser');

var _glConstants = _dereq_('../../gl/constants');

var _glConstants2 = _interopRequireDefault(_glConstants);

// web workers don't have access to GL context, so import all GL constants

var _glVertex_layout = _dereq_('../../gl/vertex_layout');

var _glVertex_layout2 = _interopRequireDefault(_glVertex_layout);

var _buildersPoints = _dereq_('../../builders/points');

var _glTexture = _dereq_('../../gl/texture');

var _glTexture2 = _interopRequireDefault(_glTexture);

var _geo = _dereq_('../../geo');

var _geo2 = _interopRequireDefault(_geo);

var _vector = _dereq_('../../vector');

var _vector2 = _interopRequireDefault(_vector);

var _labelsCollision = _dereq_('../../labels/collision');

var _labelsCollision2 = _interopRequireDefault(_labelsCollision);

var _labelsLabel_point = _dereq_('../../labels/label_point');

var _labelsLabel_point2 = _interopRequireDefault(_labelsLabel_point);

var _textText_labels = _dereq_('../text/text_labels');

var _point_anchor = _dereq_('./point_anchor');

var _point_anchor2 = _interopRequireDefault(_point_anchor);


var shaderSrc_pointsVertex = "uniform vec2 u_resolution;\nuniform float u_time;\nuniform vec3 u_map_position;\nuniform vec4 u_tile_origin;\nuniform float u_tile_proxy_depth;\nuniform float u_meters_per_pixel;\nuniform float u_device_pixel_ratio;\n\nuniform mat4 u_model;\nuniform mat4 u_modelView;\nuniform mat3 u_normalMatrix;\nuniform mat3 u_inverseNormalMatrix;\n\nattribute vec4 a_position;\nattribute vec4 a_shape;\nattribute vec4 a_color;\nattribute vec2 a_texcoord;\nattribute vec2 a_offset;\n\n#define TANGRAM_NORMAL vec3(0., 0., 1.)\n\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying vec4 v_world_position;\n\n#ifdef TANGRAM_MULTI_SAMPLER\nvarying float v_sampler;\n#endif\n\n#pragma tangram: camera\n#pragma tangram: material\n#pragma tangram: lighting\n#pragma tangram: raster\n#pragma tangram: global\n\nvec2 rotate2D(vec2 _st, float _angle) {\n    return mat2(cos(_angle),-sin(_angle),\n                sin(_angle),cos(_angle)) * _st;\n}\n\nvoid main() {\n    // Initialize globals\n    #pragma tangram: setup\n\n    v_color = a_color;\n    v_texcoord = a_texcoord;\n\n    // Position\n    vec4 position = u_modelView * vec4(a_position.xyz, 1.);\n\n    // Apply positioning and scaling in screen space\n    vec2 shape = a_shape.xy / 256.;                 // values have an 8-bit fraction\n    vec2 offset = vec2(a_offset.x, -a_offset.y);    // flip y to make it point down\n    float theta = a_shape.z / 4096.;                // values have a 12-bit fraction\n\n    #ifdef TANGRAM_MULTI_SAMPLER\n    v_sampler = a_shape.w; // texture sampler\n    #endif\n\n    shape = rotate2D(shape, theta);     // apply rotation to vertex\n    shape += rotate2D(offset, theta);   // apply offset on rotated axis (e.g. so line labels follow text axis)\n\n    // World coordinates for 3d procedural textures\n    v_world_position = u_model * position;\n    v_world_position.xy += shape * u_meters_per_pixel;\n    v_world_position = wrapWorldPosition(v_world_position);\n\n    // Modify position before camera projection\n    #pragma tangram: position\n\n    cameraProjection(position);\n\n    #ifdef TANGRAM_LAYER_ORDER\n        // +1 is to keep all layers including proxies > 0\n        applyLayerOrder(a_position.w + u_tile_proxy_depth + 1., position);\n    #endif\n\n    // Apply pixel offset in screen-space\n    // Multiply by 2 is because screen is 2 units wide Normalized Device Coords (and u_resolution device pixels wide)\n    // Device pixel ratio adjustment is because shape is in logical pixels\n    position.xy += shape * position.w * 2. * u_device_pixel_ratio / u_resolution;\n\n    gl_Position = position;\n}\n";
var shaderSrc_pointsFragment = "uniform vec2 u_resolution;\nuniform float u_time;\nuniform vec3 u_map_position;\nuniform vec4 u_tile_origin;\nuniform float u_meters_per_pixel;\nuniform float u_device_pixel_ratio;\n\nuniform mat3 u_normalMatrix;\nuniform mat3 u_inverseNormalMatrix;\n\nuniform sampler2D u_texture;\n\n#ifdef TANGRAM_MULTI_SAMPLER\nuniform sampler2D u_label_texture;\nvarying float v_sampler;\n#endif\n\nvarying vec4 v_color;\nvarying vec2 v_texcoord;\nvarying vec4 v_world_position;\n\n#define TANGRAM_NORMAL vec3(0., 0., 1.)\n\n// Alpha discard threshold (substitute for alpha blending)\n#ifndef TANGRAM_ALPHA_TEST\n#define TANGRAM_ALPHA_TEST 0.5\n#endif\n\n// Alpha fade range for edges of points\n#ifndef TANGRAM_FADE_RANGE\n#define TANGRAM_FADE_RANGE .15\n#endif\n#define TANGRAM_FADE_START (1. - TANGRAM_FADE_RANGE)\n\n#pragma tangram: camera\n#pragma tangram: material\n#pragma tangram: lighting\n#pragma tangram: raster\n#pragma tangram: global\n\nvoid main (void) {\n    // Initialize globals\n    #pragma tangram: setup\n\n    vec4 color = v_color;\n\n    #ifdef TANGRAM_MULTI_SAMPLER\n    if (v_sampler == 0.) { // sprite sampler\n    #endif\n        #ifdef TANGRAM_POINT_TEXTURE\n            // Draw sprite\n            color *= texture2D(u_texture, v_texcoord);\n        #else\n            // Draw a point\n            vec2 uv = v_texcoord * 2. - 1.; // fade alpha near circle edge\n            float point_dist = length(uv);\n            color.a = clamp(color.a - (smoothstep(0., TANGRAM_FADE_RANGE, (point_dist - TANGRAM_FADE_START)) / TANGRAM_FADE_RANGE), 0., color.a);\n        #endif\n    #ifdef TANGRAM_MULTI_SAMPLER\n    }\n    else { // label sampler\n        color = texture2D(u_label_texture, v_texcoord);\n        color.rgb /= max(color.a, 0.001); // un-multiply canvas texture\n    }\n    #endif\n\n    // Manually un-multiply alpha, for cases where texture has pre-multiplied alpha\n    #ifdef TANGRAM_UNMULTIPLY_ALPHA\n        color.rgb /= max(color.a, 0.001);\n    #endif\n\n    // If blending is off, use alpha discard as a lower-quality substitute\n    #if !defined(TANGRAM_BLEND_OVERLAY) && !defined(TANGRAM_BLEND_INLAY)\n        if (color.a < TANGRAM_ALPHA_TEST) {\n            discard;\n        }\n    #endif\n\n    #pragma tangram: color\n\n    // Fade out when tile is zooming out, e.g. acting as proxy tiles\n    // NB: this is mostly done to compensate for text label collision happening at the label's 1x zoom. As labels\n    // in proxy tiles are scaled down, they begin to overlap, and the fade is a simple way to ease the transition.\n    #ifdef TANGRAM_FADE_ON_ZOOM_OUT\n        color.a *= clamp(1. - TANGRAM_FADE_ON_ZOOM_OUT_RATE * (u_tile_origin.z - u_map_position.z), 0., 1.);\n    #endif\n\n    #pragma tangram: filter\n\n    gl_FragColor = color;\n}\n";

var Points = _Object$create(_style.Style);

exports.Points = Points;
// Mixin text label methods
_Object$assign(Points, _textText_labels.TextLabels);

_Object$assign(Points, {
    name: 'points',
    built_in: true,
    selection: true, // turn feature selection on
    blend: 'overlay', // overlays drawn on top of all other styles, with blending

    init: function init() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _style.Style.init.apply(this, arguments);

        // Base shaders
        this.vertex_shader_src = shaderSrc_pointsVertex;
        this.fragment_shader_src = shaderSrc_pointsFragment;

        var attribs = [{ name: 'a_position', size: 4, type: _glConstants2['default'].SHORT, normalized: false }, { name: 'a_shape', size: 4, type: _glConstants2['default'].SHORT, normalized: false }, { name: 'a_texcoord', size: 2, type: _glConstants2['default'].UNSIGNED_SHORT, normalized: true }, { name: 'a_offset', size: 2, type: _glConstants2['default'].SHORT, normalized: false }, { name: 'a_color', size: 4, type: _glConstants2['default'].UNSIGNED_BYTE, normalized: true }];

        // Optional feature selection
        if (this.selection) {
            attribs.push({ name: 'a_selection_color', size: 4, type: _glConstants2['default'].UNSIGNED_BYTE, normalized: true });
        }

        this.vertex_layout = new _glVertex_layout2['default'](attribs);

        // If we're not rendering as overlay, we need a layer attribute
        if (this.blend !== 'overlay') {
            this.defines.TANGRAM_LAYER_ORDER = true;
        }

        // ensure a label texture is always bound (avoid Chrome 'no texture bound to unit' warnings)
        this.shaders.uniforms = this.shaders.uniforms || {};
        this.shaders.uniforms.u_label_texture = _glTexture2['default']['default'];

        if (this.texture) {
            this.defines.TANGRAM_POINT_TEXTURE = true;
            this.shaders.uniforms.u_texture = this.texture;
        }

        // Enable dual point/text mode
        this.defines.TANGRAM_MULTI_SAMPLER = true;

        // Fade out text when tile is zooming out, e.g. acting as proxy tiles
        this.defines.TANGRAM_FADE_ON_ZOOM_OUT = true;
        this.defines.TANGRAM_FADE_ON_ZOOM_OUT_RATE = 2; // fade at 2x, e.g. fully transparent at 0.5 zoom level away

        this.collision_group_points = this.name + '-points';
        this.collision_group_text = this.name + '-text';

        this.reset();
    },

    reset: function reset() {
        this.queues = {};
        this.resetText();
    },

    // Override to queue features instead of processing immediately
    addFeature: function addFeature(feature, draw, context) {
        var tile = context.tile;
        if (tile.generation !== this.generation) {
            return;
        }

        // Called here because otherwise it will be delayed until the feature queue is parsed,
        // and we want the preprocessing done before we evaluate text style below
        draw = this.preprocess(draw);
        if (!draw) {
            return;
        }

        var style = {};
        style.color = this.parseColor(draw.color, context);

        // Point styling

        // require color or texture
        if (!style.color && !this.texture) {
            return null;
        }

        var sprite = style.sprite = _style_parser.StyleParser.evalProp(draw.sprite, context);
        style.sprite_default = draw.sprite_default; // optional fallback if 'sprite' not found

        // if point has texture and sprites, require a valid sprite to draw
        if (this.texture && _glTexture2['default'].textures[this.texture] && _glTexture2['default'].textures[this.texture].sprites) {
            if (!sprite && !style.sprite_default) {
                return;
            } else if (!_glTexture2['default'].textures[this.texture].sprites[sprite]) {
                // If sprite not found, check for default sprite
                if (style.sprite_default) {
                    sprite = style.sprite_default;
                    if (!_glTexture2['default'].textures[this.texture].sprites[sprite]) {
                        (0, _utilsLog2['default'])('warn', 'Style: in style \'' + this.name + '\', could not find default sprite \'' + sprite + '\' for texture \'' + this.texture + '\'');
                        return;
                    }
                } else {
                    (0, _utilsLog2['default'])('warn', 'Style: in style \'' + this.name + '\', could not find sprite \'' + sprite + '\' for texture \'' + this.texture + '\'');
                    return;
                }
            }
        } else if (sprite) {
            (0, _utilsLog2['default'])('warn', 'Style: in style \'' + this.name + '\', sprite \'' + sprite + '\' was specified, but texture \'' + this.texture + '\' has no sprites');
            sprite = null;
        }

        // Sets texcoord scale if needed (e.g. for sprite sub-area)
        var sprite_info = undefined;
        if (this.texture && sprite) {
            sprite_info = _glTexture2['default'].getSpriteInfo(this.texture, sprite);
            style.texcoords = sprite_info.texcoords;
        } else {
            style.texcoords = null;
        }

        // points can be placed off the ground
        style.z = draw.z && _style_parser.StyleParser.cacheDistance(draw.z, context) || _style_parser.StyleParser.defaults.z;

        // point size defined explicitly, or defaults to sprite size, or generic fallback
        style.size = draw.size;
        if (!style.size) {
            if (sprite_info) {
                style.size = sprite_info.size;
            } else {
                style.size = [16, 16];
            }
        } else {
            style.size = _style_parser.StyleParser.cacheProperty(style.size, context);
        }

        // size will be scaled to 16-bit signed int, so max allowed width + height of 256 pixels
        style.size = [Math.min(style.size[0] || style.size, 256), Math.min(style.size[1] || style.size, 256)];

        style.angle = _style_parser.StyleParser.evalProp(draw.angle, context) || 0;
        style.sampler = 0; // 0 = sprites

        this.computeLayout(style, feature, draw, context, tile);

        // Text styling
        var tf = draw.text && draw.text.visible !== false && // explicitly handle `visible` property for nested text
        this.parseTextFeature(feature, draw.text, context, tile);

        if (tf) {
            // Text labels have a default priority of 0.5 below their parent point (+0.5, priority is lower-is-better)
            // This can be overriden, as long as it is less than or equal to the default
            tf.layout.priority = draw.text.priority ? Math.max(tf.layout.priority, style.priority + 0.5) : style.priority + 0.5;

            // Additional anchor/offset for point:
            // point's own anchor, text anchor applied to point, additional point offset
            tf.layout.offset = _point_anchor2['default'].computeOffset(tf.layout.offset, style.size, draw.anchor);
            tf.layout.offset = _point_anchor2['default'].computeOffset(tf.layout.offset, style.size, draw.text.anchor);
            if (style.offset !== _style_parser.StyleParser.zeroPair) {
                // point has an offset
                if (tf.layout.offset === _style_parser.StyleParser.zeroPair) {
                    // no text offset, use point's
                    tf.layout.offset = style.offset;
                } else {
                    // text has offset, add point's
                    tf.layout.offset[0] += style.offset[0];
                    tf.layout.offset[1] += style.offset[1];
                }
            }

            // Text labels attached to points should not be moved into tile
            // (they should stay fixed relative to the point)
            tf.layout.move_into_tile = false;

            _labelsCollision2['default'].addStyle(this.collision_group_text, tile.key);
        }

        // Queue the feature for processing
        if (!this.tile_data[tile.key]) {
            this.startData(tile);
        }

        this.queues[tile.key].push({
            feature: feature, draw: draw, context: context, style: style,
            text_feature: tf
        });

        // Register with collision manager
        _labelsCollision2['default'].addStyle(this.collision_group_points, tile.key);
    },

    // Implements label creation for TextLabels mixin
    createTextLabels: function createTextLabels(tile_key, feature_queue) {
        var labels = [];
        for (var f = 0; f < feature_queue.length; f++) {
            var fq = feature_queue[f];
            var text_info = this.texts[tile_key][fq.text_settings_key][fq.text];
            fq.label = new _labelsLabel_point2['default'](fq.point_label.position, text_info.size.collision_size, fq.layout);
            labels.push(fq);

            if (fq.parent) {
                fq.parent.child = fq;
            }
        }
        return labels;
    },

    // Override
    startData: function startData(tile) {
        this.queues[tile.key] = [];
        return _style.Style.startData.call(this, tile);
    },

    // Override
    endData: function endData(tile) {
        var _this = this;

        if (tile.canceled) {
            (0, _utilsLog2['default'])('trace', 'Style ' + this.name + ': stop tile build because tile was canceled: ' + tile.key);
            return;
        }

        var queue = this.queues[tile.key];
        this.queues[tile.key] = [];

        // For each point feature, create one or more labels
        var text_features = [];
        var boxes = [];
        queue.forEach(function (q) {
            var style = q.style;
            var feature = q.feature;
            var geometry = feature.geometry;

            var feature_labels = _this.buildLabels(style.size, geometry, style);
            for (var i = 0; i < feature_labels.length; i++) {
                var label = feature_labels[i];
                var link = _labelsCollision2['default'].nextLinkId();
                boxes.push({
                    feature: feature,
                    draw: q.draw,
                    context: q.context,
                    style: style,
                    layout: style,
                    label: label,
                    link: link
                });

                if (q.text_feature) {
                    text_features.push({
                        feature: feature,
                        draw: q.text_feature.draw,
                        context: q.context,
                        text: q.text_feature.text,
                        text_settings_key: q.text_feature.text_settings_key,
                        layout: q.text_feature.layout,
                        point_label: label,
                        link: link
                    });
                }
            }
        });

        // Collide both points and text, then build features
        return _Promise.all([
        // Points
        _labelsCollision2['default'].collide(boxes, this.collision_group_points, tile.key).then(function (boxes) {
            boxes.forEach(function (q) {
                _this.feature_style = q.style;
                _this.feature_style.label = q.label;
                _style.Style.addFeature.call(_this, q.feature, q.draw, q.context);
            });
        }),
        // Labels
        this.renderTextLabels(tile, this.collision_group_text, text_features)]).then(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2);

            var _ref2$1 = _ref2[1];
            var labels = _ref2$1.labels;
            var texts = _ref2$1.texts;
            var texture = _ref2$1.texture;

            // Process labels
            if (labels && texts) {
                // Build queued features
                labels.forEach(function (q) {
                    var text_settings_key = q.text_settings_key;
                    var text_info = texts[text_settings_key] && texts[text_settings_key][q.text];

                    // setup styling object expected by Style class
                    var style = _this.feature_style;
                    style.label = q.label;
                    style.size = text_info.size.logical_size;
                    style.angle = q.label.angle || 0;
                    style.sampler = 1; // non-0 = labels
                    style.texcoords = text_info.texcoords;

                    _style.Style.addFeature.call(_this, q.feature, q.draw, q.context);
                });
            }
            _this.freeText(tile);

            // Finish tile mesh
            return _style.Style.endData.call(_this, tile).then(function (tile_data) {
                // Attach tile-specific label atlas to mesh as a texture uniform
                if (texture && tile_data) {
                    tile_data.uniforms = tile_data.uniforms || {};
                    tile_data.textures = tile_data.textures || [];

                    tile_data.uniforms.u_label_texture = texture;
                    tile_data.textures.push(texture); // assign texture ownership to tile
                }
                return tile_data;
            });
        });
    },

    _preprocess: function _preprocess(draw) {
        draw.color = _style_parser.StyleParser.colorCacheObject(draw.color);
        draw.z = _style_parser.StyleParser.cacheObject(draw.z, _style_parser.StyleParser.cacheUnits);

        // Size (1d value or 2d array)
        draw.size = _style_parser.StyleParser.cacheObject(draw.size, function (v) {
            return Array.isArray(v) ? v.map(parseFloat) : parseFloat(v);
        });

        // Offset (2d array)
        draw.offset = _style_parser.StyleParser.cacheObject(draw.offset, function (v) {
            return Array.isArray(v) && v.map(parseFloat) || 0;
        });

        // Buffer (1d value or 2d array, expand 1d to 2d)
        draw.buffer = _style_parser.StyleParser.cacheObject(draw.buffer, function (v) {
            return (Array.isArray(v) ? v : [v, v]).map(parseFloat) || 0;
        });

        // Optional text styling
        draw.text = this.preprocessText(draw.text); // will return null if valid text styling wasn't provided
        if (draw.text) {
            draw.text.key = draw.key; // copy layer key for use as label repeat group
            draw.text.anchor = draw.text.anchor || 'bottom'; // Default text anchor to bottom
        }

        return draw;
    },

    // Compute label layout-related properties
    computeLayout: function computeLayout(target, feature, draw, context, tile) {
        var layout = target || {};
        layout.id = feature;
        layout.units_per_pixel = tile.units_per_pixel || 1;

        // collision flag
        layout.collide = draw.collide === false ? false : true;

        // tile boundary handling
        layout.cull_from_tile = draw.cull_from_tile != null ? draw.cull_from_tile : false;
        layout.move_into_tile = draw.move_into_tile != null ? draw.move_into_tile : false;

        // polygons rendering as points will render at each of the polygon's vertices by default,
        // but can be set to render at the polygon's centroid instead
        // TODO: change default to be centroid, and/or replace with more flexible 'placement'
        // parameter to allow placement on vertex, along a line, or at a polygon centroid
        layout.centroid = draw.centroid;

        // label anchors (point labels only)
        // label position will be adjusted in the given direction, relative to its original point
        // one of: left, right, top, bottom, top-left, top-right, bottom-left, bottom-right
        layout.anchor = draw.anchor;

        // label offset and buffer in pixel (applied in screen space)
        layout.offset = _style_parser.StyleParser.cacheProperty(draw.offset, context) || _style_parser.StyleParser.zeroPair;
        layout.buffer = _style_parser.StyleParser.cacheProperty(draw.buffer, context) || _style_parser.StyleParser.zeroPair;

        // label priority (lower is higher)
        var priority = draw.priority;
        if (priority != null) {
            if (typeof priority === 'function') {
                priority = priority(context);
            }
        } else {
            priority = -1 >>> 0; // default to max priority value if none set
        }
        layout.priority = priority;

        return layout;
    },

    // Builds one or more point labels for a geometry
    buildLabels: function buildLabels(size, geometry, options) {
        var labels = [];

        if (geometry.type === "Point") {
            labels.push(new _labelsLabel_point2['default'](geometry.coordinates, size, options));
        } else if (geometry.type === "MultiPoint") {
            var points = geometry.coordinates;
            for (var i = 0; i < points.length; ++i) {
                var point = points[i];
                labels.push(new _labelsLabel_point2['default'](point, size, options));
            }
        } else if (geometry.type === "LineString") {
            // Point at each line vertex
            var points = geometry.coordinates;
            for (var i = 0; i < points.length; ++i) {
                labels.push(new _labelsLabel_point2['default'](points[i], size, options));
            }
        } else if (geometry.type === "MultiLineString") {
            // Point at each line vertex
            var lines = geometry.coordinates;
            for (var ln = 0; ln < lines.length; ln++) {
                var points = lines[ln];
                for (var i = 0; i < points.length; ++i) {
                    labels.push(new _labelsLabel_point2['default'](points[i], size, options));
                }
            }
        } else if (geometry.type === "Polygon") {
            // Point at polygon centroid (of outer ring)
            if (options.centroid) {
                var centroid = _geo2['default'].centroid(geometry.coordinates);
                labels.push(new _labelsLabel_point2['default'](centroid, size, options));
            }
            // Point at each polygon vertex (all rings)
            else {
                    var rings = geometry.coordinates;
                    for (var ln = 0; ln < rings.length; ln++) {
                        var points = rings[ln];
                        for (var i = 0; i < points.length; ++i) {
                            labels.push(new _labelsLabel_point2['default'](points[i], size, options));
                        }
                    }
                }
        } else if (geometry.type === "MultiPolygon") {
            var centroid = _geo2['default'].multiCentroid(geometry.coordinates);
            labels.push(new _labelsLabel_point2['default'](centroid, size, options));
        }

        return labels;
    },

    /**
     * A "template" that sets constant attibutes for each vertex, which is then modified per vertex or per feature.
     * A plain JS array matching the order of the vertex layout.
     */
    makeVertexTemplate: function makeVertexTemplate(style) {
        var color = style.color || _style_parser.StyleParser.defaults.color;

        // position - x & y coords will be filled in per-vertex below
        this.fillVertexTemplate('a_position', 0, { size: 2 });
        this.fillVertexTemplate('a_position', style.z || 0, { size: 1, offset: 2 });
        // layer order - w coord of 'position' attribute (for packing efficiency)
        this.fillVertexTemplate('a_position', this.scaleOrder(style.order), { size: 1, offset: 3 });

        // scaling vector - (x, y) components per pixel, z = angle, w = scaling factor
        this.fillVertexTemplate('a_shape', 0, { size: 4 });

        // texture coords
        this.fillVertexTemplate('a_texcoord', 0, { size: 2 });

        // offsets
        this.fillVertexTemplate('a_offset', 0, { size: 2 });

        // color
        this.fillVertexTemplate('a_color', _vector2['default'].mult(color, 255), { size: 4 });

        // selection color
        if (this.selection) {
            this.fillVertexTemplate('a_selection_color', _vector2['default'].mult(style.selection_color, 255), { size: 4 });
        }

        return this.vertex_template;
    },

    buildQuad: function buildQuad(points, size, angle, sampler, offset, texcoord_scale, vertex_data, vertex_template) {
        (0, _buildersPoints.buildQuadsForPoints)(points, vertex_data, vertex_template, {
            texcoord_index: this.vertex_layout.index.a_texcoord,
            position_index: this.vertex_layout.index.a_position,
            shape_index: this.vertex_layout.index.a_shape,
            offset_index: this.vertex_layout.index.a_offset
        }, {
            quad: size,
            quad_normalize: 256, // values have an 8-bit fraction
            offset: offset,
            angle: angle * 4096, // values have a 12-bit fraction
            shape_w: sampler,
            texcoord_scale: texcoord_scale,
            texcoord_normalize: 65535
        });
    },

    // Build quad for point sprite
    build: function build(style, vertex_data) {
        var vertex_template = this.makeVertexTemplate(style);
        var label = style.label;

        this.buildQuad([label.position], // position
        style.size, // size in pixels
        style.angle, // angle in degrees
        style.sampler, // texture sampler to use
        label.offset, // offset from center in pixels
        style.texcoords, // texture UVs
        vertex_data, vertex_template // VBO and data for current vertex
        );
    },

    // Override to pass-through to generic point builder
    buildLines: function buildLines(lines, style, vertex_data) {
        this.build(style, vertex_data);
    },

    buildPoints: function buildPoints(points, style, vertex_data) {
        this.build(style, vertex_data);
    },

    buildPolygons: function buildPolygons(points, style, vertex_data) {
        this.build(style, vertex_data);
    }

});

},{"../../builders/points":198,"../../geo":201,"../../gl/constants":202,"../../gl/texture":206,"../../gl/vertex_layout":211,"../../labels/collision":212,"../../labels/label_point":215,"../../utils/log":243,"../../vector":251,"../style":233,"../style_parser":235,"../text/text_labels":238,"./point_anchor":229,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/create":7,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/sliced-to-array":24}],231:[function(_dereq_,module,exports){
// Polygon rendering style

'use strict';

var _Object$create = _dereq_('babel-runtime/core-js/object/create')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _style = _dereq_('../style');

var _style_parser = _dereq_('../style_parser');

var _glConstants = _dereq_('../../gl/constants');

var _glConstants2 = _interopRequireDefault(_glConstants);

// web workers don't have access to GL context, so import all GL constants

var _glVertex_layout = _dereq_('../../gl/vertex_layout');

var _glVertex_layout2 = _interopRequireDefault(_glVertex_layout);

var _buildersPolygons = _dereq_('../../builders/polygons');

var _geo = _dereq_('../../geo');

var _geo2 = _interopRequireDefault(_geo);


var shaderSrc_polygonsVertex = "uniform vec2 u_resolution;\nuniform float u_time;\nuniform vec3 u_map_position;\nuniform vec4 u_tile_origin;\nuniform float u_tile_proxy_depth;\nuniform float u_meters_per_pixel;\nuniform float u_device_pixel_ratio;\n\nuniform mat4 u_model;\nuniform mat4 u_modelView;\nuniform mat3 u_normalMatrix;\nuniform mat3 u_inverseNormalMatrix;\n\nattribute vec4 a_position;\nattribute vec4 a_color;\n\n// Optional normal attribute, otherwise default to up\n#ifdef TANGRAM_NORMAL_ATTRIBUTE\n    attribute vec3 a_normal;\n    #define TANGRAM_NORMAL a_normal\n#else\n    #define TANGRAM_NORMAL vec3(0., 0., 1.)\n#endif\n\n// Optional dynamic line extrusion\n#ifdef TANGRAM_EXTRUDE_LINES\n    // xy: extrusion direction in xy plane\n    // z:  half-width of line (amount to extrude)\n    // w:  scaling factor for interpolating width between zooms\n    attribute vec4 a_extrude;\n#endif\n\nvarying vec4 v_position;\nvarying vec3 v_normal;\nvarying vec4 v_color;\nvarying vec4 v_world_position;\n\n// Optional texture UVs\n#ifdef TANGRAM_TEXTURE_COORDS\n    attribute vec2 a_texcoord;\n    varying vec2 v_texcoord;\n#endif\n\n// Optional model position varying for tile coordinate zoom\n#ifdef TANGRAM_MODEL_POSITION_BASE_ZOOM_VARYING\n    varying vec4 v_modelpos_base_zoom;\n#endif\n\n#if defined(TANGRAM_LIGHTING_VERTEX)\n    varying vec4 v_lighting;\n#endif\n\n#pragma tangram: camera\n#pragma tangram: material\n#pragma tangram: lighting\n#pragma tangram: raster\n#pragma tangram: global\n\nvoid main() {\n    // Initialize globals\n    #pragma tangram: setup\n\n    // Texture UVs\n    #ifdef TANGRAM_TEXTURE_COORDS\n        v_texcoord = a_texcoord;\n        #ifdef TANGRAM_EXTRUDE_LINES\n            v_texcoord.y *= TANGRAM_V_SCALE_ADJUST;\n        #endif\n    #endif\n\n    // Pass model position to fragment shader\n    #ifdef TANGRAM_MODEL_POSITION_BASE_ZOOM_VARYING\n        v_modelpos_base_zoom = modelPositionBaseZoom();\n    #endif\n\n    // Position\n    vec4 position = vec4(a_position.xy, a_position.z / TANGRAM_HEIGHT_SCALE, 1.); // convert height back to meters\n\n    #ifdef TANGRAM_EXTRUDE_LINES\n        vec2 extrude = a_extrude.xy / 256.; // values have an 8-bit fraction\n        float width = a_extrude.z;\n        float dwdz = a_extrude.w;\n        float dz = clamp(u_map_position.z - u_tile_origin.z, 0., 1.);\n\n        // Interpolate between zoom levels\n        width += dwdz * dz;\n\n        // Scale pixel dimensions to be consistent in screen space\n        // Scale from style zoom units back to tile zoom\n        width *= exp2(-dz - (u_tile_origin.z - u_tile_origin.w));\n\n        // Modify line width before extrusion\n        #pragma tangram: width\n\n        position.xy += extrude * width;\n    #endif\n\n    // World coordinates for 3d procedural textures\n    v_world_position = wrapWorldPosition(u_model * position);\n\n    // Adjust for tile and view position\n    position = u_modelView * position;\n\n    // Modify position before camera projection\n    #pragma tangram: position\n\n    // Setup varyings\n    v_position = position;\n    v_normal = normalize(u_normalMatrix * TANGRAM_NORMAL);\n    v_color = a_color;\n\n    #if defined(TANGRAM_LIGHTING_VERTEX)\n        // Vertex lighting\n        vec3 normal = v_normal;\n\n        // Modify normal before lighting\n        #pragma tangram: normal\n\n        // Pass lighting intensity to fragment shader\n        v_lighting = calculateLighting(position.xyz - u_eye, normal, vec4(1.));\n    #endif\n\n    // Camera\n    cameraProjection(position);\n\n    // +1 is to keep all layers including proxies > 0\n    applyLayerOrder(a_position.w + u_tile_proxy_depth + 1., position);\n\n    gl_Position = position;\n}\n";
var shaderSrc_polygonsFragment = "uniform vec2 u_resolution;\nuniform float u_time;\nuniform vec3 u_map_position;\nuniform vec4 u_tile_origin;\nuniform float u_meters_per_pixel;\nuniform float u_device_pixel_ratio;\n\nuniform mat3 u_normalMatrix;\nuniform mat3 u_inverseNormalMatrix;\n\nvarying vec4 v_position;\nvarying vec3 v_normal;\nvarying vec4 v_color;\nvarying vec4 v_world_position;\n\n#define TANGRAM_NORMAL v_normal\n\n#ifdef TANGRAM_TEXTURE_COORDS\n    varying vec2 v_texcoord;\n#endif\n\n#ifdef TANGRAM_MODEL_POSITION_BASE_ZOOM_VARYING\n    varying vec4 v_modelpos_base_zoom;\n#endif\n\n#if defined(TANGRAM_LIGHTING_VERTEX)\n    varying vec4 v_lighting;\n#endif\n\n#pragma tangram: camera\n#pragma tangram: material\n#pragma tangram: lighting\n#pragma tangram: raster\n#pragma tangram: global\n\nvoid main (void) {\n    // Initialize globals\n    #pragma tangram: setup\n\n    vec4 color = v_color;\n    vec3 normal = TANGRAM_NORMAL;\n\n    // Apply raster to vertex color\n    #ifdef TANGRAM_RASTER_TEXTURE_COLOR\n        color *= sampleRaster(0); // multiplied to tint texture color\n    #endif\n\n    // Apply line texture\n    #ifdef TANGRAM_LINE_TEXTURE\n        vec2 _line_st = vec2(v_texcoord.x, fract(v_texcoord.y / u_texture_ratio));\n        vec4 _line_color = texture2D(u_texture, _line_st);\n\n        if (_line_color.a < TANGRAM_ALPHA_TEST) {\n            #ifdef TANGRAM_LINE_BACKGROUND_COLOR\n                color.rgb = TANGRAM_LINE_BACKGROUND_COLOR;\n            #elif !defined(TANGRAM_BLEND_OVERLAY) && !defined(TANGRAM_BLEND_INLAY)\n                discard; // use discard when alpha blending is unavailable\n            #else\n                color.a = 0.; // use alpha channel when blending is available\n            #endif\n        }\n        else {\n            color *= _line_color;\n        }\n    #endif\n\n    // First, get normal from raster tile (if applicable)\n    #ifdef TANGRAM_RASTER_TEXTURE_NORMAL\n        normal = normalize(sampleRaster(0).rgb * 2. - 1.);\n    #endif\n\n    // Second, alter normal with normal map texture (if applicable)\n    #if defined(TANGRAM_LIGHTING_FRAGMENT) && defined(TANGRAM_MATERIAL_NORMAL_TEXTURE)\n        calculateNormal(normal);\n    #endif\n\n    // Normal modification applied here for fragment lighting or no lighting,\n    // and in vertex shader for vertex lighting\n    #if !defined(TANGRAM_LIGHTING_VERTEX)\n        #pragma tangram: normal\n    #endif\n\n    // Color modification before lighting is applied\n    #pragma tangram: color\n\n    #if defined(TANGRAM_LIGHTING_FRAGMENT)\n        // Calculate per-fragment lighting\n        color = calculateLighting(v_position.xyz - u_eye, normal, color);\n    #elif defined(TANGRAM_LIGHTING_VERTEX)\n        // Apply lighting intensity interpolated from vertex shader\n        color *= v_lighting;\n    #endif\n\n    // Post-processing effects (modify color after lighting)\n    #pragma tangram: filter\n\n    gl_FragColor = color;\n}\n";

var Polygons = _Object$create(_style.Style);

exports.Polygons = Polygons;
// export shaders for use in lines.js
exports.shaderSrc_polygonsVertex = shaderSrc_polygonsVertex;
exports.shaderSrc_polygonsFragment = shaderSrc_polygonsFragment;

_Object$assign(Polygons, {
    name: 'polygons',
    built_in: true,
    vertex_shader_src: shaderSrc_polygonsVertex,
    fragment_shader_src: shaderSrc_polygonsFragment,
    selection: true, // turn feature selection on

    init: function init() {
        _style.Style.init.apply(this, arguments);

        // Basic attributes, others can be added (see texture UVs below)
        var attribs = [{ name: 'a_position', size: 4, type: _glConstants2['default'].SHORT, normalized: false }, { name: 'a_normal', size: 3, type: _glConstants2['default'].BYTE, normalized: true }, // gets padded to 4-bytes
        { name: 'a_color', size: 4, type: _glConstants2['default'].UNSIGNED_BYTE, normalized: true }];

        // Tell the shader we have a normal and order attributes
        this.defines.TANGRAM_NORMAL_ATTRIBUTE = true;
        this.defines.TANGRAM_LAYER_ORDER = true;

        // Optional feature selection
        if (this.selection) {
            attribs.push({ name: 'a_selection_color', size: 4, type: _glConstants2['default'].UNSIGNED_BYTE, normalized: true });
        }

        // Optional texture UVs
        if (this.texcoords) {
            this.defines.TANGRAM_TEXTURE_COORDS = true;

            // Add vertex attribute for UVs only when needed
            attribs.push({ name: 'a_texcoord', size: 2, type: _glConstants2['default'].UNSIGNED_SHORT, normalized: true });
        }

        this.vertex_layout = new _glVertex_layout2['default'](attribs);
    },

    _parseFeature: function _parseFeature(feature, draw, context) {
        var style = this.feature_style;

        style.color = this.parseColor(draw.color, context);
        if (!style.color) {
            return null;
        }

        style.z = draw.z && _style_parser.StyleParser.cacheDistance(draw.z, context) || _style_parser.StyleParser.defaults.z;
        style.z *= _geo2['default'].height_scale; // provide sub-meter precision of height values

        style.extrude = _style_parser.StyleParser.evalProp(draw.extrude, context);
        if (style.extrude) {
            // use feature's height and min_height properties
            if (style.extrude === true) {
                style.height = feature.properties.height || _style_parser.StyleParser.defaults.height;
                style.min_height = feature.properties.min_height || _style_parser.StyleParser.defaults.min_height;
            }
            // explicit height, no min_height
            else if (typeof style.extrude === 'number') {
                    style.height = style.extrude;
                    style.min_height = 0;
                }
                // explicit height and min_height
                else if (Array.isArray(style.extrude)) {
                        style.min_height = style.extrude[0];
                        style.height = style.extrude[1];
                    }

            style.height *= _geo2['default'].height_scale; // provide sub-meter precision of height values
            style.min_height *= _geo2['default'].height_scale;
        }

        style.tile_edges = draw.tile_edges; // usually activated for debugging, or rare visualization needs

        return style;
    },

    _preprocess: function _preprocess(draw) {
        draw.color = _style_parser.StyleParser.colorCacheObject(draw.color);
        draw.z = _style_parser.StyleParser.cacheObject(draw.z, _style_parser.StyleParser.cacheUnits);
        return draw;
    },

    /**
     * A "template" that sets constant attibutes for each vertex, which is then modified per vertex or per feature.
     * A plain JS array matching the order of the vertex layout.
     */
    makeVertexTemplate: function makeVertexTemplate(style) {
        var i = 0;

        // position - x & y coords will be filled in per-vertex below
        this.vertex_template[i++] = 0;
        this.vertex_template[i++] = 0;
        this.vertex_template[i++] = style.z || 0;

        // layer order - w coord of 'position' attribute (for packing efficiency)
        this.vertex_template[i++] = this.scaleOrder(style.order);

        // normal
        this.vertex_template[i++] = 0;
        this.vertex_template[i++] = 0;
        this.vertex_template[i++] = 1 * 127;

        // color
        this.vertex_template[i++] = style.color[0] * 255;
        this.vertex_template[i++] = style.color[1] * 255;
        this.vertex_template[i++] = style.color[2] * 255;
        this.vertex_template[i++] = style.color[3] * 255;

        // selection color
        if (this.selection) {
            this.vertex_template[i++] = style.selection_color[0] * 255;
            this.vertex_template[i++] = style.selection_color[1] * 255;
            this.vertex_template[i++] = style.selection_color[2] * 255;
            this.vertex_template[i++] = style.selection_color[3] * 255;
        }

        // Add texture UVs to template only if needed
        if (this.texcoords) {
            this.vertex_template[i++] = 0;
            this.vertex_template[i++] = 0;
        }

        return this.vertex_template;
    },

    buildPolygons: function buildPolygons(polygons, style, vertex_data, context) {
        var vertex_template = this.makeVertexTemplate(style);
        var options = {
            texcoord_index: this.vertex_layout.index.a_texcoord,
            texcoord_normalize: 65535, // scale UVs to unsigned shorts
            remove_tile_edges: !style.tile_edges,
            tile_edge_tolerance: _geo2['default'].tile_scale * context.tile.pad_scale * 4,
            winding: context.winding
        };

        // Extruded polygons (e.g. 3D buildings)
        if (style.extrude && style.height) {
            (0, _buildersPolygons.buildExtrudedPolygons)(polygons, style.z, style.height, style.min_height, vertex_data, vertex_template, this.vertex_layout.index.a_normal, 127, // scale normals to signed bytes
            options);
        }
        // Regular polygons
        else {
                (0, _buildersPolygons.buildPolygons)(polygons, vertex_data, vertex_template, options);
            }
    }

});

},{"../../builders/polygons":199,"../../geo":201,"../../gl/constants":202,"../../gl/vertex_layout":211,"../style":233,"../style_parser":235,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/create":7,"babel-runtime/helpers/interop-require-default":23}],232:[function(_dereq_,module,exports){
// Raster tile rendering style

'use strict';

var _Object$create = _dereq_('babel-runtime/core-js/object/create')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _style_parser = _dereq_('../style_parser');

var _polygonsPolygons = _dereq_('../polygons/polygons');

var RasterStyle = _Object$create(_polygonsPolygons.Polygons);

exports.RasterStyle = RasterStyle;
_Object$assign(RasterStyle, {
    name: 'raster',
    'super': _polygonsPolygons.Polygons,
    built_in: true,
    selection: false, // no feature selection by default

    init: function init() {
        // Required for raster tiles
        this.raster = this.raster || 'color';

        this['super'].init.apply(this, arguments);
    },

    _preprocess: function _preprocess(draw) {
        // Raster tiles default to white vertex color, as this color will tint the underlying texture
        draw.color = draw.color || _style_parser.StyleParser.defaults.color;
        return this['super']._preprocess.apply(this, arguments);
    }

});

},{"../polygons/polygons":231,"../style_parser":235,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/create":7}],233:[function(_dereq_,module,exports){
// Rendering styles

'use strict';

var _slicedToArray = _dereq_('babel-runtime/helpers/sliced-to-array')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _Object$keys = _dereq_('babel-runtime/core-js/object/keys')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _style_parser = _dereq_('./style_parser');

var _selection = _dereq_('../selection');

var _selection2 = _interopRequireDefault(_selection);

var _glShader_program = _dereq_('../gl/shader_program');

var _glShader_program2 = _interopRequireDefault(_glShader_program);

var _glVbo_mesh = _dereq_('../gl/vbo_mesh');

var _glVbo_mesh2 = _interopRequireDefault(_glVbo_mesh);

var _glTexture = _dereq_('../gl/texture');

var _glTexture2 = _interopRequireDefault(_glTexture);

var _material = _dereq_('../material');

var _material2 = _interopRequireDefault(_material);

var _light = _dereq_('../light');

var _light2 = _interopRequireDefault(_light);

var _sourcesRaster = _dereq_('../sources/raster');

var _utilsLog = _dereq_('../utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _utilsThread = _dereq_('../utils/thread');

var _utilsThread2 = _interopRequireDefault(_utilsThread);

var _utilsWorker_broker = _dereq_('../utils/worker_broker');

var _utilsWorker_broker2 = _interopRequireDefault(_utilsWorker_broker);


var shaderSrc_selectionFragment = "// Fragment shader for feature selection passes\n// Renders in silhouette according to selection (picking) color, or black if none defined\n\n#ifdef TANGRAM_FEATURE_SELECTION\n    varying vec4 v_selection_color;\n#endif\n\nvoid main (void) {\n    #ifdef TANGRAM_FEATURE_SELECTION\n        gl_FragColor = v_selection_color;\n    #else\n        gl_FragColor = vec4(0., 0., 0., 1.);\n    #endif\n}\n";
var shaderSrc_rasters = "// Uniforms defining raster textures and macros for accessing them\n\n#ifdef TANGRAM_FRAGMENT_SHADER\nuniform sampler2D u_rasters[TANGRAM_NUM_RASTER_SOURCES];    // raster tile texture samplers\nuniform vec2 u_raster_sizes[TANGRAM_NUM_RASTER_SOURCES];    // raster tile texture sizes (width/height in pixels)\nuniform vec3 u_raster_offsets[TANGRAM_NUM_RASTER_SOURCES];  // raster tile texture UV starting offset for tile\n\n// Note: the raster accessors below are #defines rather than functions to\n// avoid issues with constant integer expressions for array indices\n\n// Adjusts UVs in model space to account for raster tile texture overzooming\n// (applies scale and offset adjustments)\n#define adjustRasterUV(raster_index, uv) \\\n    ((uv) * u_raster_offsets[raster_index].z + u_raster_offsets[raster_index].xy)\n\n// Returns the UVs of the current model position for a raster sampler\n#define currentRasterUV(raster_index) \\\n    (adjustRasterUV(raster_index, v_modelpos_base_zoom.xy))\n\n// Returns pixel location in raster tile texture at current model position\n#define currentRasterPixel(raster_index) \\\n    (currentRasterUV(raster_index) * rasterPixelSize(raster_index))\n\n// Samples a raster tile texture for the current model position\n#define sampleRaster(raster_index) \\\n    (texture2D(u_rasters[raster_index], currentRasterUV(raster_index)))\n\n// Samples a raster tile texture for a given pixel\n#define sampleRasterAtPixel(raster_index, pixel) \\\n    (texture2D(u_rasters[raster_index], adjustRasterUV(raster_index, (pixel) / rasterPixelSize(raster_index))))\n\n// Returns size of raster sampler in pixels\n#define rasterPixelSize(raster_index) \\\n    (u_raster_sizes[raster_index])\n\n#endif\n";

// Base class

var Style = {
    init: function init() {
        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var generation = _ref.generation;
        var _ref$sources = _ref.sources;
        var sources = _ref$sources === undefined ? {} : _ref$sources;
        var introspection = _ref.introspection;

        if (!this.isBuiltIn()) {
            this.built_in = false; // explicitly set to false to avoid any confusion
        }

        this.generation = generation; // scene generation id this style was created for
        this.sources = sources; // data sources for scene
        this.defines = this.hasOwnProperty('defines') && this.defines || {}; // #defines to be injected into the shaders
        this.shaders = this.hasOwnProperty('shaders') && this.shaders || {}; // shader customization (uniforms, defines, blocks, etc.)
        this.introspection = introspection || false;
        this.selection = this.selection || this.introspection || false; // flag indicating if this style supports feature selection
        this.compiling = false; // programs are currently compiling
        this.compiled = false; // programs are finished compiling
        this.program = null; // GL program reference (for main render pass)
        this.selection_program = null; // GL program reference for feature selection render pass
        this.feature_style = {}; // style for feature currently being parsed, shared to lessen GC/memory thrash
        this.vertex_template = []; // shared single-vertex template, filled out by each style
        this.tile_data = {};

        // Provide a hook for this object to be called from worker threads
        this.main_thread_target = 'Style-' + this.name;
        if (_utilsThread2['default'].is_main) {
            _utilsWorker_broker2['default'].addTarget(this.main_thread_target, this);
        }

        // Default world coords to wrap every 100,000 meters, can turn off by setting this to 'false'
        this.defines.TANGRAM_WORLD_POSITION_WRAP = 100000;

        // Blending
        this.blend = this.blend || 'opaque'; // default: opaque styles are drawn first, without blending
        this.defines['TANGRAM_BLEND_' + this.blend.toUpperCase()] = true;
        if (this.blend_order == null) {
            // controls order of rendering for styles w/non-opaque blending
            this.blend_order = -1; // defaults to first
        }

        // If the style defines its own material, replace the inherited material instance
        if (!(this.material instanceof _material2['default'])) {
            if (!_material2['default'].isValid(this.material)) {
                this.material = _style_parser.StyleParser.defaults.material;
            }
            this.material = new _material2['default'](this.material);
        }
        this.material.inject(this);

        // Set lighting mode: fragment, vertex, or none (specified as 'false')
        _light2['default'].setMode(this.lighting, this);

        // Setup raster samplers if needed
        this.setupRasters();

        this.initialized = true;
    },

    destroy: function destroy() {
        if (this.program) {
            this.program.destroy();
            this.program = null;
        }

        if (this.selection_program) {
            this.selection_program.destroy();
            this.selection_program = null;
        }

        this.gl = null;
        this.initialized = false;
    },

    reset: function reset() {},

    isBuiltIn: function isBuiltIn() {
        return this.hasOwnProperty('built_in') && this.built_in;
    },

    fillVertexTemplate: function fillVertexTemplate(attribute, value, _ref2) {
        var size = _ref2.size;
        var offset = _ref2.offset;

        offset = offset === undefined ? 0 : offset;

        var index = this.vertex_layout.index[attribute];
        if (index === undefined) {
            (0, _utilsLog2['default'])('warn', 'Style: in style \'' + this.name + '\', no index found in vertex layout for attribute \'' + attribute + '\'');
            return;
        }

        for (var i = 0; i < size; ++i) {
            var v = value.length > i ? value[i] : value;
            this.vertex_template[index + i + offset] = v;
        }
    },

    /*** Style parsing and geometry construction ***/

    // Returns an object to hold feature data (for a tile or other object)
    startData: function startData(tile) {
        this.tile_data[tile.key] = {
            vertex_data: null,
            uniforms: {},
            textures: []
        };
        return this.tile_data[tile.key];
    },

    // Finalizes an object holding feature data (for a tile or other object)
    endData: function endData(tile) {
        var tile_data = this.tile_data[tile.key];
        this.tile_data[tile.key] = null;

        if (tile_data && tile_data.vertex_data && tile_data.vertex_data.vertex_count > 0) {
            // Only keep final byte buffer
            tile_data.vertex_data.end();
            tile_data.vertex_elements = tile_data.vertex_data.element_buffer;
            tile_data.vertex_data = tile_data.vertex_data.vertex_buffer; // convert from instance to raw typed array

            // Load raster tiles passed from data source
            // Blocks mesh completion to avoid flickering
            return this.buildRasterTextures(tile, tile_data).then(function () {
                return tile_data;
            });
        } else {
            return _Promise.resolve(null); // don't send tile data back if doesn't have geometry
        }
    },

    // Has mesh data for a given tile?
    hasDataForTile: function hasDataForTile(tile_key) {
        return this.tile_data[tile_key] != null;
    },

    addFeature: function addFeature(feature, draw, context) {
        var tile = context.tile;
        if (tile.generation !== this.generation) {
            return;
        }

        if (!this.tile_data[tile.key]) {
            this.startData(tile);
        }

        var style = this.parseFeature(feature, draw, context);

        // Skip feature?
        if (!style) {
            return;
        }

        // First feature in this render style?
        if (!this.tile_data[tile.key].vertex_data) {
            this.tile_data[tile.key].vertex_data = this.vertex_layout.createVertexData();
        }

        this.buildGeometry(feature.geometry, style, this.tile_data[tile.key].vertex_data, context);
    },

    buildGeometry: function buildGeometry(geometry, style, vertex_data, context) {
        if (geometry.type === 'Polygon') {
            this.buildPolygons([geometry.coordinates], style, vertex_data, context);
        } else if (geometry.type === 'MultiPolygon') {
            this.buildPolygons(geometry.coordinates, style, vertex_data, context);
        } else if (geometry.type === 'LineString') {
            this.buildLines([geometry.coordinates], style, vertex_data, context);
        } else if (geometry.type === 'MultiLineString') {
            this.buildLines(geometry.coordinates, style, vertex_data, context);
        } else if (geometry.type === 'Point') {
            this.buildPoints([geometry.coordinates], style, vertex_data, context);
        } else if (geometry.type === 'MultiPoint') {
            this.buildPoints(geometry.coordinates, style, vertex_data, context);
        }
    },

    parseFeature: function parseFeature(feature, draw, context) {
        try {
            var style = this.feature_style;

            draw = this.preprocess(draw);
            if (!draw) {
                return;
            }

            // Calculate order if it was not cached
            style.order = this.parseOrder(draw.order, context);

            // Feature selection (only if style supports it)
            var selectable = false;
            style.interactive = this.introspection || draw.interactive;
            if (this.selection) {
                selectable = _style_parser.StyleParser.evalProp(style.interactive, context);
            }

            // If feature is marked as selectable
            if (selectable) {
                style.selection_color = _selection2['default'].makeColor(feature, context.tile, context);
            } else {
                style.selection_color = _selection2['default'].defaultColor;
            }

            // Subclass implementation
            style = this._parseFeature(feature, draw, context);

            return style;
        } catch (error) {
            (0, _utilsLog2['default'])('error', 'Style.parseFeature: style parsing error', feature, style, error);
        }
    },

    _parseFeature: function _parseFeature(feature, draw, context) {
        return this.feature_style;
    },

    preprocess: function preprocess(draw) {
        // Preprocess first time
        if (!draw.preprocessed) {
            draw = this._preprocess(draw); // optional subclass implementation
            if (!draw) {
                return;
            }
            draw.preprocessed = true;
        }
        return draw;
    },

    // optionally implemented by subclass
    _preprocess: function _preprocess(draw) {
        return draw;
    },

    // Parse an order value
    parseOrder: function parseOrder(order, context) {
        // Calculate order if it was not cached
        if (typeof order !== 'number') {
            return _style_parser.StyleParser.calculateOrder(order, context);
        }
        return order;
    },

    // Expand final precision for half-layers (for outlines)
    scaleOrder: function scaleOrder(order) {
        return order * 2;
    },

    // Parse a color of choose a default if acceptable, return undefined if color missing
    parseColor: function parseColor(color, context) {
        // Need either a color, or a shader block for 'color' or 'filter'
        if (color) {
            return _style_parser.StyleParser.cacheColor(color, context);
        } else if (this.shaders.blocks.color || this.shaders.blocks.filter) {
            return _style_parser.StyleParser.defaults.color;
        }
    },

    // Build functions are no-ops until overriden
    buildPolygons: function buildPolygons() {},
    buildLines: function buildLines() {},
    buildPoints: function buildPoints() {},

    /*** GL state and rendering ***/

    setGL: function setGL(gl) {
        this.gl = gl;
        this.max_texture_size = _glTexture2['default'].getMaxTextureSize(this.gl);
    },

    makeMesh: function makeMesh(vertex_data, vertex_elements) {
        var _ref3 = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

        var uniforms = _ref3.uniforms;

        return new _glVbo_mesh2['default'](this.gl, vertex_data, vertex_elements, this.vertex_layout, { uniforms: uniforms });
    },

    render: function render(mesh) {
        mesh.render();
    },

    compile: function compile() {
        if (!this.gl) {
            throw new Error('style.compile(): skipping for ' + this.name + ' because no GL context');
        }

        if (this.compiling) {
            throw new Error('style.compile(): skipping for ' + this.name + ' because style is already compiling');
        }
        this.compiling = true;
        this.compiled = false;

        // Build defines & for selection (need to create a new object since the first is stored as a reference by the program)
        var defines = this.buildDefineList();
        if (this.selection) {
            var selection_defines = _Object$assign({}, defines);
            selection_defines.TANGRAM_FEATURE_SELECTION = true;
        }

        // Get any custom code blocks, uniform dependencies, etc.
        var blocks = this.shaders && this.shaders.blocks;
        var block_scopes = this.shaders && this.shaders.block_scopes;
        var uniforms = _Object$assign({}, this.shaders && this.shaders.uniforms);

        // Accept a single extension, or an array of extensions
        var extensions = this.shaders && this.shaders.extensions;
        if (typeof extensions === 'string') {
            extensions = [extensions];
        }

        // Create shaders
        try {
            this.program = new _glShader_program2['default'](this.gl, this.vertex_shader_src, this.fragment_shader_src, {
                name: this.name,
                defines: defines,
                uniforms: uniforms,
                blocks: blocks,
                block_scopes: block_scopes,
                extensions: extensions
            });
            this.program.compile();

            if (this.selection) {
                this.selection_program = new _glShader_program2['default'](this.gl, this.vertex_shader_src, shaderSrc_selectionFragment, {
                    name: this.name + ' (selection)',
                    defines: selection_defines,
                    uniforms: uniforms,
                    blocks: blocks,
                    block_scopes: block_scopes,
                    extensions: extensions
                });
                this.selection_program.compile();
            } else {
                this.selection_program = null;
            }
        } catch (error) {
            this.compiling = false;
            this.compiled = false;
            throw new Error('style.compile(): style ' + this.name + ' error:', error);
        }

        this.compiling = false;
        this.compiled = true;
    },

    // Add a shader block
    addShaderBlock: function addShaderBlock(key, block) {
        var scope = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

        this.shaders.blocks = this.shaders.blocks || {};
        this.shaders.blocks[key] = this.shaders.blocks[key] || [];
        this.shaders.blocks[key].push(block);

        this.shaders.block_scopes = this.shaders.block_scopes || {};
        this.shaders.block_scopes[key] = this.shaders.block_scopes[key] || [];
        this.shaders.block_scopes[key].push(scope);
    },

    // Remove all shader blocks for key
    removeShaderBlock: function removeShaderBlock(key) {
        if (this.shaders.blocks) {
            this.shaders.blocks[key] = null;
        }
    },

    replaceShaderBlock: function replaceShaderBlock(key, block) {
        var scope = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

        this.removeShaderBlock(key);
        this.addShaderBlock(key, block, scope);
    },

    /** TODO: could probably combine and generalize this with similar method in ShaderProgram
     * (list of define objects that inherit from each other)
     */
    buildDefineList: function buildDefineList() {
        // Add any custom defines to built-in style defines
        var defines = {}; // create a new object to avoid mutating a prototype value that may be shared with other styles
        if (this.defines != null) {
            for (var d in this.defines) {
                defines[d] = this.defines[d];
            }
        }
        if (this.shaders != null && this.shaders.defines != null) {
            for (d in this.shaders.defines) {
                defines[d] = this.shaders.defines[d];
            }
        }
        return defines;
    },

    // Determines if 'raster' parameter is set to a valid value
    hasRasters: function hasRasters() {
        return ['color', 'normal', 'custom'].indexOf(this.raster) > -1;
    },

    // Setup raster access in shaders
    setupRasters: function setupRasters() {
        var _this = this;

        if (!this.hasRasters()) {
            return;
        }

        // Enable raster textures and configure how first raster is applied
        if (this.raster === 'color') {
            this.defines.TANGRAM_RASTER_TEXTURE_COLOR = true;
        } else if (this.raster === 'normal') {
            this.defines.TANGRAM_RASTER_TEXTURE_NORMAL = true;
        }
        // else custom raster (samplers will be made available but not automatically applied)

        // A given style may be built with multiple data sources, each of which may attach
        // a variable number of raster sources (0 to N, where N is the max number of raster sources
        // defined for the scene). This means we don't know *which* or *how many* rasters will be
        // bound now, at initial compile-time; we only know this at geometry build-time. To ensure
        // that we can bind as many raster sources as needed, we declare our uniform arrays to hold
        // the maximum number of possible sources. At render time, only the necessary number of rasters
        // are bound (the remaining slots aren't intended to be accessed).
        var num_raster_sources = _Object$keys(this.sources).filter(function (s) {
            return _this.sources[s] instanceof _sourcesRaster.RasterTileSource;
        }).length;

        this.defines.TANGRAM_NUM_RASTER_SOURCES = 'int(' + num_raster_sources + ')';
        if (num_raster_sources > 0) {
            // Use model position of tile's coordinate zoom for raster tile texture UVs
            this.defines.TANGRAM_MODEL_POSITION_BASE_ZOOM_VARYING = true;

            // Uniforms and macros for raster samplers
            this.replaceShaderBlock('raster', shaderSrc_rasters, 'Raster');
        }
    },

    // Load raster tile textures and set uniforms
    buildRasterTextures: function buildRasterTextures(tile, tile_data) {
        var _this2 = this;

        if (!this.hasRasters()) {
            return _Promise.resolve(tile_data);
        }

        var configs = {}; // texture configs to pass to texture builder, keyed by texture name
        var index = {}; // index into raster sampler array, keyed by texture name

        // TODO: data source could retrieve raster texture URLs
        tile.rasters.map(function (r) {
            return _this2.sources[r];
        }).filter(function (x) {
            return x;
        }).forEach(function (source, i) {
            if (source instanceof _sourcesRaster.RasterTileSource) {
                var config = source.tileTexture(tile);
                configs[config.url] = config;
                index[config.url] = i;
            }
        });

        if (_Object$keys(configs).length === 0) {
            return _Promise.resolve(tile_data);
        }

        // Load textures on main thread and return when done
        // We want to block the building of a raster tile mesh until its texture is loaded,
        // to avoid flickering while loading (texture will render as black)
        return _utilsWorker_broker2['default'].postMessage(this.main_thread_target + '.loadTextures', configs).then(function (textures) {
            if (!textures || textures.length < 1) {
                // TODO: warning
                return tile_data;
            }

            // Set texture uniforms (returned after loading from main thread)
            tile_data.uniforms = tile_data.uniforms || {};
            tile_data.textures = tile_data.textures || [];

            var u_samplers = tile_data.uniforms['u_rasters'] = [];
            var u_sizes = tile_data.uniforms['u_raster_sizes'] = [];
            var u_offsets = tile_data.uniforms['u_raster_offsets'] = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _getIterator(textures), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 3);

                    var tname = _step$value[0];
                    var twidth = _step$value[1];
                    var theight = _step$value[2];

                    var i = index[tname];
                    var raster_coords = configs[tname].coords; // tile coords of raster tile

                    u_samplers[i] = tname;
                    tile_data.textures.push(tname);

                    u_sizes[i] = [twidth, theight];

                    // Tile geometry may be at a higher zoom than the raster tile texture,
                    // (e.g. an overzoomed raster tile), in which case we need to adjust the
                    // raster texture UVs to offset to the appropriate starting point for
                    // this geometry tile.
                    if (tile.coords.z > raster_coords.z) {
                        var dz = tile.coords.z - raster_coords.z; // # of levels raster source is overzoomed
                        var dz2 = Math.pow(2, dz);
                        u_offsets[i] = [tile.coords.x % dz2 / dz2, (dz2 - 1 - tile.coords.y % dz2) / dz2, // GL texture coords are +Y up
                        1 / dz2];
                    } else {
                        u_offsets[i] = [0, 0, 1];
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return tile_data;
        });
    },

    // Called on main thread
    loadTextures: function loadTextures(textures) {
        // NB: only return name and size of textures loaded, because we can't send actual texture objects to worker
        return _glTexture2['default'].createFromObject(this.gl, textures).then(function () {
            return _Promise.all(_Object$keys(textures).map(function (t) {
                return _glTexture2['default'].textures[t] && _glTexture2['default'].textures[t].load();
            }).filter(function (x) {
                return x;
            }));
        }).then(function (textures) {
            textures.forEach(function (t) {
                return t.retain();
            });
            return textures.map(function (t) {
                return [t.name, t.width, t.height];
            });
        });
    },

    // Setup any GL state for rendering
    setup: function setup() {
        this.setUniforms();
        this.material.setupProgram(_glShader_program2['default'].current);
    },

    // Set style uniforms on currently bound program
    setUniforms: function setUniforms() {
        var program = _glShader_program2['default'].current;
        if (!program) {
            return;
        }

        program.setUniforms(this.shaders && this.shaders.uniforms, true); // reset texture unit to 0
    },

    // Render state settings by blend mode
    render_states: {
        opaque: { depth_test: true, depth_write: true },
        add: { depth_test: true, depth_write: false },
        multiply: { depth_test: true, depth_write: false },
        inlay: { depth_test: true, depth_write: false },
        overlay: { depth_test: false, depth_write: false }
    },

    // Default sort order for blend modes
    default_blend_orders: {
        opaque: 0,
        add: 1,
        multiply: 2,
        inlay: 3,
        overlay: 4
    },

    // Comparison function for sorting styles by blend
    blendOrderSort: function blendOrderSort(a, b) {
        // opaque always comes first
        if (a.blend === 'opaque' || b.blend === 'opaque') {
            if (a.blend === 'opaque' && b.blend === 'opaque') {
                // if both are opaque
                return a.name < b.name ? -1 : 1; // use name as tie breaker
            } else if (a.blend === 'opaque') {
                    return -1; // only `a` was opaque
                } else {
                        return 1; // only `b` was opaque
                    }
        }

        // use explicit blend order if possible
        if (a.blend_order < b.blend_order) {
            return -1;
        } else if (a.blend_order > b.blend_order) {
            return 1;
        }

        // if blend orders are equal, use default order by blend mode
        if (Style.default_blend_orders[a.blend] < Style.default_blend_orders[b.blend]) {
            return -1;
        } else if (Style.default_blend_orders[a.blend] > Style.default_blend_orders[b.blend]) {
            return 1;
        }

        return a.name < b.name ? -1 : 1; // use name as tie breaker
    },

    update: function update() {
        // Style-specific animation
        // if (typeof this.animation === 'function') {
        //     this.animation();
        // }
    }

};
exports.Style = Style;

},{"../gl/shader_program":205,"../gl/texture":206,"../gl/vbo_mesh":208,"../light":217,"../material":218,"../selection":220,"../sources/raster":224,"../utils/log":243,"../utils/thread":247,"../utils/worker_broker":250,"./style_parser":235,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/keys":12,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/sliced-to-array":24}],234:[function(_dereq_,module,exports){
// Manage rendering styles

'use strict';

var _toConsumableArray = _dereq_('babel-runtime/helpers/to-consumable-array')['default'];

var _slicedToArray = _dereq_('babel-runtime/helpers/sliced-to-array')['default'];

var _Object$keys = _dereq_('babel-runtime/core-js/object/keys')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _Object$defineProperty = _dereq_('babel-runtime/core-js/object/define-property')['default'];

var _Object$create = _dereq_('babel-runtime/core-js/object/create')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsUtils = _dereq_('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _glShader_program = _dereq_('../gl/shader_program');

var _glShader_program2 = _interopRequireDefault(_glShader_program);

var _style = _dereq_('./style');

var _utilsMerge = _dereq_('../utils/merge');

var _utilsMerge2 = _interopRequireDefault(_utilsMerge);

var _geo = _dereq_('../geo');

var _geo2 = _interopRequireDefault(_geo);

var _utilsLog = _dereq_('../utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);


var shaderSrc_accessors = "#ifdef TANGRAM_VERTEX_SHADER\n\n// Vertex position in model space: [0, 1] range over the local tile\n// Note positions can be outside that range due to unclipped geometry, geometry higher than a unit cube, etc.\nvec4 modelPosition() {\n    return\n        vec4(\n            a_position.xyz / TANGRAM_TILE_SCALE         // scale coords to ~0-1 range\n            * exp2(u_tile_origin.z - u_tile_origin.w),  // adjust for tile overzooming\n        1.)\n        + vec4(0., 1., 0., 0.);\n        // NB: additional offset to account for unusual Tangram JS y coords,\n        // should be refactored to remove\n}\n\n// Position in model space as above, but according to tile coordinate (as opposed to style) zoom\n// e.g. unadjusted for tile overzooming\nvec4 modelPositionBaseZoom() {\n    return\n        vec4(\n            a_position.xyz / TANGRAM_TILE_SCALE,    // scale coords to ~0-1 range\n        1.)\n        + vec4(0., 1., 0., 0.); // see note on offset above\n}\n\n#endif\n\n// Vertex position in world coordinates, useful for 3d procedural textures, etc.\nvec4 worldPosition() {\n    return v_world_position;\n}\n\n// Optionally wrap world coordinates (allows more precision at higher zooms)\n// e.g. at wrap 1000, the world space will wrap every 1000 meters\n#ifdef TANGRAM_VERTEX_SHADER\n\nvec4 wrapWorldPosition(vec4 world_position) {\n    #if defined(TANGRAM_WORLD_POSITION_WRAP)\n    vec2 anchor = u_tile_origin.xy - mod(u_tile_origin.xy, TANGRAM_WORLD_POSITION_WRAP);\n        world_position.xy -= anchor;\n    #endif\n    return world_position;\n}\n\n#endif\n\n// Normal in world space\n#if defined(TANGRAM_VERTEX_SHADER)\n\nvec3 worldNormal() {\n    return TANGRAM_NORMAL;\n}\n\n#elif defined(TANGRAM_FRAGMENT_SHADER)\n\nvec3 worldNormal() {\n    return u_inverseNormalMatrix * TANGRAM_NORMAL;\n}\n\n#endif\n";
var shaderSrc_layerOrder = "// Apply layer ordering to avoid z-fighting\nvoid applyLayerOrder (float layer, inout vec4 position) {\n    position.z -= layer * TANGRAM_LAYER_DELTA * position.w;\n}\n";
var shaderSrc_selectionGlobals = "// Vertex attribute + varying for feature selection\n#if defined(TANGRAM_FEATURE_SELECTION) && defined(TANGRAM_VERTEX_SHADER)\n    attribute vec4 a_selection_color;\n    varying vec4 v_selection_color;\n#endif\n";
var shaderSrc_selectionVertex = "// Selection pass-specific rendering\n#if defined(TANGRAM_FEATURE_SELECTION) && defined(TANGRAM_VERTEX_SHADER)\n    if (a_selection_color.rgb == vec3(0.)) {\n        // Discard by forcing invalid triangle if we're in the feature\n        // selection pass but have no selection info\n        // TODO: in some cases we may actually want non-selectable features to occlude selectable ones?\n        gl_Position = vec4(0., 0., 0., 1.);\n        return;\n    }\n    v_selection_color = a_selection_color;\n#endif\n";

var StyleManager = {};
exports.StyleManager = StyleManager;
var Styles = {};
exports.Styles = Styles;
var BaseStyles = {};

exports.BaseStyles = BaseStyles;
StyleManager.styles = Styles;

// Set the base object used to instantiate styles
StyleManager.baseStyle = _style.Style;

// Global configuration for all styles
StyleManager.init = function () {
    _glShader_program2['default'].removeBlock('global');
    _glShader_program2['default'].removeBlock('setup');

    // Model and world position accessors
    _glShader_program2['default'].addBlock('global', shaderSrc_accessors);

    // Layer re-ordering function
    _glShader_program2['default'].addBlock('global', shaderSrc_layerOrder);

    // Feature selection global
    _glShader_program2['default'].addBlock('global', shaderSrc_selectionGlobals);

    // Feature selection vertex shader support
    _glShader_program2['default'].replaceBlock('setup', shaderSrc_selectionVertex);

    // Minimum value for float comparisons
    _glShader_program2['default'].defines.TANGRAM_EPSILON = 0.00001;

    // Minimum depth buffer value separating each `order` unit
    // Assume min 16-bit depth buffer, in practice uses 14-bits, 1 extra bit to handle virtual half-layers
    // for outlines (inserted in between layers), another extra bit to prevent precision loss
    _glShader_program2['default'].defines.TANGRAM_LAYER_DELTA = 1 / (1 << 14);

    // Internal tile scale
    _glShader_program2['default'].defines.TANGRAM_TILE_SCALE = 'vec3(' + _geo2['default'].tile_scale + '., ' + _geo2['default'].tile_scale + '., u_meters_per_pixel * ' + _geo2['default'].tile_size + '.)';

    // Increases precision for height values
    _glShader_program2['default'].defines.TANGRAM_HEIGHT_SCALE = _geo2['default'].height_scale;
};

// Destroy all styles for a given GL context
StyleManager.destroy = function (gl) {
    _Object$keys(Styles).forEach(function (_name) {
        var style = Styles[_name];
        if (style.gl === gl) {
            (0, _utilsLog2['default'])('trace', 'StyleManager.destroy: destroying render style ' + style.name);

            if (!style.isBuiltIn()) {
                StyleManager.remove(style.name);
            }
            style.destroy();
        }
    });
};

// Register a style
StyleManager.register = function (style) {
    Styles[style.name] = style;
    BaseStyles[style.name] = style;
};

// Remove a style
StyleManager.remove = function (name) {
    delete Styles[name];
};

StyleManager.mix = function (style, styles) {
    // Exit early if we have already applied mixins to this style
    if (style.mixed) {
        return style;
    }
    style.mixed = {};

    // Mixin sources, in order
    var sources = [];
    if (style.mix) {
        if (Array.isArray(style.mix)) {
            var _sources;

            (_sources = sources).push.apply(_sources, _toConsumableArray(style.mix));
        } else {
            sources.push(style.mix);
        }
        sources = sources.map(function (x) {
            return styles[x];
        }).filter(function (x) {
            return x && x !== style;
        }); // TODO: warning on trying to mix into self

        // Track which styles were mixed into this one
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = _getIterator(sources), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var s = _step.value;

                style.mixed[s.name] = true;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                    _iterator['return']();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    sources.push(style);

    // Flags - OR'd, true if any style has it set
    style.animated = sources.some(function (x) {
        return x && x.animated;
    });
    style.texcoords = sources.some(function (x) {
        return x && x.texcoords;
    });

    // Overwrites - last definition wins
    style.base = sources.map(function (x) {
        return x.base;
    }).filter(function (x) {
        return x;
    }).pop();
    style.lighting = sources.map(function (x) {
        return x.lighting;
    }).filter(function (x) {
        return x != null;
    }).pop();
    style.texture = sources.map(function (x) {
        return x.texture;
    }).filter(function (x) {
        return x;
    }).pop();
    style.raster = sources.map(function (x) {
        return x.raster;
    }).filter(function (x) {
        return x != null;
    }).pop();
    style.dash = sources.map(function (x) {
        return x.dash;
    }).filter(function (x) {
        return x != null;
    }).pop();
    style.dash_background_color = sources.map(function (x) {
        return x.dash_background_color;
    }).filter(function (x) {
        return x != null;
    }).pop();
    if (sources.some(function (x) {
        return x.hasOwnProperty('blend') && x.blend;
    })) {
        // only mix blend if explicitly set, otherwise let base style choose blending mode
        // hasOwnProperty check gives preference to base style prototype
        style.blend = sources.map(function (x) {
            return x.hasOwnProperty('blend') && x.blend;
        }).filter(function (x) {
            return x;
        }).pop();
    }
    style.blend_order = sources.map(function (x) {
        return x.blend_order;
    }).filter(function (x) {
        return x != null;
    }).pop();

    // Merges - property-specific rules for merging values
    style.defines = _Object$assign.apply(Object, [{}].concat(_toConsumableArray(sources.map(function (x) {
        return x.defines;
    }).filter(function (x) {
        return x;
    })))); // internal defines (not user-defined)
    style.material = _Object$assign.apply(Object, [{}].concat(_toConsumableArray(sources.map(function (x) {
        return x.material;
    }).filter(function (x) {
        return x;
    }))));

    // Mix shader properties
    StyleManager.mixShaders(style, styles, sources);
    return style;
};

// Mix the propertes in the "shaders" block
StyleManager.mixShaders = function (style, styles, sources) {
    var shaders = {}; // newly mixed shaders properties
    var shader_merges = sources.map(function (x) {
        return x.shaders;
    }).filter(function (x) {
        return x;
    }); // just the source styles with shader properties

    // Defines
    shaders.defines = _Object$assign.apply(Object, [{}].concat(_toConsumableArray(shader_merges.map(function (x) {
        return x.defines;
    }).filter(function (x) {
        return x;
    }))));

    // Uniforms
    shaders.uniforms = {}; // uniforms for this style, both explicitly defined, and mixed from other styles
    shaders._uniforms = style.shaders && style.shaders.uniforms || {}; // uniforms explicitly defined by *this* style
    shaders._uniform_scopes = {}; // tracks which style each uniform originated from (this one, or ancestor)

    // Mix in uniforms from ancestors, providing means to access
    sources.filter(function (x) {
        return x.shaders && x.shaders.uniforms;
    }).forEach(function (x) {
        var _loop = function (u) {
            shaders._uniform_scopes[u] = x.name;

            // Define getter and setter for this uniform
            // Getter returns value for this style if present, otherwise asks appropriate ancestor for it
            // Setter sets the value for this style (whether previously present in this style or not)
            // Mimics JS prototype/hasOwnProperty behavior, but with multiple ancestors (via mixins)
            _Object$defineProperty(shaders.uniforms, u, {
                enumerable: true,
                configurable: true,
                get: function get() {
                    // Uniform is explicitly defined on this style
                    if (shaders._uniforms[u] !== undefined) {
                        return shaders._uniforms[u];
                    }
                    // Uniform was mixed from another style, forward request there
                    // Identify check is needed to prevent infinite recursion if a previously defined uniform
                    // is set to undefined
                    else if (styles[shaders._uniform_scopes[u]].shaders.uniforms !== shaders.uniforms) {
                            return styles[shaders._uniform_scopes[u]].shaders.uniforms[u];
                        }
                },
                set: function set(v) {
                    shaders._uniforms[u] = v;
                }
            });
        };

        for (var u in x.shaders.uniforms) {
            _loop(u);
        }
    });

    // Extensions: build a list of unique extensions
    shaders.extensions = _Object$keys(shader_merges.map(function (x) {
        return x.extensions;
    }).filter(function (x) {
        return x;
    }).reduce(function (prev, cur) {
        // single extension
        if (typeof cur === 'string') {
            prev[cur] = true;
        }
        // array of extensions
        else {
                cur.forEach(function (x) {
                    return prev[x] = true;
                });
            }
        return prev;
    }, {}) || {});

    // Shader blocks
    // Mark all shader blocks for the target style as originating with its own name
    if (style.shaders && style.shaders.blocks) {
        style.shaders.block_scopes = style.shaders.block_scopes || {};
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = _getIterator(_utilsUtils2['default'].entries(style.shaders.blocks)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _step2$value = _slicedToArray(_step2.value, 2);

                var k = _step2$value[0];
                var block = _step2$value[1];

                style.shaders.block_scopes[k] = style.shaders.block_scopes[k] || [];
                if (Array.isArray(block)) {
                    var _style$shaders$block_scopes$k;

                    (_style$shaders$block_scopes$k = style.shaders.block_scopes[k]).push.apply(_style$shaders$block_scopes$k, _toConsumableArray(block.map(function () {
                        return style.name;
                    })));
                } else {
                    style.shaders.block_scopes[k].push(style.name);
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                    _iterator2['return']();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    }

    // Merge shader blocks, keeping track of which style each block originated from
    var mixed = {}; // all scopes mixed so far
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = _getIterator(shader_merges), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var source = _step3.value;

            if (!source.blocks) {
                continue;
            }

            shaders.blocks = shaders.blocks || {};
            shaders.block_scopes = shaders.block_scopes || {};
            var mixed_source = {}; // scopes mixed for this source style

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = _getIterator(_utilsUtils2['default'].entries(source.blocks)), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _step4$value = _slicedToArray(_step4.value, 2);

                    var t = _step4$value[0];
                    var block = _step4$value[1];

                    var block_scope = source.block_scopes[t];

                    shaders.blocks[t] = shaders.blocks[t] || [];
                    shaders.block_scopes[t] = shaders.block_scopes[t] || [];

                    // standardize on arrays (block can be single or multi-value)
                    block = Array.isArray(block) ? block : [block];
                    block_scope = Array.isArray(block_scope) ? block_scope : [block_scope];

                    for (var b = 0; b < block.length; b++) {
                        // Skip blocks we've already mixed in from the same scope
                        // Repeating scope indicates a diamond pattern where a style is being mixed multiple times
                        if (mixed[block_scope[b]]) {
                            continue;
                        }
                        mixed_source[block_scope[b]] = true;

                        shaders.blocks[t].push(block[b]);
                        shaders.block_scopes[t].push(block_scope[b]);
                    }
                }

                // Add styles mixed in from this source - they could be multi-level ancestors,
                // beyond the first-level "parents" defined in this style's `mix` list
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                        _iterator4['return']();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            _Object$assign(mixed, mixed_source);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                _iterator3['return']();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    _Object$assign(style.mixed, mixed); // add all newly mixed styles

    style.shaders = shaders; // assign back to style
    return style;
};

// Create a new style
// name: name of new style
// config: properties of new style
// styles: working set of styles being built (used for mixing in existing styles)
StyleManager.create = function (name, config) {
    var styles = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    var style = (0, _utilsMerge2['default'])({}, config); // deep copy
    style.name = name;

    // Style mixins
    style = StyleManager.mix(style, styles);

    // Has base style?
    // Only renderable (instantiated) styles should be included for run-time use
    // Others are intermediary/abstract, used during style composition but not execution
    if (style.base && BaseStyles[style.base]) {
        Styles[name] = style = _Object$assign(_Object$create(BaseStyles[style.base]), style);
    }

    return style;
};

// Called to create and initialize styles
StyleManager.build = function (styles) {
    var scene = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    // Sort styles by dependency, then build them
    var style_deps = _Object$keys(styles).sort(function (a, b) {
        return StyleManager.inheritanceDepth(a, styles) - StyleManager.inheritanceDepth(b, styles);
    });

    // Only keep built-in base styles
    for (var sname in Styles) {
        if (!BaseStyles[sname]) {
            delete Styles[sname];
        } else {
            Styles[sname].reset();
        }
    }

    // Working set of styles being built
    var ws = {};
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = _getIterator(style_deps), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var sname = _step5.value;

            ws[sname] = StyleManager.create(sname, styles[sname], ws);
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5['return']) {
                _iterator5['return']();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    StyleManager.initStyles(scene);
    return Styles;
};

// Initialize all styles
StyleManager.initStyles = function (scene) {
    // Initialize all
    for (var sname in Styles) {
        Styles[sname].init(scene);
    }
};

// Given a style key in a set of styles to add, count the length of the inheritance chain
StyleManager.inheritanceDepth = function (key, styles) {
    var parents = 0;

    while (true) {
        var style = styles[key];
        if (!style) {
            // this is a scene def error, trying to extend a style that doesn't exist
            break;
        }

        // Dependency chain ends when this style isn't mixing in any others
        if (!style.mix) {
            break;
        }

        // Traverse next parent style
        parents++;

        if (Array.isArray(style.mix)) {
            // If multiple mixins, find the deepest one
            parents += Math.max.apply(Math, _toConsumableArray(style.mix.map(function (s) {
                // Trying to mix into itself!
                if (key === s) {
                    return;
                }

                return StyleManager.inheritanceDepth(s, styles);
            })));
            break;
        } else {
            // Trying to mix into itself!
            if (key === style.mix) {
                break;
            }

            // If single mixin, continue loop up the tree
            key = style.mix;
        }
    }
    return parents;
};

// Compile all styles
StyleManager.compile = function (keys, scene) {
    keys = keys || _Object$keys(Styles);
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
        for (var _iterator6 = _getIterator(keys), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var key = _step6.value;

            var style = Styles[key];
            try {
                style.compile();
                (0, _utilsLog2['default'])('trace', 'StyleManager.compile(): compiled style ' + key);
            } catch (error) {
                (0, _utilsLog2['default'])('error', 'StyleManager.compile(): error compiling style ' + key + ':', error);

                scene.trigger('warning', {
                    type: 'styles',
                    message: 'Error compiling style ' + key,
                    style: style,
                    shader_errors: style.program && style.program.shader_errors
                });
            }
        }
    } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion6 && _iterator6['return']) {
                _iterator6['return']();
            }
        } finally {
            if (_didIteratorError6) {
                throw _iteratorError6;
            }
        }
    }

    (0, _utilsLog2['default'])('debug', 'StyleManager.compile(): compiled all styles');
};

// Get all styles with mesh data for a given tile
StyleManager.stylesForTile = function (tile_key) {
    var styles = [];
    for (var s in Styles) {
        if (Styles[s].hasDataForTile(tile_key)) {
            styles.push(s);
        }
    }
    return styles;
};

},{"../geo":201,"../gl/shader_program":205,"../utils/log":243,"../utils/merge":244,"../utils/utils":248,"./style":233,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/create":7,"babel-runtime/core-js/object/define-property":9,"babel-runtime/core-js/object/keys":12,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/sliced-to-array":24,"babel-runtime/helpers/to-consumable-array":25}],235:[function(_dereq_,module,exports){
'use strict';

var _Object$freeze = _dereq_('babel-runtime/core-js/object/freeze')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsUtils = _dereq_('../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _geo = _dereq_('../geo');

var _geo2 = _interopRequireDefault(_geo);

var _csscolorparser = _dereq_('csscolorparser');

var _csscolorparser2 = _interopRequireDefault(_csscolorparser);

var StyleParser = {};

exports.StyleParser = StyleParser;
// Wraps style functions and provides a scope of commonly accessible data:
// - feature: the 'properties' of the feature, e.g. accessed as 'feature.name'
// - global: user-defined properties on the `global` object in the scene file
// - $zoom: the current map zoom level
// - $geometry: the type of geometry, 'point', 'line', or 'polygon'
// - $meters_per_pixel: conversion for meters/pixels at current map zoom
StyleParser.wrapFunction = function (func) {
    var f = 'function(context) {\n                var feature = context.feature.properties;\n                var global = context.global;\n                var $zoom = context.zoom;\n                var $layer = context.layer;\n                var $geometry = context.geometry;\n                var $meters_per_pixel = context.meters_per_pixel;\n\n                var val = (' + func + '());\n\n                if (typeof val === \'number\' && isNaN(val)) {\n                    val = null; // convert NaNs to nulls\n                }\n\n                return val;\n            }';
    return f;
};

// Style parsing

StyleParser.zeroPair = _Object$freeze([0, 0]); // single allocation for zero values that won't be modified

// Style defaults
StyleParser.defaults = {
    color: [1, 1, 1, 1],
    width: 1,
    size: 1,
    extrude: false,
    height: 20,
    min_height: 0,
    order: 0,
    z: 0,
    material: {
        ambient: 1,
        diffuse: 1
    }
};

// Style macros
StyleParser.macros = {
    // pseudo-random color by geometry id
    'Style.color.pseudoRandomColor': function StyleColorPseudoRandomColor() {
        return [0.7 * (parseInt(feature.id, 16) / 100 % 1), // jshint ignore:line
        0.7 * (parseInt(feature.id, 16) / 10000 % 1), // jshint ignore:line
        0.7 * (parseInt(feature.id, 16) / 1000000 % 1), // jshint ignore:line
        1];
    },

    // random color
    'Style.color.randomColor': function StyleColorRandomColor() {
        return [0.7 * Math.random(), 0.7 * Math.random(), 0.7 * Math.random(), 1];
    }
};

// A context object that is passed to style parsing functions to provide a scope of commonly used values
StyleParser.getFeatureParseContext = function (feature, tile, global) {
    return {
        feature: feature,
        tile: tile,
        global: global,
        zoom: tile.style_zoom,
        geometry: _geo2['default'].geometryType(feature.geometry.type),
        meters_per_pixel: tile.meters_per_pixel,
        units_per_meter_overzoom: tile.units_per_meter_overzoom
    };
};

// Build a style param cache object
// `value` is raw value, cache methods will add other properties as needed
// `transform` is optional transform function to run on values (except function values)
StyleParser.cacheObject = function (obj) {
    var transform = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    if (obj == null) {
        return;
    }

    if (obj.value) {
        return { value: obj.value, zoom: obj.zoom ? {} : null }; // clone existing cache object
    }

    var c = { value: obj };

    if (typeof transform === 'function') {
        if (Array.isArray(c.value) && Array.isArray(c.value[0])) {
            // zoom stops
            c.value = c.value.map(function (v) {
                return [v[0], transform(v[1])];
            });
            c.zoom = {}; // will hold values interpolated by zoom
        } else if (typeof c.value !== 'function') {
                // don't transform functions
                c.value = transform(c.value); // single value
            }
    }

    return c;
};

// Convert old-style color macro into a function
// TODO: deprecate this macro syntax
StyleParser.colorCacheObject = function (obj) {
    return StyleParser.cacheObject(obj, function (v) {
        if (v === 'Style.color.pseudoRandomColor') {
            return _utilsUtils2['default'].stringToFunction(StyleParser.wrapFunction(StyleParser.macros['Style.color.pseudoRandomColor']));
        } else if (v === 'Style.color.randomColor') {
            return StyleParser.macros['Style.color.randomColor'];
        }

        return v;
    });
};

// Interpolation and caching for a generic property (not a color or distance)
// { value: original, static: val, zoom: { 1: val1, 2: val2, ... }, dynamic: function(){...} }
StyleParser.cacheProperty = function (val, context) {
    if (val == null) {
        return;
    } else if (val.dynamic) {
        // function, compute each time (no caching)
        var v = val.dynamic(context);
        return v;
    } else if (val['static']) {
        // single static value
        return val['static'];
    } else if (val.zoom && val.zoom[context.zoom]) {
        // interpolated, cached
        return val.zoom[context.zoom];
    } else {
        // not yet evaulated for cache
        // Dynamic function-based
        if (typeof val.value === 'function') {
            val.dynamic = val.value;
            var v = val.dynamic(context);
            return v;
        }
        // Array of zoom-interpolated stops, e.g. [zoom, value] pairs
        else if (Array.isArray(val.value) && Array.isArray(val.value[0])) {
                // Calculate value for current zoom
                val.zoom = val.zoom || {};
                val.zoom = {};
                val.zoom[context.zoom] = _utilsUtils2['default'].interpolate(context.zoom, val.value);
                return val.zoom[context.zoom];
            }
            // Single static value
            else {
                    val['static'] = val.value;
                    return val['static'];
                }
    }
};

StyleParser.convertUnits = function (val, context) {
    // pre-parsed units
    if (val.val != null) {
        if (val.units === 'px') {
            // convert from pixels
            return val.val * _geo2['default'].metersPerPixel(context.zoom);
        }
        return val.val;
    }
    // un-parsed unit string
    else if (typeof val === 'string') {
            var units = val.match(/([0-9.-]+)([a-z]+)/);
            if (units && units.length === 3) {
                val = parseFloat(units[1]);
                units = units[2];
            }

            if (units === 'px') {
                // convert from pixels
                val *= _geo2['default'].metersPerPixel(context.zoom);
            }
        }
        // multiple values or stops
        else if (Array.isArray(val)) {
                // Array of arrays, e.g. zoom-interpolated stops
                if (Array.isArray(val[0])) {
                    return val.map(function (v) {
                        return [v[0], StyleParser.convertUnits(v[1], context)];
                    });
                }
                // Array of values
                else {
                        return val.map(function (v) {
                            return StyleParser.convertUnits(v, context);
                        });
                    }
            }
    return val;
};

// Pre-parse units from string values
StyleParser.cacheUnits = function (val) {
    var obj = { val: parseFloat(val) };
    if (obj.val !== 0 && typeof val === 'string' && val.trim().slice(-2) === 'px') {
        obj.units = 'px';
    }
    return obj;
};

// Takes a distance cache object and returns a distance value for this zoom
// (caching the result for future use)
// { value: original, zoom: { z: meters }, dynamic: function(){...} }
StyleParser.cacheDistance = function (val, context) {
    if (val.dynamic) {
        var v = val.dynamic(context);
        return v;
    } else if (val.zoom && val.zoom[context.zoom]) {
        return val.zoom[context.zoom];
    } else {
        // Dynamic function-based
        if (typeof val.value === 'function') {
            val.dynamic = val.value;
            var v = val.dynamic(context);
            return v;
        }
        // Array of zoom-interpolated stops, e.g. [zoom, value] pairs
        else if (val.zoom) {
                // Calculate value for current zoom
                // Do final unit conversion as late as possible, when interpolation values have been determined
                val.zoom[context.zoom] = _utilsUtils2['default'].interpolate(context.zoom, val.value, function (v) {
                    return StyleParser.convertUnits(v, context);
                });

                return val.zoom[context.zoom];
            } else {
                return StyleParser.convertUnits(val.value, context);
            }
    }
};

// Cache previously parsed color strings
StyleParser.string_colors = {};
StyleParser.colorForString = function (string) {
    // Cached
    if (StyleParser.string_colors[string]) {
        return StyleParser.string_colors[string];
    }

    // Calculate and cache
    var color = _csscolorparser2['default'].parseCSSColor(string);
    if (color && color.length === 4) {
        color[0] /= 255;
        color[1] /= 255;
        color[2] /= 255;
    } else {
        color = StyleParser.defaults.color;
    }
    StyleParser.string_colors[string] = color;
    return color;
};

// Takes a color cache object and returns a color value for this zoom
// (caching the result for future use)
// { value: original, static: [r,g,b,a], zoom: { z: [r,g,b,a] }, dynamic: function(){...} }
StyleParser.cacheColor = function (val) {
    var context = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (val.dynamic) {
        var v = val.dynamic(context);

        if (typeof v === 'string') {
            v = StyleParser.colorForString(v);
        }

        if (v && v[3] == null) {
            v[3] = 1; // default alpha
        }
        return v;
    } else if (val['static']) {
        return val['static'];
    } else if (val.zoom && val.zoom[context.zoom]) {
        return val.zoom[context.zoom];
    } else {
        // Dynamic function-based color
        if (typeof val.value === 'function') {
            val.dynamic = val.value;
            var v = val.dynamic(context);

            if (typeof v === 'string') {
                v = StyleParser.colorForString(v);
            }

            if (v && v[3] == null) {
                v[3] = 1; // default alpha
            }
            return v;
        }
        // Single string color
        else if (typeof val.value === 'string') {
                val['static'] = StyleParser.colorForString(val.value);
                return val['static'];
            }
            // Array of zoom-interpolated stops, e.g. [zoom, color] pairs
            else if (val.zoom) {
                    // Parse any string colors inside stops, the first time we encounter this property
                    if (!val.zoom_preprocessed) {
                        for (var i = 0; i < val.value.length; i++) {
                            var v = val.value[i];
                            if (v && typeof v[1] === 'string') {
                                v[1] = StyleParser.colorForString(v[1]);
                            }
                        }
                        val.zoom_preprocessed = true;
                    }

                    // Calculate color for current zoom
                    val.zoom[context.zoom] = _utilsUtils2['default'].interpolate(context.zoom, val.value);
                    val.zoom[context.zoom][3] = val.zoom[context.zoom][3] || 1; // default alpha
                    return val.zoom[context.zoom];
                }
                // Single array color
                else {
                        val['static'] = val.value;
                        if (val['static'] && val['static'][3] == null) {
                            val['static'][3] = 1; // default alpha
                        }
                        return val['static'];
                    }
    }
};

StyleParser.parseColor = function (val) {
    var context = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (typeof val === 'function') {
        val = val(context);
    }

    // Parse CSS-style colors
    // TODO: change all colors to use 0-255 range internally to avoid dividing and then re-multiplying in geom builder
    if (typeof val === 'string') {
        val = StyleParser.colorForString(val);
    } else if (Array.isArray(val) && Array.isArray(val[0])) {
        // Array of zoom-interpolated stops, e.g. [zoom, color] pairs
        for (var i = 0; i < val.length; i++) {
            var v = val[i];
            if (typeof v[1] === 'string') {
                v[1] = StyleParser.colorForString(v[1]);
            }
        }

        if (context.zoom) {
            val = _utilsUtils2['default'].interpolate(context.zoom, val);
        }
    }

    // Defaults
    if (val) {
        // alpha
        if (val[3] == null) {
            val[3] = 1;
        }
    } else {
        val = [0, 0, 0, 1];
    }

    return val;
};

StyleParser.calculateOrder = function (order, context) {
    // Computed order
    if (typeof order === 'function') {
        order = order(context);
    } else if (typeof order === 'string') {
        // Order tied to feature property
        if (context.feature.properties[order]) {
            order = context.feature.properties[order];
        }
        // Explicit order value
        else {
                order = parseFloat(order);
            }
    }

    return order;
};

// Evaluate a function-based property, or pass-through static value
StyleParser.evalProp = function (prop, context) {
    if (typeof prop === 'function') {
        return prop(context);
    }
    return prop;
};

},{"../geo":201,"../utils/utils":248,"babel-runtime/core-js/object/freeze":10,"babel-runtime/helpers/interop-require-default":23,"csscolorparser":138}],236:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _slicedToArray = _dereq_('babel-runtime/helpers/sliced-to-array')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsLog = _dereq_('../../utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _utilsUtils = _dereq_('../../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _glTexture = _dereq_('../../gl/texture');

var _glTexture2 = _interopRequireDefault(_glTexture);

var _fontfaceobserver = _dereq_('fontfaceobserver');

var _fontfaceobserver2 = _interopRequireDefault(_fontfaceobserver);

var CanvasText = (function () {
    function CanvasText() {
        _classCallCheck(this, CanvasText);

        this.canvas = document.createElement('canvas');
        this.canvas.style.backgroundColor = 'transparent'; // render text on transparent background
        this.context = this.canvas.getContext('2d');
    }

    // Extract font size and units

    _createClass(CanvasText, [{
        key: 'resize',
        value: function resize(width, height) {
            this.canvas.width = width;
            this.canvas.height = height;
            this.context.clearRect(0, 0, width, height);
        }

        // Set font style params for canvas drawing
    }, {
        key: 'setFont',
        value: function setFont(_ref) {
            var font_css = _ref.font_css;
            var fill = _ref.fill;
            var stroke = _ref.stroke;
            var stroke_width = _ref.stroke_width;
            var px_size = _ref.px_size;

            this.px_size = px_size;
            this.text_buffer = 8; // pixel padding around text
            var ctx = this.context;

            ctx.font = font_css;
            if (stroke) {
                ctx.strokeStyle = stroke;
                ctx.lineWidth = stroke_width;
            } else {
                ctx.strokeStyle = null;
                ctx.lineWidth = 0;
            }
            ctx.fillStyle = fill;
            ctx.miterLimit = 2;
        }
    }, {
        key: 'textSizes',
        value: function textSizes(texts) {
            var _this = this;

            return CanvasText.fonts_loaded.then(function () {
                for (var style in texts) {
                    var text_infos = texts[style];
                    var first = true;

                    for (var text in text_infos) {
                        // Use cached size, or compute via canvas
                        if (!CanvasText.text_cache[style] || !CanvasText.text_cache[style][text]) {
                            var text_settings = text_infos[text].text_settings;
                            if (first) {
                                _this.setFont(text_settings);
                                first = false;
                            }

                            CanvasText.text_cache[style] = CanvasText.text_cache[style] || {};
                            CanvasText.text_cache[style][text] = _this.textSize(text, text_settings.transform, text_settings.text_wrap);
                            CanvasText.cache_stats.misses++;
                        } else {
                            CanvasText.cache_stats.hits++;
                        }

                        // Only send text sizes back to worker (keep computed text line info
                        // on main thread, for future rendering)
                        text_infos[text].size = CanvasText.text_cache[style][text].size;
                    }
                }

                return texts;
            });
        }

        // Computes width and height of text based on current font style
        // Includes word wrapping, returns size info for whole text block and individual lines
    }, {
        key: 'textSize',
        value: function textSize(text, transform, text_wrap) {
            var str = this.applyTextTransform(text, transform);
            var ctx = this.context;
            var buffer = this.text_buffer * _utilsUtils2['default'].device_pixel_ratio;
            var leading = 2 * _utilsUtils2['default'].device_pixel_ratio; // make configurable and/or use Canvas TextMetrics when available
            var line_height = this.px_size + leading; // px_size already in device pixels

            // Word wrapping
            // Line breaks can be caused by:
            //  - implicit line break when a maximum character threshold is exceeded per line (text_wrap)
            //  - explicit line break in the label text (\n)
            var words = undefined;
            if (typeof text_wrap === 'number') {
                words = str.split(' '); // split words on spaces
            } else {
                    words = [str]; // no max line word wrapping (but new lines will still be in effect)
                }
            var new_line_template = { width: 0, chars: 0, text: '' };
            var line = _Object$assign({}, new_line_template); // current line
            var lines = []; // completed lines
            var max_width = 0; // max width to fit all lines

            // add current line buffer to completed lines, optionally start new line
            function addLine(new_line) {
                line.text = line.text.trim();
                if (line.text.length > 0) {
                    line.width = ctx.measureText(line.text).width;
                    max_width = Math.max(max_width, Math.ceil(line.width));
                    lines.push(line);
                }
                if (new_line) {
                    line = _Object$assign({}, new_line_template);
                }
            }

            // First iterate on space-break groups (will be one if max line length off), then iterate on line-break groups
            for (var w = 0; w < words.length; w++) {
                var breaks = words[w].split('\n'); // split on line breaks

                for (var n = 0; n < breaks.length; n++) {
                    var word = breaks[n];

                    // if adding current word would overflow, add a new line instead
                    if (line.chars + word.length > text_wrap && line.chars > 0) {
                        addLine(true);
                    }

                    // add current word (plus space)
                    line.chars += word.length + 1;
                    line.text += word + ' ';

                    // if line breaks present, add new line (unless on last line)
                    if (breaks.length > 1 && n < breaks.length - 1) {
                        addLine(true);
                    }
                }
            }
            addLine(false);

            // Final dimensions of text
            var height = lines.length * line_height;

            var collision_size = [max_width / _utilsUtils2['default'].device_pixel_ratio, height / _utilsUtils2['default'].device_pixel_ratio];

            var texture_size = [max_width + buffer * 2, height + buffer * 2];

            var logical_size = texture_size.map(function (v) {
                return v / _utilsUtils2['default'].device_pixel_ratio;
            });

            // Returns lines (w/per-line info for drawing) and text's overall bounding box + canvas size
            return {
                lines: lines,
                size: { collision_size: collision_size, texture_size: texture_size, logical_size: logical_size, line_height: line_height }
            };
        }

        // Draw one or more lines of text at specified location, adjusting for buffer and baseline
    }, {
        key: 'drawText',
        value: function drawText(lines, _ref2, size, _ref3) {
            var _ref22 = _slicedToArray(_ref2, 2);

            var x = _ref22[0];
            var y = _ref22[1];
            var stroke = _ref3.stroke;
            var transform = _ref3.transform;
            var align = _ref3.align;

            align = align || 'center';

            for (var line_num = 0; line_num < lines.length; line_num++) {
                var line = lines[line_num];
                var str = this.applyTextTransform(line.text, transform);
                var buffer = this.text_buffer * _utilsUtils2['default'].device_pixel_ratio;
                var texture_size = size.texture_size;
                var line_height = size.line_height;

                // Text alignment
                var tx = undefined;
                if (align === 'left') {
                    tx = x + buffer;
                } else if (align === 'center') {
                    tx = x + texture_size[0] / 2 - line.width / 2;
                } else if (align === 'right') {
                    tx = x + texture_size[0] - line.width - buffer;
                }

                // In the absence of better Canvas TextMetrics (not supported by browsers yet),
                // 0.75 buffer produces a better approximate vertical centering of text
                var ty = y + buffer * 0.75 + (line_num + 1) * line_height;

                if (stroke) {
                    this.context.strokeText(str, tx, ty);
                }
                this.context.fillText(str, tx, ty);
            }
        }
    }, {
        key: 'rasterize',
        value: function rasterize(texts, texture_size) {
            for (var style in texts) {
                var text_infos = texts[style];
                var first = true;

                for (var text in text_infos) {
                    var info = text_infos[text];
                    var text_settings = info.text_settings;
                    var lines = CanvasText.text_cache[style][text].lines; // get previously computed lines of text

                    if (first) {
                        this.setFont(text_settings);
                        first = false;
                    }

                    this.drawText(lines, info.position, info.size, {
                        stroke: text_settings.stroke,
                        transform: text_settings.transform,
                        align: text_settings.align
                    });

                    info.texcoords = _glTexture2['default'].getTexcoordsForSprite(info.position, info.size.texture_size, texture_size);
                }
            }
        }

        // Place text labels within an atlas of the given max size
    }, {
        key: 'setTextureTextPositions',
        value: function setTextureTextPositions(texts, max_texture_size) {
            // Find widest label
            var widest = 0;
            for (var style in texts) {
                var text_infos = texts[style];
                for (var text in text_infos) {
                    var size = text_infos[text].size.texture_size;
                    if (size[0] > widest) {
                        widest = size[0];
                    }
                }
            }

            // Layout labels, stacked in columns
            var cx = 0,
                cy = 0; // current x/y position in atlas
            var height = 0; // overall atlas height
            for (var style in texts) {
                var text_infos = texts[style];
                for (var text in text_infos) {
                    var text_info = text_infos[text];
                    var size = text_info.size.texture_size;
                    if (cy + size[1] < max_texture_size) {
                        text_info.position = [cx, cy]; // add label to current column
                        cy += size[1];
                        if (cy > height) {
                            height = cy;
                        }
                    } else {
                        // start new column if taller than texture
                        cx += widest;
                        cy = 0;
                        text_info.position = [cx, cy];
                    }
                }
            }

            return [cx + widest, height]; // overall atlas size
        }

        // Called before rasterization
    }, {
        key: 'applyTextTransform',
        value: function applyTextTransform(text, transform) {
            if (transform === 'capitalize') {
                return text.replace(/\w\S*/g, function (txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1);
                });
            } else if (transform === 'uppercase') {
                return text.toUpperCase();
            } else if (transform === 'lowercase') {
                return text.toLowerCase();
            }
            return text;
        }

        // Convert font CSS-style size ('12px', '14pt', '1.5em', etc.) to pixel size (adjusted for device pixel ratio)
        // Defaults units to pixels if not specified
    }], [{
        key: 'fontPixelSize',
        value: function fontPixelSize(size) {
            if (size == null) {
                return;
            }
            size = typeof size === 'string' ? size : String(size); // need a string for regex

            var _ref4 = size.match(CanvasText.font_size_re) || [];

            var _ref42 = _slicedToArray(_ref4, 3);

            var px_size = _ref42[1];
            var units = _ref42[2];

            units = units || 'px';

            if (units === "em") {
                px_size *= 16;
            } else if (units === "pt") {
                px_size /= 0.75;
            } else if (units === "%") {
                px_size /= 6.25;
            }

            px_size = parseFloat(px_size);
            px_size *= _utilsUtils2['default'].device_pixel_ratio;
            return px_size;
        }

        // Load set of custom font faces
        // `fonts` is an object where the key is a font family name, and the value is one or more font face
        // definitions. The value can be either a single object, or an array of such objects.
        // If the special string value 'external' is used, it indicates the the font will be loaded via external CSS.
    }, {
        key: 'loadFonts',
        value: function loadFonts(fonts) {
            var _this2 = this;

            var queue = [];

            var _loop = function (family) {
                if (Array.isArray(fonts[family])) {
                    fonts[family].forEach(function (face) {
                        return queue.push(_this2.loadFontFace(family, face));
                    });
                } else {
                    queue.push(_this2.loadFontFace(family, fonts[family]));
                }
            };

            for (var family in fonts) {
                _loop(family);
            }

            CanvasText.fonts_loaded = _Promise.all(queue.filter(function (x) {
                return x;
            }));
            return CanvasText.fonts_loaded;
        }

        // Load a single font face
        // `face` contains the font face definition, with optional parameters for `weight`, `style`, and `url`.
        // If the `url` is defined, the font is injected into the document as a CSS font-face.
        // If the object's value is the special string 'external', or if no `url` is defined, then the font face
        // is assumed is assumed to been loaded via external CSS. In either case, the function returns a promise
        // that resolves when the font face has loaded, or times out.
    }, {
        key: 'loadFontFace',
        value: function loadFontFace(family, face) {
            if (face == null || typeof face !== 'object' && face !== 'external') {
                return;
            }

            var options = { family: family };

            if (typeof face === 'object') {
                _Object$assign(options, face);

                // If URL is defined, inject font into document
                if (typeof face.url === 'string') {
                    this.injectFontFace(options);
                }
            }

            // Wait for font to load
            return new _fontfaceobserver2['default'](family, options).load().then(function () {
                // Promise resolves, font is available
                (0, _utilsLog2['default'])('debug', 'Font face \'' + family + '\' is available', options);
            }, function () {
                // Promise rejects, font is not available
                (0, _utilsLog2['default'])('debug', 'Font face \'' + family + '\' is NOT available', options);
            });
        }

        // Loads a font face via CSS injection
        // TODO: consider support for multiple format URLs per face, unicode ranges
    }, {
        key: 'injectFontFace',
        value: function injectFontFace(_ref5) {
            var family = _ref5.family;
            var url = _ref5.url;
            var weight = _ref5.weight;
            var style = _ref5.style;

            var css = '\n            @font-face {\n                font-family: \'' + family + '\';\n                font-weight: ' + (weight || 'normal') + ';\n                font-style: ' + (style || 'normal') + ';\n                src: url(' + encodeURI(url) + ');\n            }\n        ';

            var style_el = document.createElement('style');
            style_el.appendChild(document.createTextNode(""));
            document.head.appendChild(style_el);
            style_el.sheet.insertRule(css, 0);
            (0, _utilsLog2['default'])('trace', 'Injecting CSS font face:', css);
        }
    }]);

    return CanvasText;
})();

exports['default'] = CanvasText;
CanvasText.font_size_re = /((?:[0-9]*\.)?[0-9]+)\s*(px|pt|em|%)?/;

// Cache sizes of rendered text
CanvasText.text_cache = {}; // by text style, then text string
CanvasText.cache_stats = { hits: 0, misses: 0 };

// Font detection
CanvasText.fonts_loaded = _Promise.resolve(); // resolves when all requested fonts have been detected
module.exports = exports['default'];

},{"../../gl/texture":206,"../../utils/log":243,"../../utils/utils":248,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/sliced-to-array":24,"fontfaceobserver":140}],237:[function(_dereq_,module,exports){
// Text rendering style

'use strict';

var _Object$create = _dereq_('babel-runtime/core-js/object/create')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _geo = _dereq_('../../geo');

var _geo2 = _interopRequireDefault(_geo);

var _style = _dereq_('../style');

var _pointsPoints = _dereq_('../points/points');

var _labelsCollision = _dereq_('../../labels/collision');

var _labelsCollision2 = _interopRequireDefault(_labelsCollision);

var _labelsLabel_point = _dereq_('../../labels/label_point');

var _labelsLabel_point2 = _interopRequireDefault(_labelsLabel_point);

var _labelsLabel_line = _dereq_('../../labels/label_line');

var _labelsLabel_line2 = _interopRequireDefault(_labelsLabel_line);

var TextStyle = _Object$create(_pointsPoints.Points);

exports.TextStyle = TextStyle;
_Object$assign(TextStyle, {
    name: 'text',
    'super': _pointsPoints.Points,
    built_in: true,
    selection: false, // no feature selection for text by default

    init: function init() {
        this['super'].init.apply(this, arguments);

        // Point style (parent class) requires texturing to be turned on
        // (labels are always drawn with textures)
        this.defines.TANGRAM_POINT_TEXTURE = true;

        // Disable dual point/text mode
        this.defines.TANGRAM_MULTI_SAMPLER = false;

        // Manually un-multiply alpha, because Canvas text rasterization is pre-multiplied
        this.defines.TANGRAM_UNMULTIPLY_ALPHA = true;

        // Fade out text when tile is zooming out, e.g. acting as proxy tiles
        this.defines.TANGRAM_FADE_ON_ZOOM_OUT = true;
        this.defines.TANGRAM_FADE_ON_ZOOM_OUT_RATE = 2; // fade at 2x, e.g. fully transparent at 0.5 zoom level away

        this.reset();
    },

    reset: function reset() {
        this.queues = {};
        this.resetText();
    },

    // Override to queue features instead of processing immediately
    addFeature: function addFeature(feature, draw, context) {
        var tile = context.tile;
        if (tile.generation !== this.generation) {
            return;
        }

        // Called here because otherwise it will be delayed until the feature queue is parsed,
        // and we want the preprocessing done before we evaluate text style below
        draw = this.preprocess(draw);
        if (!draw) {
            return;
        }

        var q = this.parseTextFeature(feature, draw, context, tile);
        if (!q) {
            return;
        }

        q.feature = feature;
        q.context = context;
        q.layout.vertex = false; // vertex placement option not applicable to standalone labels

        // Queue the feature for processing
        if (!this.tile_data[tile.key]) {
            this.startData(tile);
        }
        this.queues[tile.key].push(q);

        // Register with collision manager
        _labelsCollision2['default'].addStyle(this.name, tile.key);
    },

    // Implements label creation for TextLabels mixin
    createTextLabels: function createTextLabels(tile_key, feature_queue) {
        var labels = [];
        for (var f = 0; f < feature_queue.length; f++) {
            var fq = feature_queue[f];
            var text_info = this.texts[tile_key][fq.text_settings_key][fq.text];
            var feature_labels = this.buildLabels(text_info.size.collision_size, fq.feature.geometry, fq.layout);
            for (var i = 0; i < feature_labels.length; i++) {
                var fql = _Object$create(fq);
                fql.label = feature_labels[i];
                labels.push(fql);
            }
        }
        return labels;
    },

    // Override
    startData: function startData(tile) {
        this.queues[tile.key] = [];
        return _style.Style.startData.call(this, tile);
    },

    // Override
    endData: function endData(tile) {
        var _this = this;

        return this.renderTextLabels(tile, this.name, this.queues[tile.key]).then(function (_ref) {
            var labels = _ref.labels;
            var texts = _ref.texts;
            var texture = _ref.texture;

            if (texts) {
                _this.texts[tile.key] = texts;

                // Build queued features
                labels.forEach(function (q) {
                    var text_settings_key = q.text_settings_key;
                    var text_info = _this.texts[tile.key] && _this.texts[tile.key][text_settings_key] && _this.texts[tile.key][text_settings_key][q.text];

                    // setup styling object expected by Style class
                    var style = _this.feature_style;
                    style.label = q.label;
                    style.size = text_info.size.logical_size;
                    style.angle = q.label.angle || 0;
                    style.texcoords = text_info.texcoords;

                    _style.Style.addFeature.call(_this, q.feature, q.draw, q.context);
                });
            }
            _this.freeText(tile);

            // Finish tile mesh
            return _style.Style.endData.call(_this, tile).then(function (tile_data) {
                // Attach tile-specific label atlas to mesh as a texture uniform
                if (texture && tile_data) {
                    tile_data.uniforms.u_texture = texture;
                    tile_data.textures.push(texture); // assign texture ownership to tile
                    return tile_data;
                }
            });
        });
    },

    // Sets up caching for draw properties
    _preprocess: function _preprocess(draw) {
        return this.preprocessText(draw);
    },

    // Builds one or more labels for a geometry
    buildLabels: function buildLabels(size, geometry, options) {
        var labels = [];

        if (geometry.type === "LineString") {
            this.buildLineLabels(size, geometry.coordinates, options, labels);
        } else if (geometry.type === "MultiLineString") {
            var lines = geometry.coordinates;
            for (var i = 0; i < lines.length; ++i) {
                this.buildLineLabels(size, lines[i], options, labels);
            }
        } else if (geometry.type === "Point") {
            labels.push(new _labelsLabel_point2['default'](geometry.coordinates, size, options));
        } else if (geometry.type === "MultiPoint") {
            var points = geometry.coordinates;

            for (var i = 0; i < points.length; ++i) {
                labels.push(new _labelsLabel_point2['default'](points[i], size, options));
            }
        } else if (geometry.type === "Polygon") {
            var centroid = _geo2['default'].centroid(geometry.coordinates);
            labels.push(new _labelsLabel_point2['default'](centroid, size, options));
        } else if (geometry.type === "MultiPolygon") {
            var centroid = _geo2['default'].multiCentroid(geometry.coordinates);
            labels.push(new _labelsLabel_point2['default'](centroid, size, options));
        }

        return labels;
    },

    // Build one or more labels for a line geometry
    buildLineLabels: function buildLineLabels(size, line, options, labels) {
        var subdiv = Math.min(options.subdiv, line.length - 1);
        if (subdiv > 1) {
            // Create multiple labels for line, with each allotted a range of segments
            // in which it will attempt to place
            var seg_per_div = (line.length - 1) / subdiv;
            for (var i = 0; i < subdiv; i++) {
                options.segment_start = Math.floor(i * seg_per_div);
                options.segment_end = Math.floor((i + 1) * seg_per_div);
                labels.push(new _labelsLabel_line2['default'](size, line, options));
            }
            options.segment_start = null;
            options.segment_end = null;
        } else {
            labels.push(new _labelsLabel_line2['default'](size, line, options));
        }
    }

});

TextStyle.texture_id = 0; // namespaces per-tile label textures

},{"../../geo":201,"../../labels/collision":212,"../../labels/label_line":214,"../../labels/label_point":215,"../points/points":230,"../style":233,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/object/create":7,"babel-runtime/helpers/interop-require-default":23}],238:[function(_dereq_,module,exports){
// Text label rendering methods, can be mixed into a rendering style

'use strict';

var _toConsumableArray = _dereq_('babel-runtime/helpers/to-consumable-array')['default'];

var _Object$keys = _dereq_('babel-runtime/core-js/object/keys')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _style_parser = _dereq_('../style_parser');

var _glTexture = _dereq_('../../gl/texture');

var _glTexture2 = _interopRequireDefault(_glTexture);

var _geo = _dereq_('../../geo');

var _geo2 = _interopRequireDefault(_geo);

var _utilsLog = _dereq_('../../utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _utilsThread = _dereq_('../../utils/thread');

var _utilsThread2 = _interopRequireDefault(_utilsThread);

var _utilsWorker_broker = _dereq_('../../utils/worker_broker');

var _utilsWorker_broker2 = _interopRequireDefault(_utilsWorker_broker);

var _labelsCollision = _dereq_('../../labels/collision');

var _labelsCollision2 = _interopRequireDefault(_labelsCollision);

var _textText_settings = _dereq_('../text/text_settings');

var _textText_settings2 = _interopRequireDefault(_textText_settings);

var _textCanvas_text = _dereq_('../text/canvas_text');

var _textCanvas_text2 = _interopRequireDefault(_textCanvas_text);

// namespaces label textures (ensures new texture name when a tile is built multiple times)
var text_texture_id = 0;

var TextLabels = {

    resetText: function resetText() {
        if (_utilsThread2['default'].is_main) {
            this.canvas = new _textCanvas_text2['default']();
        } else if (_utilsThread2['default'].is_worker) {
            this.texts = {}; // unique texts, grouped by tile, by style
        }
    },

    freeText: function freeText(tile) {
        delete this.texts[tile.key];
    },

    parseTextFeature: function parseTextFeature(feature, draw, context, tile) {
        // Compute label text
        var text = this.parseTextSource(feature, draw, context);
        if (text == null) {
            return; // no text for this feature
        }

        // Compute text style and layout settings for this feature label
        var layout = this.computeTextLayout({}, feature, draw, context, tile, text);
        var text_settings = _textText_settings2['default'].compute(feature, draw, context);
        var text_settings_key = _textText_settings2['default'].key(text_settings);

        // first label in tile, or with this style?
        this.texts[tile.key] = this.texts[tile.key] || {};
        this.texts[tile.key][text_settings_key] = this.texts[tile.key][text_settings_key] || {};

        // unique text strings, grouped by text drawing style
        if (!this.texts[tile.key][text_settings_key][text]) {
            // first label with this text/style/tile combination, make a new label entry
            this.texts[tile.key][text_settings_key][text] = {
                text_settings: text_settings,
                ref: 0 // # of times this text/style combo appears in tile
            };
        }

        return {
            draw: draw, text: text, text_settings_key: text_settings_key, layout: layout
        };
    },

    // Compute the label text, default is value of feature.properties.name
    // - String value indicates a feature property look-up, e.g. `short_name` means use feature.properties.short_name
    // - Function will use the return value as the label text (for custom labels)
    // - Array (of strings and/or functions) defines a list of fallbacks, evaluated according to the above rules,
    //   with the first non-null value used as the label text
    //   e.g. `[name:es, name:en, name]` prefers Spanish names, followed by English, and last the default local name
    parseTextSource: function parseTextSource(feature, draw, context) {
        var text = undefined;
        var source = draw.text_source || 'name';

        if (Array.isArray(source)) {
            for (var s = 0; s < source.length; s++) {
                if (typeof source[s] === 'string') {
                    text = feature.properties[source[s]];
                } else if (typeof source[s] === 'function') {
                    text = source[s](context);
                }

                if (text) {
                    break; // stop if we found a text property
                }
            }
        } else if (typeof source === 'string') {
                text = feature.properties[source];
            } else if (typeof source === 'function') {
                text = source(context);
            }
        return text;
    },

    renderTextLabels: function renderTextLabels(tile, collision_group, queue) {
        var _this = this;

        if (_Object$keys(this.texts[tile.key] || {}).length === 0) {
            return _Promise.resolve({});
        }

        // first call to main thread, ask for text pixel sizes
        return _utilsWorker_broker2['default'].postMessage(this.main_thread_target + '.calcTextSizes', this.texts[tile.key]).then(function (texts) {

            if (tile.canceled) {
                (0, _utilsLog2['default'])('trace', 'Style ' + _this.name + ': stop tile build because tile was canceled: ' + tile.key + ', post-calcTextSizes()');
                return {};
            }

            if (!texts) {
                _labelsCollision2['default'].collide({}, collision_group, tile.key);
                return {};
            }
            _this.texts[tile.key] = texts;

            var labels = _this.createTextLabels(tile.key, queue);

            return _labelsCollision2['default'].collide(labels, collision_group, tile.key).then(function (labels) {
                if (tile.canceled) {
                    (0, _utilsLog2['default'])('trace', 'stop tile build because tile was canceled: ' + tile.key + ', post-collide()');
                    return {};
                }

                if (labels.length === 0) {
                    return {};
                }

                _this.cullTextStyles(texts, labels);

                // second call to main thread, for rasterizing the set of texts
                return _utilsWorker_broker2['default'].postMessage(_this.main_thread_target + '.rasterizeTexts', tile.key, texts).then(function (_ref) {
                    var texts = _ref.texts;
                    var texture = _ref.texture;

                    if (tile.canceled) {
                        (0, _utilsLog2['default'])('trace', 'stop tile build because tile was canceled: ' + tile.key + ', post-rasterizeTexts()');
                        return {};
                    }

                    return { labels: labels, texts: texts, texture: texture };
                });
            });
        });
    },

    // Remove unused text/style combinations to avoid unnecessary rasterization
    cullTextStyles: function cullTextStyles(texts, labels) {
        // Count how many times each text/style combination is used
        for (var i = 0; i < labels.length; i++) {
            texts[labels[i].text_settings_key][labels[i].text].ref++;
        }

        // Remove text/style combinations that have no visible labels
        for (var style in texts) {
            for (var text in texts[style]) {
                // no labels for this text
                if (texts[style][text].ref < 1) {
                    delete texts[style][text];
                }
            }
        }

        for (var style in texts) {
            // no labels for this style
            if (_Object$keys(texts[style]).length === 0) {
                delete texts[style];
            }
        }
    },

    // Called on main thread from worker, to compute the size of each text string,
    // were it to be rendered. This info is then used to perform initial label culling, *before*
    // labels are actually rendered.
    calcTextSizes: function calcTextSizes(texts) {
        return this.canvas.textSizes(texts);
    },

    // Called on main thread from worker, to create atlas of labels for a tile
    rasterizeTexts: function rasterizeTexts(tile_key, texts) {
        var canvas = new _textCanvas_text2['default']();
        var texture_size = canvas.setTextureTextPositions(texts, this.max_texture_size);
        (0, _utilsLog2['default'])('trace', 'text summary for tile ' + tile_key + ': fits in ' + texture_size[0] + 'x' + texture_size[1] + 'px');

        // fits in max texture size?
        if (texture_size[0] < this.max_texture_size && texture_size[1] < this.max_texture_size) {
            // update canvas size & rasterize all the text strings we need
            canvas.resize.apply(canvas, _toConsumableArray(texture_size));
            canvas.rasterize(texts, texture_size);
        } else {
            (0, _utilsLog2['default'])('error', ['Label atlas for tile ' + tile_key + ' is ' + texture_size[0] + 'x' + texture_size[1] + 'px, ', 'but max GL texture size is ' + this.max_texture_size + 'x' + this.max_texture_size + 'px'].join(''));
        }

        // create a texture
        var t = 'labels-' + tile_key + '-' + text_texture_id++;
        _glTexture2['default'].create(this.gl, t, {
            element: canvas.canvas,
            filtering: 'linear',
            UNPACK_PREMULTIPLY_ALPHA_WEBGL: true
        });
        _glTexture2['default'].retain(t);

        return { texts: texts, texture: t }; // texture is returned by name (not instance)
    },

    preprocessText: function preprocessText(draw) {
        // Font settings are required
        if (!draw || !draw.font || typeof draw.font !== 'object') {
            return;
        }

        // Colors
        draw.font.fill = _style_parser.StyleParser.cacheObject(draw.font.fill);
        if (draw.font.stroke) {
            draw.font.stroke.color = _style_parser.StyleParser.cacheObject(draw.font.stroke.color);
        }

        // Convert font and text stroke sizes
        draw.font.px_size = _style_parser.StyleParser.cacheObject(draw.font.size, _textCanvas_text2['default'].fontPixelSize);
        if (draw.font.stroke && draw.font.stroke.width != null) {
            draw.font.stroke.width = _style_parser.StyleParser.cacheObject(draw.font.stroke.width, parseFloat);
        }

        // Offset (2d array)
        draw.offset = _style_parser.StyleParser.cacheObject(draw.offset, function (v) {
            return Array.isArray(v) && v.map(parseFloat) || 0;
        });

        // Buffer (1d value or or 2d array)
        draw.buffer = _style_parser.StyleParser.cacheObject(draw.buffer, function (v) {
            return (Array.isArray(v) ? v : [v, v]).map(parseFloat) || 0;
        });

        // Repeat rules
        draw.repeat_distance = _style_parser.StyleParser.cacheObject(draw.repeat_distance, parseFloat);

        return draw;
    },

    // Additional text-specific layout settings
    computeTextLayout: function computeTextLayout(target, feature, draw, context, tile, text) {
        var layout = target || {};

        // common settings w/points
        layout = this.computeLayout(layout, feature, draw, context, tile);

        // tile boundary handling
        layout.cull_from_tile = draw.cull_from_tile != null ? draw.cull_from_tile : true;
        layout.move_into_tile = draw.move_into_tile != null ? draw.move_into_tile : true;

        // label line exceed percentage
        if (draw.line_exceed && draw.line_exceed.substr(-1) === '%') {
            layout.line_exceed = parseFloat(draw.line_exceed.substr(0, draw.line_exceed.length - 1));
        } else {
            layout.line_exceed = 80;
        }

        // repeat minimum distance
        layout.repeat_distance = _style_parser.StyleParser.cacheProperty(draw.repeat_distance, context);
        if (layout.repeat_distance == null) {
            layout.repeat_distance = _geo2['default'].tile_size;
        }
        layout.repeat_distance *= layout.units_per_pixel;

        // repeat group key
        if (typeof draw.repeat_group === 'function') {
            layout.repeat_group = draw.repeat_group(context);
        } else if (typeof draw.repeat_group === 'string') {
            layout.repeat_group = draw.repeat_group;
        } else {
            layout.repeat_group = draw.key; // default to unique set of matching layers
        }
        layout.repeat_group += '/' + text;

        // Max number of subdivisions to try
        layout.subdiv = tile.overzoom2;

        return layout;
    }

};
exports.TextLabels = TextLabels;

},{"../../geo":201,"../../gl/texture":206,"../../labels/collision":212,"../../utils/log":243,"../../utils/thread":247,"../../utils/worker_broker":250,"../style_parser":235,"../text/canvas_text":236,"../text/text_settings":239,"babel-runtime/core-js/object/keys":12,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/to-consumable-array":25}],239:[function(_dereq_,module,exports){
'use strict';

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsUtils = _dereq_('../../utils/utils');

var _utilsUtils2 = _interopRequireDefault(_utilsUtils);

var _geo = _dereq_('../../geo');

var _geo2 = _interopRequireDefault(_geo);

var _style_parser = _dereq_('../style_parser');

var _pointsPoint_anchor = _dereq_('../points/point_anchor');

var _pointsPoint_anchor2 = _interopRequireDefault(_pointsPoint_anchor);

var TextSettings;

exports['default'] = TextSettings = {

    // A key for grouping all labels of the same text style (e.g. same Canvas state, to minimize state changes)
    key: function key(settings) {
        return [settings.style, settings.weight, settings.family, settings.px_size, settings.fill, settings.stroke, settings.stroke_width, settings.transform, settings.text_wrap, settings.align, _utilsUtils2['default'].device_pixel_ratio].join('/');
    },

    defaults: {
        style: 'normal',
        weight: null,
        size: '12px',
        px_size: 12,
        family: 'Helvetica',
        fill: 'white',
        text_wrap: 15,
        align: 'center'
    },

    compute: function compute(feature, draw, context) {
        var style = {};

        draw.font = draw.font || this.defaults;

        // Use fill if specified, or default
        style.fill = draw.font.fill && _utilsUtils2['default'].toCSSColor(_style_parser.StyleParser.cacheColor(draw.font.fill, context)) || this.defaults.fill;

        // Font properties are modeled after CSS names:
        // - family: Helvetica, Futura, etc.
        // - size: in pt, px, or em
        // - style: normal, italic, oblique
        // - weight: normal, bold, etc.
        // - transform: capitalize, uppercase, lowercase
        style.style = draw.font.style || this.defaults.style;
        style.weight = draw.font.weight || this.defaults.weight;
        if (draw.font.family) {
            style.family = draw.font.family;
            if (style.family !== this.defaults.family) {
                style.family += ', ' + this.defaults.family;
            }
        } else {
            style.family = this.defaults.family;
        }

        style.transform = draw.font.transform;

        // original size (not currently used, but useful for debugging)
        style.size = draw.font.size || this.defaults.size;

        // calculated pixel size
        style.px_size = _style_parser.StyleParser.cacheProperty(draw.font.px_size, context) || this.defaults.px_size;

        // Use stroke if specified
        if (draw.font.stroke && draw.font.stroke.color) {
            style.stroke = _utilsUtils2['default'].toCSSColor(_style_parser.StyleParser.cacheColor(draw.font.stroke.color, context) || this.defaults.stroke);
            style.stroke_width = _style_parser.StyleParser.cacheProperty(draw.font.stroke.width, context) || this.defaults.stroke_width;
            style.stroke_width *= _utilsUtils2['default'].device_pixel_ratio;
        }

        style.font_css = this.fontCSS(style);

        // Word wrap and text alignment
        // Not a font properties, but affect atlas of unique text textures
        var text_wrap = draw.text_wrap; // use explicitly set value
        if (text_wrap == null && _geo2['default'].geometryType(feature.geometry.type) !== 'line') {
            // point labels (for point and polygon features) have word wrap on w/default max length,
            // line labels default off
            text_wrap = true;
        }

        // setting to 'true' causes default wrap value to be used
        if (text_wrap === true) {
            text_wrap = this.defaults.text_wrap;
        }
        style.text_wrap = text_wrap;

        // default alignment to match anchor
        if (!draw.align && draw.anchor && draw.anchor !== 'center') {
            if (_pointsPoint_anchor2['default'].isLeftAnchor(draw.anchor)) {
                draw.align = 'right';
            } else if (_pointsPoint_anchor2['default'].isRightAnchor(draw.anchor)) {
                draw.align = 'left';
            }
        }

        style.align = draw.align || this.defaults.align;

        return style;
    },

    // Build CSS-style font string (to set Canvas draw state)
    fontCSS: function fontCSS(_ref) {
        var style = _ref.style;
        var weight = _ref.weight;
        var px_size = _ref.px_size;
        var family = _ref.family;

        return [style, weight, px_size + 'px', family].filter(function (x) {
            return x;
        }) // remove null props
        .join(' ');
    }

};
module.exports = exports['default'];

},{"../../geo":201,"../../utils/utils":248,"../points/point_anchor":229,"../style_parser":235,"babel-runtime/helpers/interop-require-default":23}],240:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _toConsumableArray = _dereq_('babel-runtime/helpers/to-consumable-array')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _utilsLog = _dereq_('./utils/log');

var _utilsLog2 = _interopRequireDefault(_utilsLog);

var _geo = _dereq_('./geo');

var _geo2 = _interopRequireDefault(_geo);

var _stylesStyle_parser = _dereq_('./styles/style_parser');

var _stylesStyle_manager = _dereq_('./styles/style_manager');

var _labelsCollision = _dereq_('./labels/collision');

var _labelsCollision2 = _interopRequireDefault(_labelsCollision);

var _utilsWorker_broker = _dereq_('./utils/worker_broker');

var _utilsWorker_broker2 = _interopRequireDefault(_utilsWorker_broker);

var _glTexture = _dereq_('./gl/texture');

var _glTexture2 = _interopRequireDefault(_glTexture);

var _utilsGlMatrix = _dereq_('./utils/gl-matrix');

var Tile = (function () {

    /**
        Tile
        @constructor
        Required properties:
        coords: object with {x, y, z} properties identifying tile coordinate location
        worker: web worker to handle tile construction
    */

    function Tile(_ref) {
        var coords = _ref.coords;
        var style_zoom = _ref.style_zoom;
        var source = _ref.source;
        var worker = _ref.worker;
        var view = _ref.view;

        _classCallCheck(this, Tile);

        this.worker = worker;
        this.view = view;
        this.source = source;
        this.generation = null;

        this.visible = false;
        this.proxy = null;
        this.proxy_depth = 0;
        this.loading = false;
        this.loaded = false;
        this.error = null;
        this.debug = {};

        this.coords = Tile.coordinateWithMaxZoom(coords, this.source.max_zoom);
        this.style_zoom = style_zoom; // zoom level to be used for styling
        this.overzoom = Math.max(this.style_zoom - this.coords.z, 0); // number of levels of overzooming
        this.overzoom2 = Math.pow(2, this.overzoom);
        this.key = Tile.key(this.coords, this.source, this.style_zoom);
        this.min = _geo2['default'].metersForTile(this.coords);
        this.max = _geo2['default'].metersForTile({ x: this.coords.x + 1, y: this.coords.y + 1, z: this.coords.z }), this.span = { x: this.max.x - this.min.x, y: this.max.y - this.min.y };
        this.bounds = { sw: { x: this.min.x, y: this.max.y }, ne: { x: this.max.x, y: this.min.y } };
        this.center_dist = 0;

        this.meters_per_pixel = _geo2['default'].metersPerPixel(this.coords.z);
        this.units_per_pixel = _geo2['default'].units_per_pixel / this.overzoom2; // adjusted for overzoom
        this.units_per_meter_overzoom = _geo2['default'].unitsPerMeter(this.coords.z) * this.overzoom2; // adjusted for overzoom

        this.meshes = {}; // renderable VBO meshes keyed by style
        this.textures = []; // textures that the tile owns (labels, etc.)
    }

    _createClass(Tile, [{
        key: 'freeResources',

        // Free resources owned by tile
        value: function freeResources() {
            if (this.meshes) {
                for (var m in this.meshes) {
                    this.meshes[m].destroy();
                }
            }

            if (this.textures) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = _getIterator(this.textures), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var t = _step.value;

                        _glTexture2['default'].release(t);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }

            this.meshes = {};
            this.textures = [];
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.workerMessage('self.removeTile', this.key);
            this.freeResources();
            this.worker = null;
        }
    }, {
        key: 'buildAsMessage',
        value: function buildAsMessage() {
            return {
                key: this.key,
                source: this.source.name,
                coords: this.coords,
                min: this.min,
                max: this.max,
                units_per_pixel: this.units_per_pixel,
                meters_per_pixel: this.meters_per_pixel,
                units_per_meter_overzoom: this.units_per_meter_overzoom,
                style_zoom: this.style_zoom,
                overzoom: this.overzoom,
                overzoom2: this.overzoom2,
                generation: this.generation,
                debug: this.debug
            };
        }
    }, {
        key: 'workerMessage',
        value: function workerMessage() {
            for (var _len = arguments.length, message = Array(_len), _key = 0; _key < _len; _key++) {
                message[_key] = arguments[_key];
            }

            return _utilsWorker_broker2['default'].postMessage.apply(_utilsWorker_broker2['default'], [this.worker].concat(message));
        }
    }, {
        key: 'build',
        value: function build(generation) {
            this.generation = generation;
            if (!this.loaded) {
                this.loading = true;
            }
            return this.workerMessage('self.buildTile', { tile: this.buildAsMessage() })['catch'](function (e) {
                throw e;
            });
        }

        /**
            Called on worker to cancel loading
            Static method because the worker only has object representations of tile data, there is no
            tile instance created yet.
        */
    }, {
        key: 'buildMeshes',

        /**
           Called on main thread when a web worker completes processing
           for a single tile.
        */
        value: function buildMeshes(styles) {
            if (this.error) {
                return;
            }

            // Debug
            this.debug.geometries = 0;
            this.debug.buffer_size = 0;

            // Create VBOs
            var meshes = {},
                textures = []; // new resources, to be swapped in
            var mesh_data = this.mesh_data;
            if (mesh_data) {
                for (var s in mesh_data) {
                    if (mesh_data[s].vertex_data) {
                        this.debug.buffer_size += mesh_data[s].vertex_data.byteLength;
                        if (mesh_data[s].vertex_elements) {
                            this.debug.buffer_size += mesh_data[s].vertex_elements.byteLength;
                        }
                        if (!styles[s]) {
                            (0, _utilsLog2['default'])('warn', 'Could not create mesh because style \'' + s + '\' not found, for tile ' + this.key + ', aborting tile');
                            break;
                        }
                        meshes[s] = styles[s].makeMesh(mesh_data[s].vertex_data, mesh_data[s].vertex_elements, mesh_data[s]);
                        this.debug.geometries += meshes[s].geometry_count;
                    }

                    // Assign texture ownership to tiles
                    // Note that it's valid for a single texture to be referenced from multiple styles
                    // (e.g. same raster texture attached to multiple sources). This means the same
                    // texture may be added to the tile's texture list more than once, which ensures
                    // that it is properly released (to match its retain count).
                    if (mesh_data[s].textures) {
                        mesh_data[s].textures.forEach(function (t) {
                            textures.push(t);
                        });
                    }
                }
            }
            delete this.mesh_data; // TODO: might want to preserve this for rebuilding geometries when styles/etc. change?

            // Swap in new data, free old data
            this.freeResources();
            this.meshes = meshes;
            this.textures = textures;

            this.debug.geom_ratio = (this.debug.geometries / this.debug.features).toFixed(1);
            this.printDebug();
        }

        /**
            Called on main thread when web worker completes processing, but tile has since been discarded
            Frees resources that would have been transferred to the tile object.
            Static method because the tile object no longer exists (the tile data returned by the worker is passed instead).
        */
    }, {
        key: 'update',

        // Update relative to view
        value: function update() {
            var coords = this.coords;
            if (coords.z !== this.view.center.tile.z) {
                coords = Tile.coordinateAtZoom(coords, this.view.center.tile.z);
            }
            this.center_dist = Math.abs(this.view.center.tile.x - coords.x) + Math.abs(this.view.center.tile.y - coords.y);
        }

        // Set as a proxy tile for another tile
    }, {
        key: 'setProxyFor',
        value: function setProxyFor(tile) {
            this.proxy = tile;
            if (tile) {
                this.visible = true;
                this.proxy_depth = 1; // draw proxies a half-layer back (order is scaled 2x to avoid integer truncation)
                this.update();
            } else {
                this.proxy_depth = 0;
            }
        }

        // Update model matrix and tile uniforms
    }, {
        key: 'setupProgram',
        value: function setupProgram(_ref2, program) {
            var model = _ref2.model;
            var model32 = _ref2.model32;

            // Tile origin
            program.uniform('4fv', 'u_tile_origin', [this.min.x, this.min.y, this.style_zoom, this.coords.z]);
            program.uniform('1f', 'u_tile_proxy_depth', this.proxy_depth);

            // Model - transform tile space into world space (meters, absolute mercator position)
            _utilsGlMatrix.mat4.identity(model);
            _utilsGlMatrix.mat4.translate(model, model, _utilsGlMatrix.vec3.fromValues(this.min.x, this.min.y, 0));
            _utilsGlMatrix.mat4.scale(model, model, _utilsGlMatrix.vec3.fromValues(this.span.x / _geo2['default'].tile_scale, -1 * this.span.y / _geo2['default'].tile_scale, 1)); // scale tile local coords to meters
            _utilsGlMatrix.mat4.copy(model32, model);
            program.uniform('Matrix4fv', 'u_model', model32);
        }

        // Slice a subset of keys out of a tile
        // Includes a minimum set of pre-defined keys for load state, debug. etc.
        // We use this to send a subset of the tile back to the main thread, to minimize unnecessary data transfer
        // (e.g. very large items like feature geometry are not needed on the main thread)
    }, {
        key: 'merge',
        value: function merge(other) {
            for (var key in other) {
                if (key !== 'key') {
                    this[key] = other[key];
                }
            }
            return this;
        }
    }, {
        key: 'printDebug',
        value: function printDebug() {
            (0, _utilsLog2['default'])('debug', 'Tile: debug for ' + this.key + ': [  ' + JSON.stringify(this.debug) + ' ]');
        }
    }], [{
        key: 'create',
        value: function create(spec) {
            return new Tile(spec);
        }
    }, {
        key: 'coord',
        value: function coord(c) {
            return { x: c.x, y: c.y, z: c.z, key: Tile.coordKey(c) };
        }
    }, {
        key: 'coordKey',
        value: function coordKey(_ref3) {
            var x = _ref3.x;
            var y = _ref3.y;
            var z = _ref3.z;

            return x + '/' + y + '/' + z;
        }
    }, {
        key: 'key',
        value: function key(coords, source, style_zoom) {
            coords = Tile.coordinateWithMaxZoom(coords, source.max_zoom);
            if (coords.y < 0 || coords.y >= 1 << coords.z || coords.z < 0) {
                return; // cull tiles out of range (x will wrap)
            }
            return [source.name, style_zoom, coords.x, coords.y, coords.z].join('/');
        }
    }, {
        key: 'coordinateAtZoom',
        value: function coordinateAtZoom(_ref4, zoom) {
            var x = _ref4.x;
            var y = _ref4.y;
            var z = _ref4.z;
            var key = _ref4.key;

            if (z !== zoom) {
                var zscale = Math.pow(2, z - zoom);
                x = Math.floor(x / zscale);
                y = Math.floor(y / zscale);
                z = zoom;
            }
            return Tile.coord({ x: x, y: y, z: z });
        }
    }, {
        key: 'coordinateWithMaxZoom',
        value: function coordinateWithMaxZoom(_ref5, max_zoom) {
            var x = _ref5.x;
            var y = _ref5.y;
            var z = _ref5.z;

            if (max_zoom !== undefined && z > max_zoom) {
                return Tile.coordinateAtZoom({ x: x, y: y, z: z }, max_zoom);
            }
            return Tile.coord({ x: x, y: y, z: z });
        }
    }, {
        key: 'childrenForCoordinate',
        value: function childrenForCoordinate(_ref6) {
            var x = _ref6.x;
            var y = _ref6.y;
            var z = _ref6.z;
            var key = _ref6.key;

            if (!Tile.coord_children[key]) {
                z++;
                x *= 2;
                y *= 2;
                Tile.coord_children[key] = [Tile.coord({ x: x, y: y, z: z }), Tile.coord({ x: x + 1, y: y, z: z }), Tile.coord({ x: x, y: y + 1, z: z }), Tile.coord({ x: x + 1, y: y + 1, z: z })];
            }
            return Tile.coord_children[key];
        }
    }, {
        key: 'isDescendant',
        value: function isDescendant(parent, descendant) {
            if (descendant.z > parent.z) {
                var _Tile$coordinateAtZoom = Tile.coordinateAtZoom(descendant, parent.z);

                var x = _Tile$coordinateAtZoom.x;
                var y = _Tile$coordinateAtZoom.y;

                return parent.x === x && parent.y === y;
            }
            return false;
        }

        // Sort a set of tile instances (which already have a distance from center tile computed)
    }, {
        key: 'sort',
        value: function sort(tiles) {
            return tiles.sort(function (a, b) {
                var ad = a.center_dist;
                var bd = b.center_dist;
                return bd > ad ? -1 : bd === ad ? 0 : 1;
            });
        }
    }, {
        key: 'cancel',
        value: function cancel(tile) {
            if (tile) {
                tile.canceled = true;
                if (tile.source_data && tile.source_data.request) {
                    tile.source_data.request.abort();
                }
                Tile.abortBuild(tile);
            }
        }

        // Process geometry for tile - called by web worker
        // Returns a set of tile keys that should be sent to the main thread (so that we can minimize data exchange between worker and main thread)
    }, {
        key: 'buildGeometry',
        value: function buildGeometry(tile, _ref7) {
            var layers = _ref7.layers;
            var styles = _ref7.styles;
            var global = _ref7.global;

            tile.debug.rendering = +new Date();
            tile.debug.features = 0;

            var data = tile.source_data;

            _labelsCollision2['default'].startTile(tile.key);

            // Process each top-level layer
            for (var layer_name in layers) {
                var layer = layers[layer_name];
                // Skip layers with no data source defined
                if (!layer || !layer.config.data) {
                    (0, _utilsLog2['default'])('warn', 'Layer ' + layer_name + ' was defined without a geometry data source and will not be rendered.');
                    continue;
                }

                // Source names don't match
                if (layer.config.data.source !== tile.source) {
                    continue;
                }

                // Get data for one or more layers from source
                var source_layers = Tile.getDataForSource(data, layer.config.data, layer_name);

                // Render features in layer
                for (var s = 0; s < source_layers.length; s++) {
                    var source_layer = source_layers[s];
                    var geom = source_layer.geom;
                    if (!geom) {
                        continue;
                    }

                    for (var f = 0; f < geom.features.length; f++) {
                        var feature = geom.features[f];
                        if (feature.geometry == null) {
                            continue; // skip features w/o geometry (valid GeoJSON)
                        }

                        var context = _stylesStyle_parser.StyleParser.getFeatureParseContext(feature, tile, global);
                        context.winding = tile.default_winding;
                        context.source = tile.source; // add data source name
                        context.layer = source_layer.layer; // add data source layer name

                        // Get draw groups for this feature
                        var draw_groups = layer.buildDrawGroups(context, true);
                        if (!draw_groups) {
                            continue;
                        }

                        // Render draw groups
                        for (var group_name in draw_groups) {
                            var group = draw_groups[group_name];
                            if (!group.visible) {
                                continue;
                            }

                            // Add to style
                            var style_name = group.style || group_name;
                            var style = styles[style_name];

                            if (!style) {
                                (0, _utilsLog2['default'])('warn', 'Style \'' + style_name + '\' not found, skipping layer \'' + layer_name + '\':', group, feature);
                                continue;
                            }

                            context.layers = group.layers; // add matching draw layers

                            style.addFeature(feature, group, context);
                        }

                        tile.debug.features++;
                    }
                }
            }
            tile.debug.rendering = +new Date() - tile.debug.rendering;

            // Finalize array buffer for each render style
            var tile_styles = _stylesStyle_manager.StyleManager.stylesForTile(tile.key);
            tile.mesh_data = {};
            var queue = [];

            var _loop = function (s) {
                var style_name = tile_styles[s];
                var style = styles[style_name];
                queue.push(style.endData(tile).then(function (style_data) {
                    if (style_data) {
                        tile.mesh_data[style_name] = {
                            vertex_data: style_data.vertex_data,
                            vertex_elements: style_data.vertex_elements,
                            uniforms: style_data.uniforms,
                            textures: style_data.textures
                        };
                    }
                }));
            };

            for (var s = 0; s < tile_styles.length; s++) {
                _loop(s);
            }

            return _Promise.all(queue).then(function () {
                _labelsCollision2['default'].resetTile(tile.key);

                // Return keys to be transfered to main thread
                return ['mesh_data'];
            });
        }

        /**
            Retrieves geometry from a tile according to a data source definition
            Returns an array of objects with:
                layer: source layer name
                geom: GeoJSON FeatureCollection
        */
    }, {
        key: 'getDataForSource',
        value: function getDataForSource(source_data, source_config) {
            var default_layer = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            var layers = [];

            if (source_config != null) {
                // If no layer specified, and a default source layer exists
                if (!source_config.layer && source_data.layers._default) {
                    layers.push({
                        geom: source_data.layers._default
                    });
                }
                // If no layer specified, and a default requested layer exists
                else if (!source_config.layer && default_layer) {
                        layers.push({
                            layer: default_layer,
                            geom: source_data.layers[default_layer]
                        });
                    }
                    // If a layer is specified by name, use it
                    else if (typeof source_config.layer === 'string') {
                            layers.push({
                                layer: source_config.layer,
                                geom: source_data.layers[source_config.layer]
                            });
                        }
                        // If multiple layers are specified by name, combine them
                        else if (Array.isArray(source_config.layer)) {
                                source_config.layer.forEach(function (layer) {
                                    if (source_data.layers[layer] && source_data.layers[layer].features) {
                                        layers.push({
                                            layer: layer,
                                            geom: source_data.layers[layer]
                                        });
                                    }
                                });
                            }
            }

            return layers;
        }
    }, {
        key: 'abortBuild',
        value: function abortBuild(tile) {
            if (tile.mesh_data) {
                for (var s in tile.mesh_data) {
                    var textures = tile.mesh_data[s].textures;
                    if (textures) {
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = _getIterator(textures), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var t = _step2.value;

                                var texture = _glTexture2['default'].textures[t];
                                if (texture) {
                                    (0, _utilsLog2['default'])('trace', 'releasing texture ' + t + ' for tile ' + tile.key);
                                    texture.release();
                                }
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                                    _iterator2['return']();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                }
            }
        }
    }, {
        key: 'slice',
        value: function slice(tile, keys) {
            var keep = ['key', 'loading', 'loaded', 'generation', 'error', 'debug'];
            if (Array.isArray(keys)) {
                keep.push.apply(keep, _toConsumableArray(keys));
            }

            // Build the tile subset
            var tile_subset = {};
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = _getIterator(keep), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var key = _step3.value;

                    tile_subset[key] = tile[key];
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                        _iterator3['return']();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return tile_subset;
        }
    }]);

    return Tile;
})();

exports['default'] = Tile;

Tile.coord_children = {}; // only allocate children coordinates once per coordinate
module.exports = exports['default'];

},{"./geo":201,"./gl/texture":206,"./labels/collision":212,"./styles/style_manager":234,"./styles/style_parser":235,"./utils/gl-matrix":242,"./utils/log":243,"./utils/worker_broker":250,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/to-consumable-array":25}],241:[function(_dereq_,module,exports){
'use strict';

var _get = _dereq_('babel-runtime/helpers/get')['default'];

var _inherits = _dereq_('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var MethodNotImplemented = (function (_Error) {
    _inherits(MethodNotImplemented, _Error);

    function MethodNotImplemented(methodName) {
        _classCallCheck(this, MethodNotImplemented);

        _get(Object.getPrototypeOf(MethodNotImplemented.prototype), 'constructor', this).call(this);
        this.name = 'MethodNotImplemented';
        this.message = 'Method ' + methodName + ' must be implemented in subclass';
    }

    return MethodNotImplemented;
})(Error);

exports.MethodNotImplemented = MethodNotImplemented;

},{"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/get":21,"babel-runtime/helpers/inherits":22}],242:[function(_dereq_,module,exports){
// Partial import of gl-matrix via modularized stack-gl forks
// https://github.com/toji/gl-matrix
// https://github.com/stackgl

// vec3

// Substitute 64-bit version
// We need the extra precision when multiplying matrices w/mercator projected values
'use strict';

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

// mat3

var _glMat3NormalFromMat4 = _dereq_('gl-mat3/normal-from-mat4');

var _glMat3NormalFromMat42 = _interopRequireDefault(_glMat3NormalFromMat4);

var _glMat3Invert = _dereq_('gl-mat3/invert');

var _glMat3Invert2 = _interopRequireDefault(_glMat3Invert);

// mat4

var _glMat4Multiply = _dereq_('gl-mat4/multiply');

var _glMat4Multiply2 = _interopRequireDefault(_glMat4Multiply);

var _glMat4Translate = _dereq_('gl-mat4/translate');

var _glMat4Translate2 = _interopRequireDefault(_glMat4Translate);

var _glMat4Scale = _dereq_('gl-mat4/scale');

var _glMat4Scale2 = _interopRequireDefault(_glMat4Scale);

var _glMat4Perspective = _dereq_('gl-mat4/perspective');

var _glMat4Perspective2 = _interopRequireDefault(_glMat4Perspective);

var _glMat4LookAt = _dereq_('gl-mat4/lookAt');

var _glMat4LookAt2 = _interopRequireDefault(_glMat4LookAt);

var _glMat4Identity = _dereq_('gl-mat4/identity');

var _glMat4Identity2 = _interopRequireDefault(_glMat4Identity);

var _glMat4Copy = _dereq_('gl-mat4/copy');

var _glMat4Copy2 = _interopRequireDefault(_glMat4Copy);

var vec3 = {
    fromValues: function fromValues(x, y, z) {
        var out = new Float64Array(3);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
    }
};

var mat3 = {
    normalFromMat4: _glMat3NormalFromMat42['default'],
    invert: _glMat3Invert2['default']
};

var mat4 = {
    multiply: _glMat4Multiply2['default'],
    translate: _glMat4Translate2['default'],
    scale: _glMat4Scale2['default'],
    perspective: _glMat4Perspective2['default'],
    lookAt: _glMat4LookAt2['default'],
    identity: _glMat4Identity2['default'],
    copy: _glMat4Copy2['default']
};

exports.vec3 = vec3;
exports.mat3 = mat3;
exports.mat4 = mat4;

},{"babel-runtime/helpers/interop-require-default":23,"gl-mat3/invert":147,"gl-mat3/normal-from-mat4":148,"gl-mat4/copy":149,"gl-mat4/identity":150,"gl-mat4/lookAt":151,"gl-mat4/multiply":152,"gl-mat4/perspective":153,"gl-mat4/scale":154,"gl-mat4/translate":155}],243:[function(_dereq_,module,exports){
'use strict';

var _toConsumableArray = _dereq_('babel-runtime/helpers/to-consumable-array')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = log;

var _version = _dereq_('./version');

var _version2 = _interopRequireDefault(_version);

var _thread = _dereq_('./thread');

var _thread2 = _interopRequireDefault(_thread);

var _worker_broker = _dereq_('./worker_broker');

var _worker_broker2 = _interopRequireDefault(_worker_broker);

var LEVELS = {
    silent: -1,
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
    trace: 4
};

var methods = {};

function methodForLevel(level) {
    if (_thread2['default'].is_main) {
        methods[level] = methods[level] || (console[level] ? console[level] : console.log).bind(console);
        return methods[level];
    }
}

function log(msg_level) {
    if (LEVELS[msg_level] <= LEVELS[log.level]) {
        for (var _len = arguments.length, msg = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            msg[_key - 1] = arguments[_key];
        }

        if (_thread2['default'].is_worker) {
            // Proxy to main thread
            _worker_broker2['default'].postMessage.apply(_worker_broker2['default'], ['_logProxy', msg_level].concat(msg));
        } else {
            var logger = methodForLevel(msg_level);

            // Write to console (on main thread)
            if (msg.length > 1) {
                logger.apply(undefined, ['Tangram ' + _version2['default'].string + ' [' + msg_level + ']: ' + msg[0]].concat(_toConsumableArray(msg.slice(1))));
            } else {
                logger('Tangram ' + _version2['default'].string + ' [' + msg_level + ']: ' + msg[0]);
            }
        }
    }
}

log.level = 'info';
log.workers = null;

log.setLevel = function (level) {
    log.level = level;

    if (_thread2['default'].is_main && Array.isArray(log.workers)) {
        _worker_broker2['default'].postMessage(log.workers, '_logSetLevelProxy', level);
    }
};

if (_thread2['default'].is_main) {
    log.setWorkers = function (workers) {
        log.workers = workers;
    };
}

_worker_broker2['default'].addTarget('_logProxy', log); // proxy log messages from worker to main thread
_worker_broker2['default'].addTarget('_logSetLevelProxy', log.setLevel); // proxy log level setting from main to worker thread
module.exports = exports['default'];

},{"./thread":247,"./version":249,"./worker_broker":250,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/to-consumable-array":25}],244:[function(_dereq_,module,exports){
// Deep/recursive merge of one or more source objects into a destination object
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = mergeObjects;

function mergeObjects(dest) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    for (var s = 0; s < sources.length; s++) {
        var source = sources[s];
        if (!source) {
            continue;
        }
        for (var key in source) {
            var value = source[key];
            // Recursively merge the source into the destination if it is a a non-null key/value object
            // (e.g. don't merge arrays, those are treated as scalar values; null values will overwrite/erase
            // the previous destination value)
            if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
                if (dest[key] !== null && typeof dest[key] === 'object' && !Array.isArray(dest[key])) {
                    dest[key] = mergeObjects(dest[key], value);
                } else {
                    dest[key] = mergeObjects({}, value); // destination not an object, overwrite
                }
            }
            // Overwrite the previous destination value if the source property is: a scalar (number/string),
            // an array, or a null value
            else if (value !== undefined) {
                    dest[key] = value;
                }
            // Undefined source properties are ignored
        }
    }
    return dest;
}

module.exports = exports['default'];

},{}],245:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _vector = _dereq_('../vector');

var _vector2 = _interopRequireDefault(_vector);

var OBB = (function () {
    function OBB(x, y, a, w, h) {
        _classCallCheck(this, OBB);

        this.dimension = [w, h];
        this.angle = a;
        this.centroid = [x, y];
        this.quad = [];
        this.axes = [];

        this.update();
    }

    _createClass(OBB, [{
        key: 'move',
        value: function move(px, py) {
            this.centroid = [px, py];

            this.update();
        }
    }, {
        key: 'getExtent',
        value: function getExtent() {
            var inf = 1e6;
            var aabb = [inf, inf, -inf, -inf];

            for (var i = 0; i < 4; ++i) {
                aabb[0] = Math.min(this.quad[i][0], aabb[0]);
                aabb[1] = Math.min(this.quad[i][1], aabb[1]);
                aabb[2] = Math.max(this.quad[i][0], aabb[2]);
                aabb[3] = Math.max(this.quad[i][1], aabb[3]);
            }

            return aabb;
        }
    }, {
        key: 'perpAxes',
        value: function perpAxes() {
            this.axes[0] = _vector2['default'].normalize(_vector2['default'].sub(this.quad[2], this.quad[3]));
            this.axes[1] = _vector2['default'].normalize(_vector2['default'].sub(this.quad[2], this.quad[1]));
        }
    }, {
        key: 'update',
        value: function update() {
            var x = [Math.cos(this.angle), Math.sin(this.angle)];
            var y = [-Math.sin(this.angle), Math.cos(this.angle)];

            x = _vector2['default'].mult(x, this.dimension[0] / 2.0);
            y = _vector2['default'].mult(y, this.dimension[1] / 2.0);

            this.quad[0] = _vector2['default'].sub(_vector2['default'].sub(this.centroid, x), y); // lower-left
            this.quad[1] = _vector2['default'].sub(_vector2['default'].add(this.centroid, x), y); // lower-right
            this.quad[2] = _vector2['default'].add(_vector2['default'].add(this.centroid, x), y); // uper-right
            this.quad[3] = _vector2['default'].add(_vector2['default'].sub(this.centroid, x), y); // uper-left

            this.perpAxes();
        }
    }], [{
        key: 'projectToAxis',
        value: function projectToAxis(obb, axis) {
            var inf = 1e6;
            var min = inf;
            var max = -inf;

            var quad = obb.quad;

            // for each axis, project obb quad to it and find min and max values
            for (var i = 0; i < 4; ++i) {
                var d = _vector2['default'].dot(quad[i], axis);
                min = Math.min(min, d);
                max = Math.max(max, d);
            }

            return [min, max];
        }
    }, {
        key: 'axisCollide',
        value: function axisCollide(obb_a, obb_b, axes) {
            for (var i = 0; i < 2; ++i) {
                var a_proj = OBB.projectToAxis(obb_a, axes[i]);
                var b_proj = OBB.projectToAxis(obb_b, axes[i]);

                if (b_proj[0] > a_proj[1] || b_proj[1] < a_proj[0]) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: 'intersect',
        value: function intersect(obb_a, obb_b) {
            return OBB.axisCollide(obb_a, obb_b, obb_a.axes) && OBB.axisCollide(obb_a, obb_b, obb_b.axes);
        }
    }]);

    return OBB;
})();

exports['default'] = OBB;
module.exports = exports['default'];

},{"../vector":251,"babel-runtime/helpers/class-call-check":18,"babel-runtime/helpers/create-class":19,"babel-runtime/helpers/interop-require-default":23}],246:[function(_dereq_,module,exports){
'use strict';

var _Set = _dereq_('babel-runtime/core-js/set')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = subscribeMixin;

function subscribeMixin(target) {

    var listeners = new _Set();
    // var listeners = [];

    return _Object$assign(target, {

        subscribe: function subscribe(listener) {
            listeners.add(listener);
            // listeners.push(listener);
        },

        unsubscribe: function unsubscribe(listener) {
            listeners['delete'](listener);
            // var index = listeners.indexOf(listener);
            // if (index > -1) {
            //     listeners.splice(index, 1);
            // }
        },

        unsubscribeAll: function unsubscribeAll() {
            listeners.clear();
            // listeners = [];
        },

        trigger: function trigger(event) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    data[_key - 1] = arguments[_key];
                }

                for (var _iterator = _getIterator(listeners), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var listener = _step.value;

                    if (typeof listener[event] === 'function') {
                        listener[event].apply(listener, data);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }

    });
}

module.exports = exports['default'];

},{"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/object/assign":6,"babel-runtime/core-js/set":15}],247:[function(_dereq_,module,exports){
/*jshint worker: true*/

// Mark thread as main or worker
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Thread = {};

exports["default"] = Thread;

try {
    if (window.document !== HTMLDocument) {
        // jshint ignore:line
        Thread.is_worker = false;
        Thread.is_main = true;
    }
} catch (e) {
    if (self !== undefined) {
        Thread.is_worker = true;
        Thread.is_main = false;

        // Patch for 3rd party libs that require these globals to be present. Specifically, FontFaceObserver.
        // Brittle solution but allows that library to load on worker threads.
        self.window = { document: {} };
        self.document = self.window.document;
    }
}
module.exports = exports["default"];

},{}],248:[function(_dereq_,module,exports){
// Miscellaneous utilities
/*jshint worker: true*/

'use strict';

var _Object$keys = _dereq_('babel-runtime/core-js/object/keys')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _Math$log2 = _dereq_('babel-runtime/core-js/math/log2')['default'];

var _regeneratorRuntime = _dereq_('babel-runtime/regenerator')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _thread = _dereq_('./thread');

var _thread2 = _interopRequireDefault(_thread);

var _log = _dereq_('./log');

var _log2 = _interopRequireDefault(_log);

var _geo = _dereq_('../geo');

var _geo2 = _interopRequireDefault(_geo);

var _jsYaml = _dereq_('js-yaml');

var _jsYaml2 = _interopRequireDefault(_jsYaml);

var Utils;
exports['default'] = Utils = {};

// Add a base URL for schemeless or protocol-less URLs
// Defaults to adding current window protocol and base, or adds a custom base if specified
// Maybe use https://github.com/medialize/URI.js if more robust functionality is needed
Utils.addBaseURL = function (url, base) {
    if (!url) {
        return;
    }

    // Schemeless, add protocol
    if (url.substr(0, 2) === '//') {
        url = window.location.protocol + url;
    }
    // No http(s) or data, add base
    else if (url.search(/^(http|https|data|blob):/) < 0) {
            var relative = url[0] !== '/';
            var base_info;
            if (base) {
                base_info = document.createElement('a'); // use a temporary element to parse URL
                base_info.href = base;
            } else {
                base_info = window.location;
            }

            if (relative) {
                var path = base_info.href.match(/([^\#]+)/); // strip hash
                path = path && path.length > 1 ? path[0] : '';
                url = path + url;
            } else {
                // Easy way
                if (base_info.origin) {
                    url = base_info.origin + '/' + url;
                }
                // Hard way (IE11)
                else {
                        var origin = url.match(/^((http|https|data|blob):\/\/[^\/]*\/)/);
                        origin = origin && origin.length > 1 ? origin[0] : '';
                        url = origin + url;
                    }
            }
        }
    return url;
};

Utils.pathForURL = function (url) {
    if (url && url.search(/^(data|blob):/) === -1) {
        return url.substr(0, url.lastIndexOf('/') + 1) || './';
    }
    return './';
};

Utils.cacheBusterForUrl = function (url) {
    if (url.search(/^(data|blob):/) > -1) {
        return url; // no cache-busting on object or data URLs
    }
    if (url.indexOf('?') > -1) {
        url += '&' + +new Date();
    } else {
        url += '?' + +new Date();
    }
    return url;
};

// Add a set of query string params to a URL
// params: hash of key/value pairs of query string parameters
Utils.addParamsToURL = function (url, params) {
    if (!params || _Object$keys(params).length === 0) {
        return url;
    }

    var qs_index = url.indexOf('?');
    var hash_index = url.indexOf('#');

    // Save and trim hash
    var hash = '';
    if (hash_index > -1) {
        hash = url.slice(hash_index);
        url = url.slice(0, hash_index);
    }

    // Start query string
    if (qs_index === -1) {
        qs_index = url.length;
        url += '?';
    }
    qs_index++; // advanced past '?'

    // Build query string params
    var url_params = '';
    for (var p in params) {
        url_params += p + '=' + params[p] + '&';
    }

    // Insert new query string params and restore hash
    // NOTE: doesn't replace any values already present on query string, just inserts dupe values
    url = url.slice(0, qs_index) + url_params + url.slice(qs_index) + hash;

    return url;
};

// Basic Safari detection
// http://stackoverflow.com/questions/7944460/detect-safari-browser
Utils.isSafari = function () {
    return (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)
    );
};

// Polyfill (for Safari compatibility)
Utils._createObjectURL = undefined;
Utils.createObjectURL = function (url) {
    if (Utils._createObjectURL === undefined) {
        Utils._createObjectURL = window.URL && window.URL.createObjectURL || window.webkitURL && window.webkitURL.createObjectURL;

        if (typeof Utils._createObjectURL !== 'function') {
            Utils._createObjectURL = null;
            (0, _log2['default'])('warn', 'window.URL.createObjectURL (or vendor prefix) not found, unable to create local blob URLs');
        }
    }

    if (Utils._createObjectURL) {
        return Utils._createObjectURL(url);
    } else {
        return url;
    }
};

Utils.io = function (url) {
    var timeout = arguments.length <= 1 || arguments[1] === undefined ? 60000 : arguments[1];
    var responseType = arguments.length <= 2 || arguments[2] === undefined ? 'text' : arguments[2];
    var method = arguments.length <= 3 || arguments[3] === undefined ? 'GET' : arguments[3];
    var headers = arguments.length <= 4 || arguments[4] === undefined ? {} : arguments[4];

    var request = new XMLHttpRequest();
    var promise = new _Promise(function (resolve, reject) {
        request.open(method, url, true);
        request.timeout = timeout;
        request.responseType = responseType;
        request.onload = function () {
            if (request.status === 200) {
                if (['text', 'json'].indexOf(request.responseType) > -1) {
                    resolve(request.responseText);
                } else {
                    resolve(request.response);
                }
            } else {
                reject(Error('Request error with a status of ' + request.statusText));
            }
        };
        request.onerror = function (evt) {
            reject(Error('There was a network error' + evt.toString()));
        };
        request.ontimeout = function (evt) {
            reject(Error('timeout ' + evt.toString()));
        };
        request.send();
    });

    Object.defineProperty(promise, 'request', {
        value: request
    });

    return promise;
};

Utils.parseResource = function (body) {
    var data;
    try {
        // jsyaml 'json' option allows duplicate keys
        // Keeping this for backwards compatibility, but should consider migrating to requiring
        // unique keys, as this is YAML spec. But Tangram ES currently accepts dupe keys as well,
        // so should consider how best to unify.
        data = _jsYaml2['default'].safeLoad(body, { json: true });
    } catch (e) {
        throw e;
    }
    return data;
};

Utils.loadResource = function (source) {
    return new _Promise(function (resolve, reject) {
        if (typeof source === 'string') {
            Utils.io(Utils.cacheBusterForUrl(source)).then(function (body) {
                try {
                    var data = Utils.parseResource(body);
                    resolve(data);
                } catch (e) {
                    reject(e);
                }
            }, reject);
        } else {
            resolve(source);
        }
    });
};

// Needed for older browsers that still support WebGL (Safari 6 etc.)
Utils.requestAnimationFramePolyfill = function () {
    if (typeof window.requestAnimationFrame !== 'function') {
        window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (cb) {
            setTimeout(cb, 1000 / 60);
        };
    }
};

// Stringify an object into JSON, but convert functions to strings
Utils.serializeWithFunctions = function (obj) {
    var serialized = JSON.stringify(obj, function (k, v) {
        // Convert functions to strings
        if (typeof v === 'function') {
            return v.toString();
        }
        return v;
    });

    return serialized;
};

// Parse a JSON string, but convert function-like strings back into functions
Utils.deserializeWithFunctions = function (serialized, wrap) {
    var obj = JSON.parse(serialized);
    obj = Utils.stringsToFunctions(obj, wrap);
    return obj;
};

// Recursively parse an object, attempting to convert string properties that look like functions back into functions
Utils.stringsToFunctions = function (obj, wrap) {
    // Convert string
    if (typeof obj === 'string') {
        obj = Utils.stringToFunction(obj, wrap);
    }
    // Loop through object properties
    else if (obj != null && typeof obj === 'object') {
            for (var p in obj) {
                obj[p] = Utils.stringsToFunctions(obj[p], wrap);
            }
        }
    return obj;
};

// Convert string back into a function
// TODO: make function matching tolerant of whitespace and multilines
Utils.stringToFunction = function (val, wrap) {
    // Convert strings back into functions
    if (typeof val === 'string' && val.match(/^\s*function\s*\w*\s*\([\s\S]*\)\s*\{[\s\S]*\}/m) != null) {
        var f;
        try {
            if (typeof wrap === 'function') {
                eval('f = ' + wrap(val)); // jshint ignore:line
            } else {
                    eval('f = ' + val); // jshint ignore:line
                }
            return f;
        } catch (e) {
            // fall-back to original value if parsing failed
            return val;
        }
    }
    return val;
};

// Default to allowing high pixel density
// Returns true if display density changed
Utils.use_high_density_display = true;
Utils.updateDevicePixelRatio = function () {
    var prev = Utils.device_pixel_ratio;
    Utils.device_pixel_ratio = Utils.use_high_density_display && window.devicePixelRatio || 1;
    return Utils.device_pixel_ratio !== prev;
};

if (_thread2['default'].is_main) {
    Utils.updateDevicePixelRatio();
}

// Get URL that the current script was loaded from
// If currentScript is not available, loops through <script> elements searching for a list of provided paths
// e.g. Utils.findCurrentURL('tangram.debug.js', 'tangram.min.js');
Utils.findCurrentURL = function () {
    // Find currently executing script
    var script = document.currentScript;

    for (var _len = arguments.length, paths = Array(_len), _key = 0; _key < _len; _key++) {
        paths[_key] = arguments[_key];
    }

    if (script) {
        return script.src;
    } else if (Array.isArray(paths)) {
        // Fallback on looping through <script> elements if document.currentScript is not supported
        var scripts = document.getElementsByTagName('script');
        for (var s = 0; s < scripts.length; s++) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _getIterator(paths), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var path = _step.value;

                    if (scripts[s].src.indexOf(path) > -1) {
                        return scripts[s].src;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator['return']) {
                        _iterator['return']();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }
};

// Used for differentiating between power-of-2 and non-power-of-2 textures
// Via: http://stackoverflow.com/questions/19722247/webgl-wait-for-texture-to-load
Utils.isPowerOf2 = function (value) {
    return (value & value - 1) === 0;
};

Utils.nextPowerOf2 = function (value) {
    return Math.pow(2, Math.ceil(_Math$log2(value)));
};

// Interpolate 'x' along a series of control points
// 'points' is an array of control points in the form [x, y]
//
// Example:
//     Control points:
//         [0, 5]:  when x=0, y=5
//         [4, 10]: when x=4, y=10
//
//     Utils.interpolate(2, [[0, 5], [4, 10]]);
//     -> computes x=2, halfway between x=0 and x=4: (10 - 5) / 2 +5
//     -> returns 7.5
//
// TODO: add other interpolation methods besides linear
//
Utils.interpolate = function (x, points, transform) {
    // If this doesn't resemble a list of control points, just return the original value
    if (!Array.isArray(points) || !Array.isArray(points[0])) {
        return points;
    } else if (points.length < 1) {
        return points;
    }

    var x1, x2, d, y, y1, y2;

    // Min bounds
    if (x <= points[0][0]) {
        y = points[0][1];
        if (typeof transform === 'function') {
            y = transform(y);
        }
    }
    // Max bounds
    else if (x >= points[points.length - 1][0]) {
            y = points[points.length - 1][1];
            if (typeof transform === 'function') {
                y = transform(y);
            }
        }
        // Find which control points x is between
        else {
                for (var i = 0; i < points.length - 1; i++) {
                    if (x >= points[i][0] && x < points[i + 1][0]) {
                        // Linear interpolation
                        x1 = points[i][0];
                        x2 = points[i + 1][0];

                        // Multiple values
                        if (Array.isArray(points[i][1])) {
                            y = [];
                            for (var c = 0; c < points[i][1].length; c++) {
                                if (typeof transform === 'function') {
                                    y1 = transform(points[i][1][c]);
                                    y2 = transform(points[i + 1][1][c]);
                                    d = y2 - y1;
                                    y[c] = d * (x - x1) / (x2 - x1) + y1;
                                } else {
                                    d = points[i + 1][1][c] - points[i][1][c];
                                    y[c] = d * (x - x1) / (x2 - x1) + points[i][1][c];
                                }
                            }
                        }
                        // Single value
                        else {
                                if (typeof transform === 'function') {
                                    y1 = transform(points[i][1]);
                                    y2 = transform(points[i + 1][1]);
                                    d = y2 - y1;
                                    y = d * (x - x1) / (x2 - x1) + y1;
                                } else {
                                    d = points[i + 1][1] - points[i][1];
                                    y = d * (x - x1) / (x2 - x1) + points[i][1];
                                }
                            }
                        break;
                    }
                }
            }
    return y;
};

// Iterators (ES6 generators)

// Iterator for key/value pairs of an object
Utils.entries = _regeneratorRuntime.mark(function callee$0$0(obj) {
    var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, key;

    return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _iteratorNormalCompletion2 = true;
                _didIteratorError2 = false;
                _iteratorError2 = undefined;
                context$1$0.prev = 3;
                _iterator2 = _getIterator(_Object$keys(obj));

            case 5:
                if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                    context$1$0.next = 12;
                    break;
                }

                key = _step2.value;
                context$1$0.next = 9;
                return [key, obj[key]];

            case 9:
                _iteratorNormalCompletion2 = true;
                context$1$0.next = 5;
                break;

            case 12:
                context$1$0.next = 18;
                break;

            case 14:
                context$1$0.prev = 14;
                context$1$0.t0 = context$1$0['catch'](3);
                _didIteratorError2 = true;
                _iteratorError2 = context$1$0.t0;

            case 18:
                context$1$0.prev = 18;
                context$1$0.prev = 19;

                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                    _iterator2['return']();
                }

            case 21:
                context$1$0.prev = 21;

                if (!_didIteratorError2) {
                    context$1$0.next = 24;
                    break;
                }

                throw _iteratorError2;

            case 24:
                return context$1$0.finish(21);

            case 25:
                return context$1$0.finish(18);

            case 26:
            case 'end':
                return context$1$0.stop();
        }
    }, callee$0$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
});

// Iterator for values of an object
Utils.values = _regeneratorRuntime.mark(function callee$0$0(obj) {
    var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, key;

    return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                _iteratorNormalCompletion3 = true;
                _didIteratorError3 = false;
                _iteratorError3 = undefined;
                context$1$0.prev = 3;
                _iterator3 = _getIterator(_Object$keys(obj));

            case 5:
                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                    context$1$0.next = 12;
                    break;
                }

                key = _step3.value;
                context$1$0.next = 9;
                return obj[key];

            case 9:
                _iteratorNormalCompletion3 = true;
                context$1$0.next = 5;
                break;

            case 12:
                context$1$0.next = 18;
                break;

            case 14:
                context$1$0.prev = 14;
                context$1$0.t0 = context$1$0['catch'](3);
                _didIteratorError3 = true;
                _iteratorError3 = context$1$0.t0;

            case 18:
                context$1$0.prev = 18;
                context$1$0.prev = 19;

                if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                    _iterator3['return']();
                }

            case 21:
                context$1$0.prev = 21;

                if (!_didIteratorError3) {
                    context$1$0.next = 24;
                    break;
                }

                throw _iteratorError3;

            case 24:
                return context$1$0.finish(21);

            case 25:
                return context$1$0.finish(18);

            case 26:
            case 'end':
                return context$1$0.stop();
        }
    }, callee$0$0, this, [[3, 14, 18, 26], [19,, 21, 25]]);
});

// Recursive iterators for all properties of an object, no matter how deeply nested
// TODO: fix for circular structures
Utils.recurseEntries = _regeneratorRuntime.mark(function callee$0$0(obj) {
    var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, key;

    return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                if (obj) {
                    context$1$0.next = 2;
                    break;
                }

                return context$1$0.abrupt('return');

            case 2:
                _iteratorNormalCompletion4 = true;
                _didIteratorError4 = false;
                _iteratorError4 = undefined;
                context$1$0.prev = 5;
                _iterator4 = _getIterator(_Object$keys(obj));

            case 7:
                if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                    context$1$0.next = 17;
                    break;
                }

                key = _step4.value;

                if (!obj[key]) {
                    context$1$0.next = 14;
                    break;
                }

                context$1$0.next = 12;
                return [key, obj[key], obj];

            case 12:
                if (!(typeof obj[key] === 'object')) {
                    context$1$0.next = 14;
                    break;
                }

                return context$1$0.delegateYield(Utils.recurseEntries(obj[key]), 't0', 14);

            case 14:
                _iteratorNormalCompletion4 = true;
                context$1$0.next = 7;
                break;

            case 17:
                context$1$0.next = 23;
                break;

            case 19:
                context$1$0.prev = 19;
                context$1$0.t1 = context$1$0['catch'](5);
                _didIteratorError4 = true;
                _iteratorError4 = context$1$0.t1;

            case 23:
                context$1$0.prev = 23;
                context$1$0.prev = 24;

                if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                    _iterator4['return']();
                }

            case 26:
                context$1$0.prev = 26;

                if (!_didIteratorError4) {
                    context$1$0.next = 29;
                    break;
                }

                throw _iteratorError4;

            case 29:
                return context$1$0.finish(26);

            case 30:
                return context$1$0.finish(23);

            case 31:
            case 'end':
                return context$1$0.stop();
        }
    }, callee$0$0, this, [[5, 19, 23, 31], [24,, 26, 30]]);
});

Utils.recurseValues = _regeneratorRuntime.mark(function callee$0$0(obj) {
    var _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, key;

    return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                if (obj) {
                    context$1$0.next = 2;
                    break;
                }

                return context$1$0.abrupt('return');

            case 2:
                _iteratorNormalCompletion5 = true;
                _didIteratorError5 = false;
                _iteratorError5 = undefined;
                context$1$0.prev = 5;
                _iterator5 = _getIterator(_Object$keys(obj));

            case 7:
                if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                    context$1$0.next = 17;
                    break;
                }

                key = _step5.value;

                if (!obj[key]) {
                    context$1$0.next = 14;
                    break;
                }

                context$1$0.next = 12;
                return obj[key];

            case 12:
                if (!(typeof obj[key] === 'object')) {
                    context$1$0.next = 14;
                    break;
                }

                return context$1$0.delegateYield(Utils.recurseValues(obj[key]), 't0', 14);

            case 14:
                _iteratorNormalCompletion5 = true;
                context$1$0.next = 7;
                break;

            case 17:
                context$1$0.next = 23;
                break;

            case 19:
                context$1$0.prev = 19;
                context$1$0.t1 = context$1$0['catch'](5);
                _didIteratorError5 = true;
                _iteratorError5 = context$1$0.t1;

            case 23:
                context$1$0.prev = 23;
                context$1$0.prev = 24;

                if (!_iteratorNormalCompletion5 && _iterator5['return']) {
                    _iterator5['return']();
                }

            case 26:
                context$1$0.prev = 26;

                if (!_didIteratorError5) {
                    context$1$0.next = 29;
                    break;
                }

                throw _iteratorError5;

            case 29:
                return context$1$0.finish(26);

            case 30:
                return context$1$0.finish(23);

            case 31:
            case 'end':
                return context$1$0.stop();
        }
    }, callee$0$0, this, [[5, 19, 23, 31], [24,, 26, 30]]);
});

Utils.radToDeg = function (radians) {
    return radians * 180 / Math.PI;
};

Utils.toCSSColor = function (color) {
    if (color[3] === 1) {
        // full opacity
        return 'rgb(' + color.slice(0, 3).map(function (c) {
            return Math.round(c * 255);
        }).join(', ') + ')';
    }
    // RGB is between [0, 255] opacity is between [0, 1]
    return 'rgba(' + color.map(function (c, i) {
        return i < 3 && Math.round(c * 255) || c;
    }).join(', ') + ')';
};

Utils.pointInTile = function (point) {
    return point[0] >= 0 && point[1] > -_geo2['default'].tile_scale && point[0] < _geo2['default'].tile_scale && point[1] <= 0;
};

// http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
Utils.hashString = function (str) {
    if (str.length === 0) {
        return 0;
    }
    var hash = 0;

    for (var i = 0, len = str.length; i < len; i++) {
        var chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return hash;
};

Utils.debounce = function (func, wait, immediate) {
    var timeout = undefined;
    return function () {
        var context = this,
            args = arguments;
        var later = function later() {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
};
module.exports = exports['default'];

},{"../geo":201,"./log":243,"./thread":247,"babel-runtime/core-js/get-iterator":2,"babel-runtime/core-js/math/log2":5,"babel-runtime/core-js/object/keys":12,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/regenerator":120,"js-yaml":157}],249:[function(_dereq_,module,exports){
"use strict";

var _Object$defineProperties = _dereq_("babel-runtime/core-js/object/define-properties")["default"];

Object.defineProperty(exports, "__esModule", {
    value: true
});
var version;
exports["default"] = version = _Object$defineProperties({
    major: 0,
    minor: 8,
    patch: 1,
    pre: false
}, {
    string: {
        get: function get() {
            return "v" + version.major + "." + version.minor + "." + version.patch;
        },
        configurable: true,
        enumerable: true
    }
});
module.exports = exports["default"];

},{"babel-runtime/core-js/object/define-properties":8}],250:[function(_dereq_,module,exports){
/*jshint worker: true*/

// WorkerBroker routes messages between web workers and the main thread, allowing for simpler
// async code via promises. Example usage:
//
// In web worker, register self as a callable "target", and define a method:
//
//     WorkerBroker.addTarget('self', self);
//
//     self.square = function (x) {
//         return x * x;
//     };
//
// In main thread, invoke that method and receive the result (if any) as a promise:
//
//     worker = new Worker(...);
//     WorkerBroker.addWorker(worker);
//
//     WorkerBroker.postMessage(worker, 'self.square', 5).then(function(y) {
//         console.log(y);
//     });
//
//     -> prints 25
//
// Async code:
//
// For synchronous code that must pass a return value to the main thread, the function can simply
// return an immediate value (see example above). For cases where the worker method needs to run
// asynchronous code, the function can return a promise, and the resolved or rejected value will
// be sent back to the main thread when the promise is fulfilled.
//
// Error handling:
//
// If the worker method either throws an error, or returns a promise that is rejected, it will be
// sent back to the main thread as a promise rejection. These two examples are equivalent:
//
//     In worker, throwing an error:
//
//         self.broken = function () {
//             throw new Error('error in worker!');
//         };
//
//     In worker, returning a rejected promise:
//
//         self.broken = function () {
//             return Promise.reject(new Error('error in worker!'));
//         };
//
//     In main thread, both errors are received as a promise rejection:
//
//         WorkerBroker.postMessage(worker, 'self.broken').then(
//             // Promise resolved
//             function() {
//                 console.log('success!');
//             },
//             // Promise rejected
//             function(error) {
//                 console.log('error!', error);
//             });
//
//         -> prints 'error! error in worker'
//
// Calling from worker to main thread:
//
// The same style of calls can be made *from* a web worker, to the main thread. The API is the same
// with the exception that the first argument, 'worker', is not needed for WorkerBroker.postMessage(),
// since the main thread is the implicit target.
//
// In main thread, define a method and register it:
//
//     var geometry = {
//         length: function(x, y) {
//             return Math.sqrt(x * x + y * y);
//         }
//     };
//
//     WorkerBroker.addTarget('geometry', geometry);
//
// In worker thread:
//
//     WorkerBroker.postMessage('geometry.length', 3, 4).then(function(d) {
//         console.log(d);
//     });
//
//     -> prints 5
//

'use strict';

var _slicedToArray = _dereq_('babel-runtime/helpers/sliced-to-array')['default'];

var _Map = _dereq_('babel-runtime/core-js/map')['default'];

var _Promise = _dereq_('babel-runtime/core-js/promise')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _thread = _dereq_('./thread');

var _thread2 = _interopRequireDefault(_thread);

var _log = _dereq_('./log');

var _log2 = _interopRequireDefault(_log);

var WorkerBroker;
exports['default'] = WorkerBroker = {};

// Global list of all worker messages
// Uniquely tracks every call made between main thread and a worker
var message_id = 0;
var messages = {};

// Register an object to receive calls from other thread
var targets = {};
WorkerBroker.addTarget = function (name, target) {
    targets[name] = target;
};

// Given a dot-notation-style method name, e.g. 'Object.object.method',
// find the object to call the method on from the list of registered targets
function findTarget(method) {
    var chain = [];
    if (typeof method === 'string') {
        chain = method.split('.');
        method = chain.pop();
    }

    var target = targets;

    for (var m = 0; m < chain.length; m++) {
        if (target[chain[m]]) {
            target = target[chain[m]];
        } else {
            return [];
        }
    }

    return [method, target];
}

// Main thread:
// - Send messages to workers, and optionally receive an async response as a promise
// - Receive messages from workers, and optionally send an async response back as a promise
function setupMainThread() {

    var worker_id = 0;
    var workers = new _Map();

    // Send a message to a worker, and optionally get an async response
    // Arguments:
    //   - worker: one or more web worker instances to send the message to (single value or array)
    //   - method: the method with this name, specified with dot-notation, will be invoked in the worker
    //   - message: will be passed to the method call
    // Returns:
    //   - a promise that will be fulfilled if the worker method returns a value (could be immediately, or async)
    //
    WorkerBroker.postMessage = function (worker, method) {
        for (var _len = arguments.length, message = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            message[_key - 2] = arguments[_key];
        }

        // If more than one worker specified, post to multiple
        if (Array.isArray(worker)) {
            return _Promise.all(worker.map(function (w) {
                var _WorkerBroker;

                return (_WorkerBroker = WorkerBroker).postMessage.apply(_WorkerBroker, [w, method].concat(message));
            }));
        }

        // Track state of this message
        var promise = new _Promise(function (resolve, reject) {
            messages[message_id] = { method: method, message: message, resolve: resolve, reject: reject };
        });

        var start = +new Date();
        worker.postMessage(JSON.stringify({
            type: 'main_send', // mark message as method invocation from main thread
            message_id: message_id, // unique id for this message, for life of program
            method: method, // will dispatch to a function of this name within the worker
            message: message // message payload
        }));
        var end = +new Date();
        console.log('Worker broker: main thread posted message ' + method + ' in ' + (end - start) + 'ms');

        message_id++;
        return promise;
    };

    // Add a worker to communicate with - each worker must be registered from the main thread
    WorkerBroker.addWorker = function (worker) {
        if (!(worker instanceof Worker)) {
            throw Error('Worker broker could not add non-Worker object', worker);
        }

        // Keep track of all registered workers
        workers.set(worker, worker_id++);

        worker.addEventListener('message', function WorkerBrokerMainThreadHandler(event) {
            var data = maybeDecode(event.data);
            var id = data.message_id;

            // Listen for messages coming back from the worker, and fulfill that message's promise
            if (data.type === 'worker_reply') {
                // Pass the result to the promise
                if (messages[id]) {
                    if (data.error) {
                        messages[id].reject(data.error);
                    } else {
                        messages[id].resolve(data.message);
                    }
                    delete messages[id];
                }
            }
            // Listen for messages initiating a call from the worker, dispatch them,
            // and send any return value back to the worker
            // Unique id for this message & return call to main thread
            else if (data.type === 'worker_send' && id != null) {
                    var method_name, target;
                    var method;
                    var result, error;

                    (function () {
                        var _findTarget = findTarget(data.method);

                        // Call the requested method and save the return value

                        var _findTarget2 = _slicedToArray(_findTarget, 2);

                        method_name = _findTarget2[0];
                        target = _findTarget2[1];

                        if (!target) {
                            throw Error('Worker broker could not dispatch message type ' + data.method + ' on target ' + data.target + ' because no object with that name is registered on main thread');
                        }

                        method = typeof target[method_name] === 'function' && target[method_name];

                        if (!method) {
                            throw Error('Worker broker could not dispatch message type ' + data.method + ' on target ' + data.target + ' because object has no method with that name');
                        }

                        try {
                            result = method.apply(target, data.message);
                        } catch (e) {
                            // Thrown errors will be passed back (in string form) to worker
                            error = e;
                        }

                        // Send return value to worker
                        var payload = undefined,
                            transferables = [];

                        // Async result
                        if (result instanceof _Promise) {
                            result.then(function (value) {
                                if (value instanceof WorkerBroker.returnWithTransferables) {
                                    transferables = value.transferables;
                                    value = value.value;
                                }

                                payload = {
                                    type: 'main_reply',
                                    message_id: id,
                                    message: value
                                };
                                payload = maybeEncode(payload, transferables);
                                worker.postMessage(payload, transferables.map(function (t) {
                                    return t.object;
                                }));
                                freeTransferables(transferables);
                                if (transferables.length > 0) {
                                    (0, _log2['default'])('trace', '\'' + method_name + '\' transferred ' + transferables.length + ' objects to worker thread');
                                }
                            }, function (error) {
                                worker.postMessage({
                                    type: 'main_reply',
                                    message_id: id,
                                    error: error instanceof Error ? error.message + ': ' + error.stack : error
                                });
                            });
                        }
                        // Immediate result
                        else {
                                if (result instanceof WorkerBroker.returnWithTransferables) {
                                    transferables = result.transferables;
                                    result = result.value;
                                }

                                payload = {
                                    type: 'main_reply',
                                    message_id: id,
                                    message: result,
                                    error: error instanceof Error ? error.message + ': ' + error.stack : error
                                };
                                payload = maybeEncode(payload, transferables);
                                worker.postMessage(payload, transferables.map(function (t) {
                                    return t.object;
                                }));
                                freeTransferables(transferables);
                                if (transferables.length > 0) {
                                    (0, _log2['default'])('trace', '\'' + method_name + '\' transferred ' + transferables.length + ' objects to worker thread');
                                }
                            }
                    })();
                }
        });
    };

    WorkerBroker.removeWorker = function (worker) {
        if (!workers.has(worker)) {
            throw Error('Worker broker could not remove unregistered object', worker);
        }

        workers['delete'](worker);
        // TODO: remove event handlers from worker as well?
    };

    // Expose for debugging
    WorkerBroker.getMessages = function () {
        return messages;
    };

    WorkerBroker.getMessageId = function () {
        return message_id;
    };
}

// Worker threads:
// - Receive messages from main thread, and optionally send an async response back as a promise
// - Send messages to main thread, and optionally receive an async response as a promise
function setupWorkerThread() {

    // Send a message to the main thread, and optionally get an async response as a promise
    // Arguments:
    //   - method: the method with this name, specified with dot-notation, will be invoked on the main thread
    //   - message: will be passed to the method call
    // Returns:
    //   - a promise that will be fulfilled if the main thread method returns a value (could be immediately, or async)
    //
    WorkerBroker.postMessage = function (method) {
        for (var _len2 = arguments.length, message = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            message[_key2 - 1] = arguments[_key2];
        }

        // Track state of this message
        var promise = new _Promise(function (resolve, reject) {
            messages[message_id] = { method: method, message: message, resolve: resolve, reject: reject };
        });

        var start = +new Date();
        self.postMessage({
            type: 'worker_send', // mark message as method invocation from worker
            message_id: message_id, // unique id for this message, for life of program
            method: method, // will dispatch to a method of this name on the main thread
            message: message // message payload
        });
        var end = +new Date();
        console.log('Worker broker: worker thread posted message ' + method + ' in ' + (end - start) + 'ms');

        message_id++;
        return promise;
    };

    self.addEventListener('message', function WorkerBrokerWorkerThreadHandler(event) {
        var data = maybeDecode(event.data);
        var id = data.message_id;

        // Listen for messages coming back from the main thread, and fulfill that message's promise
        if (data.type === 'main_reply') {
            // Pass the result to the promise
            if (messages[id]) {
                if (data.error) {
                    messages[id].reject(data.error);
                } else {
                    messages[id].resolve(data.message);
                }
                delete messages[id];
            }
        }
        // Receive messages from main thread, dispatch them, and send back a reply
        // Unique id for this message & return call to main thread
        else if (data.type === 'main_send' && id != null) {
                var method_name, target;
                var method;
                var result, error;

                (function () {
                    var _findTarget3 = findTarget(data.method);

                    // Call the requested worker method and save the return value

                    var _findTarget32 = _slicedToArray(_findTarget3, 2);

                    method_name = _findTarget32[0];
                    target = _findTarget32[1];

                    if (!target) {
                        throw Error('Worker broker could not dispatch message type ' + data.method + ' on target ' + data.target + ' because no object with that name is registered on main thread');
                    }

                    method = typeof target[method_name] === 'function' && target[method_name];

                    if (!method) {
                        throw Error('Worker broker could not dispatch message type ' + data.method + ' because worker has no method with that name');
                    }

                    try {
                        result = method.apply(target, data.message);
                    } catch (e) {
                        // Thrown errors will be passed back (in string form) to main thread
                        error = e;
                    }

                    // Send return value to main thread
                    var payload = undefined,
                        transferables = [];

                    // Async result
                    if (result instanceof _Promise) {
                        result.then(function (value) {
                            if (value instanceof WorkerBroker.returnWithTransferables) {
                                transferables = value.transferables;
                                value = value.value;
                            }

                            payload = {
                                type: 'worker_reply',
                                message_id: id,
                                message: value
                            };
                            payload = maybeEncode(payload, transferables);
                            self.postMessage(payload, transferables.map(function (t) {
                                return t.object;
                            }));
                            freeTransferables(transferables);
                            if (transferables.length > 0) {
                                (0, _log2['default'])('trace', '\'' + method_name + '\' transferred ' + transferables.length + ' objects to main thread');
                            }
                        }, function (error) {
                            self.postMessage({
                                type: 'worker_reply',
                                message_id: id,
                                error: error instanceof Error ? error.message + ': ' + error.stack : error
                            });
                        });
                    }
                    // Immediate result
                    else {
                            if (result instanceof WorkerBroker.returnWithTransferables) {
                                transferables = result.transferables;
                                result = result.value;
                            }

                            payload = {
                                type: 'worker_reply',
                                message_id: id,
                                message: result,
                                error: error instanceof Error ? error.message + ': ' + error.stack : error
                            };
                            payload = maybeEncode(payload, transferables);
                            self.postMessage(payload, transferables.map(function (t) {
                                return t.object;
                            }));
                            freeTransferables(transferables);
                            if (transferables.length > 0) {
                                (0, _log2['default'])('trace', '\'' + method_name + '\' transferred ' + transferables.length + ' objects to main thread');
                            }
                        }
                })();
            }
    });
}

// Special return value wrapper, to indicate that we want to find and include
// transferable objects in the response message
WorkerBroker.returnWithTransferables = function (value) {
    if (!(this instanceof WorkerBroker.returnWithTransferables)) {
        return new WorkerBroker.returnWithTransferables(value);
    }

    this.value = value;
    this.transferables = findTransferables(this.value);
};

// Build a list of transferable objects from a source object
// Returns a list of info about each transferable:
//   - object: the actual transferable object
//   - parent: the parent object that the transferable is a property of (if any)
//   - property: the property name of the transferable on the parent object (if any)
// TODO: add option in case you DON'T want to transfer objects
function findTransferables(source) {
    var parent = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
    var property = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
    var list = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

    if (!source) {
        return list;
    }

    if (Array.isArray(source)) {
        // Check each array element
        source.forEach(function (x, i) {
            return findTransferables(x, source, i, list);
        });
    } else if (typeof source === 'object') {
        // Is the object a transferable array buffer?
        if (source instanceof ArrayBuffer) {
            list.push({ object: source, parent: parent, property: property });
        }
        // Or looks like a typed array (has an array buffer property)?
        else if (source.buffer instanceof ArrayBuffer) {
                list.push({ object: source.buffer, parent: parent, property: property });
            }
            // Otherwise check each property
            else {
                    for (var prop in source) {
                        findTransferables(source[prop], source, prop, list);
                    }
                }
    }
    return list;
}

// Remove neutered transferables from parent objects, as they should no longer be accessed after transfer
function freeTransferables(transferables) {
    if (!Array.isArray(transferables)) {
        return;
    }
    transferables.filter(function (t) {
        return t.parent && t.property;
    }).forEach(function (t) {
        return delete t.parent[t.property];
    });
}

// Message payload can be stringified for faster transfer, if it does not include transferable objects
function maybeEncode(payload, transferables) {
    if (transferables.length === 0) {
        payload = JSON.stringify(payload);
    }
    return payload;
}

// Parse stringified message payload
function maybeDecode(data) {
    return typeof data === 'string' ? JSON.parse(data) : data;
}

// Setup this thread as appropriate
if (_thread2['default'].is_main) {
    setupMainThread();
}

if (_thread2['default'].is_worker) {
    setupWorkerThread();
}
module.exports = exports['default'];

},{"./log":243,"./thread":247,"babel-runtime/core-js/map":4,"babel-runtime/core-js/promise":14,"babel-runtime/helpers/interop-require-default":23,"babel-runtime/helpers/sliced-to-array":24}],251:[function(_dereq_,module,exports){
/*** Vector functions - vectors provided as [x, y, z] arrays ***/

'use strict';

var _slicedToArray = _dereq_('babel-runtime/helpers/sliced-to-array')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
var Vector;
exports['default'] = Vector = {};

Vector.set = function (v) {
    var V = [];
    var lim = v.length;
    for (var i = 0; i < lim; i++) {
        V[i] = v[i];
    }
    return V;
};

Vector.neg = function (v) {
    var V = [];
    var lim = v.length;
    for (var i = 0; i < lim; i++) {
        V[i] = v[i] * -1;
    }
    return V;
};

// Addition of two vectors
Vector.add = function (v1, v2) {
    var v = [];
    var lim = Math.min(v1.length, v2.length);
    for (var i = 0; i < lim; i++) {
        v[i] = v1[i] + v2[i];
    }
    return v;
};

// Substraction of two vectors
Vector.sub = function (v1, v2) {
    var v = [];
    var lim = Math.min(v1.length, v2.length);

    for (var i = 0; i < lim; i++) {
        v[i] = v1[i] - v2[i];
    }
    return v;
};

Vector.signed_area = function (v1, v2, v3) {
    return (v2[0] - v1[0]) * (v3[1] - v1[1]) - (v3[0] - v1[0]) * (v2[1] - v1[1]);
};

// Multiplication of two vectors
Vector.mult = function (v1, v2) {
    var v = [],
        len = v1.length,
        i;

    if (typeof v2 === 'number') {
        // Mulitply by scalar
        for (i = 0; i < len; i++) {
            v[i] = v1[i] * v2;
        }
    } else {
        // Multiply two vectors
        len = Math.min(v1.length, v2.length);
        for (i = 0; i < len; i++) {
            v[i] = v1[i] * v2[i];
        }
    }
    return v;
};

// Division of two vectors
Vector.div = function (v1, v2) {
    var v = [],
        i;
    if (typeof v2 === 'number') {
        // Divide by scalar
        for (i = 0; i < v1.length; i++) {
            v[i] = v1[i] / v2;
        }
    } else {
        // Divide to vectors
        var len = Math.min(v1.length, v2.length);
        for (i = 0; i < len; i++) {
            v[i] = v1[i] / v2[i];
        }
    }
    return v;
};

// Get 2D perpendicular
Vector.perp = function (v1, v2) {
    return [v2[1] - v1[1], v1[0] - v2[0]];
};

// Get 2D vector rotated
Vector.rot = function (v, a) {
    var c = Math.cos(a);
    var s = Math.sin(a);
    return [v[0] * c - v[1] * s, v[0] * s + v[1] * c];
};

// Get 2D heading angle
Vector.angle = function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var x = _ref2[0];
    var y = _ref2[1];

    return Math.atan2(y, x);
};

// Get angle between two vectors
Vector.angleBetween = function (A, B) {
    var delta = Vector.dot(A, B);
    if (delta < -1) {
        delta = -1;
    }
    return Math.acos(delta);
};

// Compare two points
Vector.isEqual = function (v1, v2) {
    var len = v1.length;
    for (var i = 0; i < len; i++) {
        if (v1[i] !== v2[i]) {
            return false;
        }
    }
    return true;
};

// Vector length squared
Vector.lengthSq = function (v) {
    if (v.length === 2) {
        return v[0] * v[0] + v[1] * v[1];
    } else {
        return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
    }
};

// Vector length
Vector.length = function (v) {
    return Math.sqrt(Vector.lengthSq(v));
};

// Normalize a vector
Vector.normalize = function (v) {
    var d;
    if (v.length === 2) {
        d = v[0] * v[0] + v[1] * v[1];
        d = Math.sqrt(d);

        if (d !== 0) {
            return [v[0] / d, v[1] / d];
        }
        return [0, 0];
    } else {
        d = v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
        d = Math.sqrt(d);

        if (d !== 0) {
            return [v[0] / d, v[1] / d, v[2] / d];
        }
        return [0, 0, 0];
    }
};

// Cross product of two vectors
Vector.cross = function (v1, v2) {
    return [v1[1] * v2[2] - v1[2] * v2[1], v1[2] * v2[0] - v1[0] * v2[2], v1[0] * v2[1] - v1[1] * v2[0]];
};

// Dot product of two vectors
Vector.dot = function (v1, v2) {
    var n = 0;
    var lim = Math.min(v1.length, v2.length);
    for (var i = 0; i < lim; i++) {
        n += v1[i] * v2[i];
    }
    return n;
};
module.exports = exports['default'];

},{"babel-runtime/helpers/sliced-to-array":24}]},{},[219])(219)
});