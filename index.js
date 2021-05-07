const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (Array.isArray(collection))? collection : Object.values(collection)
      for (const element of newCollection) {
        callback(element)
      }
      return collection
    },

    map: function(collection,callback) {
let arrayCollection=(Array.isArray(collection))?collection:Object.values(collection);
let newCollection=[];
for(const element of arrayCollection){
newCollection.push(callback(element))}

return newCollection;
    },


    reduce: function(collection, callback,acc) {
      let arrayCollection=(Array.isArray(collection))?collection:Object.values(collection);
      if(acc){
        for(const e of arrayCollection){
    acc=callback(acc,e,arrayCollection);
      }
      return acc;
      }
      else{
        let acc=arrayCollection[0];
        for (const e of arrayCollection.slice(1)){
          acc=callback(acc,e,arrayCollection);
        }
        return acc;}
    },
    
    find:function(collection,e){
      let arrayCollection=(Array.isArray(collection))?collection:Object.values(Object);
      
      for(const el of arrayCollection){
   if (e(el)){
     return el;
   } 
}
    },
filter:function(collection,e){
  let arrayCollection=(Array.isArray(collection))?collection:Object.values(collection);
  let newCollection=[];
  for(const el of arrayCollection){
    if (e(el)){
       newCollection.push(el);
    }
  } return newCollection;
},

size:function(collection){
  let arrayCollection=(Array.isArray(collection))?collection:Object.values(collection);
  return arrayCollection.length;
  
},

first:function(array, n=1){
  return (n===1)?array[0]:array.slice(0,n);
},
last:function(array,n=-1){
  return (n===-1)?array.slice(n)[0]:array.slice(-n);
},
compact:function(array){
  let newArray=[];
for (const e of array){
  if(e){
    newArray.push(e);
  }
}
return newArray;
},


  sortBy: function(array, callback) {
      const newArray = [...array];
      return newArray.sort(function(a,b) {
        return callback(a) - callback(b);
      });
    },
 flatten:function(array){
   let newArray=array.split('');
   
  return newArray;
 },
 
 keys:function(object){
   let array=[];
   for (const keys in object){
     array.push(keys);
   }return array;
 },

values: function(object){
  let values=[];
  for (const key in object){
    values.push(object[key]);
  }
  return values;
},
flatten: function(array, shallow, newArray){
  
}
    functions: function() {

    },


  }
})()

fi.libraryMethod()
