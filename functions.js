

$(document).ready(function()
{
	var count = 0			// counts the number of turns
	var turn = "X";
	var gameMode = true		// this is used to check whether the play has stopped

	// calls on clicking the box
	$("td").click(function()
	{
		if (gameMode)
		{
			if($(this).text() == "")
			{
				$(this).text(turn);

				if(checkWin(turn))						// checks if the game is won
				{
					gameMode = false;
					return;				
				}


				count += 1;
				if(count == 9)							// checks if tie i.e. no more place
				{
					$("#comments h3").text("");
					$("#comments h1").text("NO RESULT");
					gameMode = false;
					$("#divrestart").slideDown("1000");
					return;					
				}

				turn = change(turn);		// changes the turn X to 0 or vice-versa				
				$("#comments h3").text(turn + "s turn");
			}
			else							// gives alert if you click on a previously marked box
			{
				$("#comments h3").append("<h1>DON'T CHEAT !!!</h1>");
			}		
		}


	})

	// display changes when you click on the start button
	$("#start").click(function()
	{
		$("#intro").slideUp('fast');
		$("#play,#comments,hr").slideDown("1000");
	})

	//changes made to reset the game
	$("#restart").click(function()
	{
		$("td").text("");
		gameMode = true;
		count = 0;
		turn = "X"
		$("#comments h1").text("");
		$("#divrestart").slideUp("1000");
		$("#comments h3").text("X's turn");	

	})
})

// function to change the value of X to 0 or vice-versa
function change(turn)
{
	if(turn == "X")
		return "0";
	else
		return "X"
}


// checks the logic for winning
function checkWin(turn)
{
	if($("#box1").text()==$("#box2").text() && $("#box1").text()== $("#box3").text() && $("#box1").text()== turn)
	{
		wins(turn);
		return true;
	}

	else if($("#box1").text()==$("#box4").text() && $("#box1").text()==$("#box7").text() && $("#box1").text()==turn)
	{
		wins(turn);
		return true;
	}

	else if($("#box1").text()==$("#box5").text() && $("#box1").text()==$("#box9").text() && $("#box1").text()==turn)
	{
		wins(turn);
		return true;
	}

	else if($("#box2").text()==$("#box5").text() && $("#box2").text()==$("#box8").text() && $("#box2").text()==turn)
	{
		wins(turn);
		return true;
	}

	else if($("#box3").text()==$("#box6").text() && $("#box3").text()==$("#box9").text() && $("#box3").text()==turn)
	{
		wins(turn);
		return true;
	}

	else if($("#box3").text()==$("#box5").text() && $("#box3").text()==$("#box7").text() && $("#box3").text()==turn)
	{
		wins(turn);
		return true;
	}

	else if($("#box4").text()==$("#box5").text() && $("#box4").text()==$("#box6").text() && $("#box4").text()==turn)
	{
		wins(turn);
		return true;
	}

	else if($("#box7").text()==$("#box8").text() && $("#box7").text()==$("#box9").text() && $("#box7").text()==turn)
	{
		wins(turn);
		return true;
	}

	return false;
}

function wins(turn)
{
	$("#comments h3").text("");
	$("#comments h1").text(turn+" wins the game");
	$("#divrestart").slideDown("1000");				// restart button displays
}