let i = 0;

function count() {
    i++;
    let count = i;
	let click = document.querySelector('button');
	click.innerHTML = "Clicks: "+count;

    // or
    // document.querySelector('button').innerHTML = "Clicks: "+count;
    //   ^^ This is what the 'click' variable stores
}
