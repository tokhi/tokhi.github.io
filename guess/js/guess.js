angular.module('numGuess', []).constant()
	//.factory()
	.controller('NumberGuessController', ['$scope', function ($scope) {
		$scope.max = 100;
		

		$scope.getRandomNumber = function () {
			return Math.floor((Math.random() * $scope.max) + 1);
		}

		$scope.number = '';
		$scope.numberOfTries = 0;

		
		var rNum = $scope.getRandomNumber();
		$scope.gameOn = true;
		

		

		$scope.target = function () {

			if($scope.number == rNum) {
				$scope.gameOn = false;
				Example1.Timer.toggle();
				return "Good Job, You are right!";
			}
			else {
				if($scope.number == '')
					return "No guess yet!";
				else if($scope.number > rNum)
					return "Wrong Guess, choose a number < " +$scope.number;
				else
					return "Wrong Guess, choose a number > " +$scope.number;
			}
			
		}

		$scope.repeatGame = function () {
			numberOfTries = 0;
			$scope.number = '';
			rNum = $scope.getRandomNumber();
			$scope.gameOn = true;
			Example1.resetStopwatch();
			Example1.Timer.toggle();
		}

		$scope.tries = function () {
			return numberOfTries;
		}
		
	}]);