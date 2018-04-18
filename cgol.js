	window.onload = displayMatrix;
	
	// globally
	var matrix_w;
	var matrix_h;
	
	function displayMatrix(){
		
		// clear the display
		document.getElementById("div_root").innerHTML = "";
	
		// read the dimensions
		var matrix_width = document.getElementById("cells_width").value;
		var matrix_height = document.getElementById("cells_height").value;
		
		matrix_w = document.getElementById("cells_width").value;
		matrix_h = document.getElementById("cells_height").value;
	
		var counter;
		var outcounter;
		for(outcounter = 0; outcounter < matrix_height; outcounter++) {
			for(counter = 0; counter < matrix_width; counter++) {
				var para = document.createElement("div");
				para.className = "whiteelement";
				para.addEventListener("click", switch_class);

				var element = document.getElementById("div_root");
				var child = document.getElementById('p_dummy');
				element.insertBefore(para,child);
			}
			
			var endofline = document.createElement("div");
			endofline.className = "div_divide";
			var element = document.getElementById("div_root");
			var child = document.getElementById('p_dummy');
			element.insertBefore(endofline,child);
			
		}
	}
	
	function switch_class(){
	if(this.className == "whiteelement") {
		this.className = "darkelement";
		} else {
		this.className = "whiteelement";
		}
	}
	
	function inverse_matrix() {
	
		var para = document.getElementById("div_root");
		
		var length = parseInt(matrix_h) * (parseInt(matrix_w) + 1);
		
		for(i=0; i<length; i++) {
				
				var child = para.getElementsByTagName("div")[i];
				
				if(child.className == "whiteelement") {
				child.className = "darkelement";
				} else if(child.className == "darkelement") {
				child.className = "whiteelement";
				}
		}
	}
	
	function random_walk() {
		
		var para = document.getElementById("div_root");
		
		var length = parseInt(matrix_h) * (parseInt(matrix_w) + 1);
		
		// read the values
		for(i=0; i<length; i++) {
		
			var child = para.getElementsByTagName("div")[i];
			
			if(Math.random() > 0.5 && child.className != "div_divide") {
				child.className = "darkelement";
			} else if (child.className != "div_divide") {
				child.className = "whiteelement";
			}
			
		}
	}
	
	function create_array() {
		
		// globally
		var para = document.getElementById("div_root");
		
		// globally
		var length = parseInt(matrix_h) * (parseInt(matrix_w) + 1);
		
		// globally
		var counter_h = 0;
		var counter_w = 0;
		
		// the original array
		array = new Array(matrix_h);
		
		for(i=0; i<matrix_h; i++) {
			array[i] = new Array(matrix_w)
		}
		
		// matrix for operations
		temp_array = new Array(matrix_h);
		
		for(i=0; i<matrix_h; i++) {
			temp_array[i] = new Array(matrix_w)
		}
		
		// read the values
		for(i=0; i<length; i++) {
		
				var child = para.getElementsByTagName("div")[i];

				if(child.className == "whiteelement") {
				array[counter_h][counter_w] = 0;
				counter_w++;
				} else if(child.className == "darkelement") {
				array[counter_h][counter_w] = 1;
				counter_w++;
				} else if(child.className == "div_divide") {
				counter_h++;
				counter_w = 0;
				}
		}
		
		// count the adjacent black cells
		for(i=0; i<matrix_h; i++) {
			for(j=0; j<matrix_w; j++) {
			
				var circle_counter = 0;
				
					if(i > 0 && array[i-1][j] == 1) { circle_counter++; }
					if(i > 0 && j < (matrix_w - 1) && array[i-1][j+1] == 1) { circle_counter++; }
					if(j < (matrix_w - 1) && array[i][j+1] == 1) { circle_counter++; }
					if(i < (matrix_h - 1) && j < (matrix_w - 1) && array[i+1][j+1] == 1) { circle_counter++; }
					if(i < (matrix_h - 1) && array[i+1][j] == 1) { circle_counter++; }
					if(i < (matrix_h - 1) && j > 0 && array[i+1][j-1] == 1) { circle_counter++; }
					if(j > 0 && array[i][j-1] == 1) { circle_counter++; }
					if(i > 0 && j > 0 && array[i-1][j-1] == 1) { circle_counter++; }
					
			temp_array[i][j] = circle_counter;		
			}
		}
		
		// counters for the matrix transformation
		var transform_counter_w = 0;
		var transform_counter_h = 0;
		
		// matrix transformation
		for(i=0; i<length; i++) {
					
			var child = para.getElementsByTagName("div")[i];
			
			if(child.className == "darkelement" && temp_array[transform_counter_h][transform_counter_w] > 3) {
				child.className = "whiteelement";
			} else if(child.className == "darkelement" && temp_array[transform_counter_h][transform_counter_w] < 2) {
				child.className = "whiteelement";
			} else if(child.className == "whiteelement" && temp_array[transform_counter_h][transform_counter_w] == 3) {
				child.className = "darkelement";
			}
			
			if(child.className == "div_divide") {
				transform_counter_h++;
				transform_counter_w = 0;
			} else { transform_counter_w++; }
		
		} // end of for loop
	}