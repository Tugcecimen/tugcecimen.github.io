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
    s1['ID']= "210104003";
    s1['IName'] ="last";
    s1['fName'] = "first";
    for(var i=0; i<5 ; i++){
        s1['courses'][i]= {'courseID' :'c'+i, 'grade':Math.random()*100+1}
     }
   var gpa =s1.calcGPA();
   
           
   