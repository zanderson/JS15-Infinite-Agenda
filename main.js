angular.module('agenda', [])
            .controller('thectl', ['$scope', function($scope){
                    $scope.agendaItems = [];
                    for (var i = 0; i < 10; i++) {
                        var date = new Date();
                        date.setDate(date.getDate() + i);
                        $scope.agendaItems.push({
                            date: date,
                            text: ''
                        });
                    }
                }
            ]);

