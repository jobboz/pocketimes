pipeline { 

  agent any
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
             withGradle() {
               bash './gradlew -v'
             }
           }   
       }
  }
}
