pipeline { 

  agent any
  stages { 
       stage("run frotend") {
            
           steps {
        echo 'executing yaRN...'
         nodejs('Node-10.17') {
          sh 'yarn install'
           
         }
           }   
       }

    stage("run backend") {
            
           steps {
           echo 'executing graddle...'
             withGradle() {
               sh './gradlew -v'
             }
           }   
       }
  }
}
