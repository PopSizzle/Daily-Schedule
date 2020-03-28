# Daily Planner

This daily planner is made to be accessible and simple for various users to utilize. It will update the date at the top of the planner, and during the hours of the day the row of each hour will be red if the time is currently in that hour, green if that hour is upcoming, and grey if that hour has already passed. If a user wishes to add something to their planner, they would simply need to type it in and then click the save button. This would save the event not only in the current planner, but also in the local storage so that it would remain if they refreshed or returned to the page. There is also a clear button so that the user may clear all stored and visible data.

## Implementation

In order to create this planner, the time was generated using momentjs. The time will dynamically update with the actual time and will continue to be accurate. The ability to store items in local storage is achieved through the use of two functions. First, the function to store the data:

```
$(document).on("click", ".saveBtn", function(){
    var num = $(this).attr("data-number");
    var index = num-9;
    var content = textArray[index].val().trim();

    localStorage.setItem(num, content);
})
```

After the data is stored, it is recalled from the local storage using a function that automatically runs every time the page is refreshed. Here is the second function for recalling the data:

```
function renderSaved(){
    for(i=0; i<textArray.length; i++){
        var num = i+9;
        var textBox = textArray[i];
        textBox.text(localStorage.getItem(num));

    }
}
```

This application can be ran on any web browser, and the user can continue to update their schedule and change it each day.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* [https://popsizzle.github.io/Daily-Schedule/](#)

## Author
Sam Poppe

## Contact the author

Github: https://github.com/PopSizzle
LinkedIn: https://www.linkedin.com/in/sam-poppe-623281193/

## Acknowledgements

Special thanks to my teacher Jerome Chenette, my TAs Kerwin Hy and Mahisha Gunasekaran for teaching me the techniques used in this project.