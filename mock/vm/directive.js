var data = {
  name: 'calledt',
  github: 'https://github.com/calledt',
  favorites: ['food', 'travel', 'comic', '...'],
  date: {
    year: 2014,
    month: 5,
    day: 20
  },
  method: {
    foo: function(){return 'method.foo() is called!'},
    bar: function(){}
  },
  dataForEval: '@@$name@@'
};

module.exports = data;
