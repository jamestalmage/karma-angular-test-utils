angular.module('math',[])
  // Will simply be injected
  .value('add',function(lhs, rhs){ return lhs + rhs; })
  .value('subtract',function(lhs, rhs){ return lhs - rhs; })

  // Default implementation of sum throws. But we will provide our own
  // using the `ngProvide` annotation.
  .value('sum',function(){throw Error('sum not implemented')})

  .factory('total',function(sum){
    return sum; // this means total is just an alias for sum.
  });