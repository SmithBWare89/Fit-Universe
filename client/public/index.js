// function addSet(liftVarName) {
//     const formEl = document.querySelector(`#${liftVarName}`);
//     const buttonEl = document.querySelector(`#${liftVarName}Button`);
//     const divContainer = document.createElement('div');

//     divContainer.classList = 'equal width fields';
//     const repsHTML = `<div class="field"><label>Reps</label><div role="listbox" aria-expanded="false" class="ui fluid selection dropdown" tabindex="0"><div aria-atomic="true" aria-live="polite" role="alert" class="divider default text">Select Reps</div><i aria-hidden="true" class="dropdown icon"></i><div class="menu transition"><div role="option" aria-checked="false" aria-selected="true" class="selected item" style="pointer-events: all;"><span class="text">1</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">2</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">3</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">4</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">5</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">6</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">7</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">8</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">9</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">10</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">11</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">12</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">13</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">14</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">15</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">16</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">17</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">18</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">19</span></div><div role="option" aria-checked="false" aria-selected="false" class="item" style="pointer-events: all;"><span class="text">20</span></div></div></div></div>`;
//     const weightHTML = `<div class="field"><label>Weight</label><div class="ui fluid input"><input placeholder="Enter Weight" type="text"></div></div>`
//     const addSetButton = `<button class="ui button addSet">+</button>`
//     const deleteButton = `<button class="ui button deleteSet">x</button>`
//     divContainer.innerHTML = `${repsHTML}${weightHTML}${addSetButton}${deleteButton}`;
//     formEl.append(divContainer);
// }

// document.onclick = function(event) {
//     const element = event.target;
//     const classList = element.getAttribute("class");
//     const formEl = element.closest('form').getAttribute('id');
//     const repField = element.closest('.fields');
//     const addSetRegex = /(addSet)/g;
//     const deleteSetRegex = /(deleteSet)/g;

//     if(deleteSetRegex.test(classList)) {
//         return repField.remove();
//     } else if (addSetRegex.test(classList)) {
//         return addSet(formEl)
//     }
// }