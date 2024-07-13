pipeline { 

  agent any
 tools {
     gradle 'Gradle-6.2'
 }
  stages { 
       stage("run frotend") {
            
           steps {
        echo 'executing yaRN...'
         nodejs('Node-10.17') {
          bash 'yarn install'
           
         }
           }   
       }

    stage("run backend") {
            
           steps {
           echo 'executing graddle...'
               bash './gradlew -v'
             
           }   
       }
  }
}
