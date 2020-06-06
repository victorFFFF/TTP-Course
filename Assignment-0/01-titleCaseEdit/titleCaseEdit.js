function titleCaseEdit(title) {
  // Insert code here;

  if(title == "")
    return title;
  else{

      var i;
      var string;
      var previous;

      string = title.charAt(0).toUpperCase() 

      for(i = 1; i < title.length; i++)
      {
        previous = title.charAt(i-1);
        
        if(previous == ' ')
           string += title.charAt(i).toUpperCase();
        else
           string += title.charAt(i);
      }
      return string;
}
}

// Do not edit this line;
module.exports = titleCaseEdit;