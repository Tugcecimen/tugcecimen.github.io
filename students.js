
   var Student = {
    'ID': '',
    'fName': '',
       'I name': '',
    'courses': [
        {'courses ID':'',
            'grade':''
        }
    ],
    calcGPA : function(){
        var gpa=0;
        for(var i=0 ; i<this.courses.length ; i++){
            gpa += this.courses[i].grade;
            
        }
        gpa/=this.courses.length;
        return gpa;
    }
    };
    var s1 = Student;
    s1['0']= "210104003"; //doesnt work ... will add a new variable to our model
    s1['IName'] ="last"; // works as expected
    s1['fName'] = "first"; // works as expected.
    for(var i=0; i<5 ; i++){
        s1['courses'][i]= {'courseID' :'c'+i, 'grade':Math.random()*100+1}
     }
     s1['tel'] = "1314561531";
   var gpa =s1.calcGPA();
   
   function Person(first,last,age,eye){
       this.firstName = first;
       this.lastName = last;
       this.age = age;
       this.eyeColor =eye;
    
           
   };
   
   var p1 =new Person ('first','last',112,'yellow');
   var p2 = new Person ('first','last',12,'green');           
   
