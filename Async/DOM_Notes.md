# DOM (Document Object Model) - Complete Notes

## What is DOM?
DOM stands for **Document Object Model**. It's a programming interface that represents HTML documents as a tree structure of objects that JavaScript can interact with.

Think of DOM as a bridge between HTML and JavaScript - it allows JavaScript to read, modify, and interact with HTML elements.

## Why Use DOM?
- **Dynamic Content**: Change text, images, and styles without reloading the page
- **User Interaction**: Respond to clicks, form submissions, keyboard input
- **Real-time Updates**: Update content based on user actions or data
- **Interactive Websites**: Create modern, responsive web applications

## How DOM Works?
When a webpage loads, the browser creates a DOM tree from the HTML:

```
Document
└── html
    ├── head
    │   └── title
    └── body
        ├── h1
        ├── p
        └── div
```

## Key DOM Concepts

### 1. Selecting Elements

#### getElementById()
```javascript
// Select element by ID
const title = document.getElementById('main-title');
```

#### querySelector() & querySelectorAll()
```javascript
// Select first element matching CSS selector
const button = document.querySelector('.btn');

// Select all elements matching CSS selector
const allButtons = document.querySelectorAll('.btn');
```

#### getElementsByClassName() & getElementsByTagName()
```javascript
// Select by class name
const items = document.getElementsByClassName('item');

// Select by tag name
const paragraphs = document.getElementsByTagName('p');
```

### 2. Modifying Content

#### innerHTML vs textContent
```javascript
const div = document.getElementById('content');

// innerHTML - can include HTML tags
div.innerHTML = '<strong>Bold text</strong>';

// textContent - only plain text
div.textContent = 'Plain text only';
```

### 3. Modifying Attributes
```javascript
const image = document.querySelector('img');

// Get attribute
const src = image.getAttribute('src');

// Set attribute
image.setAttribute('src', 'new-image.jpg');

// Remove attribute
image.removeAttribute('alt');
```

### 4. Modifying Styles
```javascript
const element = document.getElementById('box');

// Direct style modification
element.style.color = 'red';
element.style.backgroundColor = 'blue';
element.style.fontSize = '20px';

// Add/remove CSS classes
element.classList.add('active');
element.classList.remove('hidden');
element.classList.toggle('visible');
```

### 5. Creating and Adding Elements
```javascript
// Create new element
const newDiv = document.createElement('div');
newDiv.textContent = 'New content';
newDiv.className = 'new-class';

// Add to DOM
const container = document.getElementById('container');
container.appendChild(newDiv);

// Insert at specific position
container.insertBefore(newDiv, container.firstChild);
```

### 6. Removing Elements
```javascript
const element = document.getElementById('remove-me');

// Remove element
element.remove();

// Or remove from parent
element.parentNode.removeChild(element);
```

### 7. Event Handling

#### addEventListener()
```javascript
const button = document.getElementById('click-btn');

button.addEventListener('click', function() {
    alert('Button clicked!');
});

// Arrow function version
button.addEventListener('click', () => {
    console.log('Button clicked!');
});
```

#### Common Events
```javascript
// Click event
element.addEventListener('click', handleClick);

// Mouse events
element.addEventListener('mouseover', handleMouseOver);
element.addEventListener('mouseout', handleMouseOut);

// Form events
form.addEventListener('submit', handleSubmit);
input.addEventListener('change', handleChange);

// Keyboard events
document.addEventListener('keydown', handleKeyPress);
```

### 8. Event Object
```javascript
button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop event bubbling
    
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
});
```

### 9. Form Handling
```javascript
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
    
    const name = nameInput.value;
    console.log('Name entered:', name);
    
    // Validate input
    if (name.trim() === '') {
        alert('Please enter a name');
        return;
    }
    
    // Process form data
    processForm(name);
});
```

### 10. DOM Traversal
```javascript
const element = document.getElementById('current');

// Parent elements
const parent = element.parentNode;
const parentElement = element.parentElement;

// Child elements
const children = element.children;
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// Sibling elements
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;
```

### 11. Node Types and Properties
```javascript
// Different node types
console.log(element.nodeType); // 1 for Element, 3 for Text, 8 for Comment
console.log(element.nodeName); // Tag name in uppercase
console.log(element.nodeValue); // null for elements, text content for text nodes

// Check node type
if (node.nodeType === Node.ELEMENT_NODE) {
    console.log('This is an element');
}
```

### 12. innerHTML vs outerHTML vs textContent vs innerText
```javascript
const div = document.querySelector('div');

// innerHTML - HTML content inside element
div.innerHTML = '<p>New content</p>';

// outerHTML - entire element including tags
console.log(div.outerHTML); // <div><p>New content</p></div>

// textContent - all text including hidden elements
console.log(div.textContent);

// innerText - visible text only (respects CSS)
console.log(div.innerText);
```

### 13. Element Dimensions and Position
```javascript
const element = document.getElementById('box');

// Element dimensions
console.log(element.offsetWidth);  // Total width including padding, border
console.log(element.offsetHeight); // Total height including padding, border
console.log(element.clientWidth);  // Width excluding border
console.log(element.clientHeight); // Height excluding border
console.log(element.scrollWidth);  // Full scrollable width
console.log(element.scrollHeight); // Full scrollable height

// Element position
console.log(element.offsetTop);    // Distance from top of offset parent
console.log(element.offsetLeft);   // Distance from left of offset parent

// Scroll position
console.log(element.scrollTop);    // Vertical scroll position
console.log(element.scrollLeft);   // Horizontal scroll position

// Get bounding rectangle
const rect = element.getBoundingClientRect();
console.log(rect.top, rect.left, rect.width, rect.height);
```

### 14. Window and Document Properties
```javascript
// Window dimensions
console.log(window.innerWidth);  // Viewport width
console.log(window.innerHeight); // Viewport height
console.log(window.outerWidth);  // Browser window width
console.log(window.outerHeight); // Browser window height

// Document dimensions
console.log(document.documentElement.scrollWidth);
console.log(document.documentElement.scrollHeight);

// Scroll position
console.log(window.pageXOffset); // Horizontal scroll
console.log(window.pageYOffset); // Vertical scroll
```

### 15. Event Bubbling and Capturing
```javascript
// Event bubbling (default)
document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
});

document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked'); // This fires after child
});

// Event capturing
document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked first');
}, true); // true enables capturing

// Stop propagation
function handleClick(e) {
    e.stopPropagation(); // Stops event from bubbling up
    e.stopImmediatePropagation(); // Stops other listeners on same element
}
```

### 16. Custom Events
```javascript
// Create custom event
const customEvent = new CustomEvent('myCustomEvent', {
    detail: { message: 'Hello from custom event!' },
    bubbles: true,
    cancelable: true
});

// Listen for custom event
document.addEventListener('myCustomEvent', (e) => {
    console.log(e.detail.message);
});

// Dispatch custom event
document.dispatchEvent(customEvent);
```

### 17. Data Attributes
```javascript
// HTML: <div id="user" data-user-id="123" data-role="admin"></div>
const userDiv = document.getElementById('user');

// Get data attributes
console.log(userDiv.dataset.userId); // "123"
console.log(userDiv.dataset.role);   // "admin"

// Set data attributes
userDiv.dataset.status = 'active';
userDiv.dataset.lastLogin = '2024-01-01';

// Alternative method
console.log(userDiv.getAttribute('data-user-id'));
userDiv.setAttribute('data-status', 'inactive');
```

### 18. Document Fragments (Performance Optimization)
```javascript
// Create document fragment for batch operations
const fragment = document.createDocumentFragment();

// Add multiple elements to fragment
for (let i = 0; i < 1000; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li); // No DOM reflow here
}

// Single DOM operation
document.getElementById('list').appendChild(fragment);
```

### 19. Element Visibility and Display
```javascript
const element = document.getElementById('myElement');

// Check if element is visible
function isVisible(el) {
    return el.offsetWidth > 0 && el.offsetHeight > 0;
}

// Check if element is in viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    );
}

// Hide/show elements
element.style.display = 'none';    // Removes from layout
element.style.visibility = 'hidden'; // Keeps space but invisible
element.style.opacity = '0';        // Transparent but interactive
```

### 20. Cloning Elements
```javascript
const original = document.getElementById('template');

// Shallow clone (element only)
const shallowClone = original.cloneNode(false);

// Deep clone (element + all children)
const deepClone = original.cloneNode(true);

// Append cloned element
document.body.appendChild(deepClone);
```

### 21. Focus Management
```javascript
const input = document.getElementById('myInput');

// Set focus
input.focus();

// Remove focus
input.blur();

// Check if element has focus
if (document.activeElement === input) {
    console.log('Input is focused');
}

// Focus events
input.addEventListener('focus', () => console.log('Input focused'));
input.addEventListener('blur', () => console.log('Input lost focus'));
```

### 22. Mutation Observer (Advanced)
```javascript
// Watch for DOM changes
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        console.log('DOM changed:', mutation.type);
        if (mutation.type === 'childList') {
            console.log('Children added/removed');
        }
    });
});

// Start observing
observer.observe(document.body, {
    childList: true,     // Watch for child additions/removals
    attributes: true,    // Watch for attribute changes
    subtree: true       // Watch entire subtree
});

// Stop observing
// observer.disconnect();
```

### 23. Intersection Observer (Modern)
```javascript
// Detect when elements enter/leave viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Element is visible');
            entry.target.classList.add('visible');
        } else {
            console.log('Element is hidden');
            entry.target.classList.remove('visible');
        }
    });
});

// Observe elements
const elements = document.querySelectorAll('.lazy-load');
elements.forEach(el => observer.observe(el));
```

### 24. Local Storage Integration
```javascript
// Save to localStorage
function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Load from localStorage
function loadFromStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Example: Save form data
const form = document.getElementById('userForm');
form.addEventListener('input', () => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    saveToStorage('formData', data);
});

// Load saved data on page load
window.addEventListener('load', () => {
    const savedData = loadFromStorage('formData');
    if (savedData) {
        Object.keys(savedData).forEach(key => {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) input.value = savedData[key];
        });
    }
});
```

### 25. Drag and Drop API
```javascript
// Make element draggable
const draggable = document.getElementById('draggable');
draggable.draggable = true;

// Drag events
draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.target.style.opacity = '0.5';
});

draggable.addEventListener('dragend', (e) => {
    e.target.style.opacity = '1';
});

// Drop zone
const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow drop
    dropZone.classList.add('drag-over');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('drag-over');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(draggedId);
    dropZone.appendChild(draggedElement);
    dropZone.classList.remove('drag-over');
});
```

## Practical Examples

### Example 1: Simple Counter
```javascript
let count = 0;
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

incrementBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    counter.textContent = count;
});
```

### Example 2: Todo List
```javascript
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
        
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        todoInput.value = '';
    }
});
```

### Example 3: Image Gallery
```javascript
const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
```

## Best Practices

1. **Wait for DOM to Load**
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Your DOM manipulation code here
});
```

2. **Use Event Delegation for Dynamic Content**
```javascript
// Instead of adding listeners to each button
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});
```

3. **Cache DOM Elements**
```javascript
// Good - cache the element
const button = document.getElementById('btn');
button.addEventListener('click', handleClick);

// Avoid - repeated DOM queries
document.getElementById('btn').style.color = 'red';
document.getElementById('btn').style.fontSize = '16px';
```

4. **Use Modern Methods**
```javascript
// Modern
element.classList.toggle('active');

// Old way
if (element.className.includes('active')) {
    element.className = element.className.replace('active', '');
} else {
    element.className += ' active';
}
```

### Example 4: Infinite Scroll
```javascript
let page = 1;
let loading = false;

function loadMoreContent() {
    if (loading) return;
    loading = true;
    
    // Simulate API call
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            const item = document.createElement('div');
            item.textContent = `Item ${(page - 1) * 10 + i + 1}`;
            item.className = 'item';
            document.getElementById('content').appendChild(item);
        }
        page++;
        loading = false;
    }, 1000);
}

// Load more when near bottom
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        loadMoreContent();
    }
});
```

### Example 5: Real-time Search
```javascript
const searchInput = document.getElementById('search');
const results = document.getElementById('results');
const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

let searchTimeout;

searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    
    searchTimeout = setTimeout(() => {
        const query = e.target.value.toLowerCase();
        const filtered = items.filter(item => 
            item.toLowerCase().includes(query)
        );
        
        results.innerHTML = '';
        filtered.forEach(item => {
            const div = document.createElement('div');
            div.textContent = item;
            div.className = 'result-item';
            results.appendChild(div);
        });
    }, 300); // Debounce search
});
```

### Example 6: Modal Dialog
```javascript
class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        this.closeBtn = this.modal.querySelector('.close');
        this.overlay = this.modal.querySelector('.overlay');
        
        this.bindEvents();
    }
    
    bindEvents() {
        this.closeBtn.addEventListener('click', () => this.close());
        this.overlay.addEventListener('click', () => this.close());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen()) {
                this.close();
            }
        });
    }
    
    open() {
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        this.modal.querySelector('input')?.focus();
    }
    
    close() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    isOpen() {
        return this.modal.style.display === 'block';
    }
}

// Usage
const modal = new Modal('myModal');
document.getElementById('openModal').addEventListener('click', () => modal.open());
```

## Advanced DOM Concepts

### Shadow DOM (Web Components)
```javascript
// Create custom element with Shadow DOM
class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        
        // Create shadow root
        const shadow = this.attachShadow({ mode: 'open' });
        
        // Add styles and content
        shadow.innerHTML = `
            <style>
                :host {
                    display: block;
                    padding: 10px;
                    border: 1px solid #ccc;
                }
                .content {
                    color: blue;
                }
            </style>
            <div class="content">
                <slot></slot>
            </div>
        `;
    }
}

// Register custom element
customElements.define('my-custom-element', MyCustomElement);
```

### Template and Slot
```javascript
// HTML template
const template = document.getElementById('card-template');

// Clone and use template
function createCard(title, content) {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.card-title').textContent = title;
    clone.querySelector('.card-content').textContent = content;
    return clone;
}

// Add to DOM
const container = document.getElementById('cards');
container.appendChild(createCard('Title 1', 'Content 1'));
```

## Performance Tips

### 1. Batch DOM Operations
```javascript
// Bad - multiple reflows
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = `Item ${i}`;
    document.body.appendChild(div); // Reflow each time
}

// Good - single reflow
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}
document.body.appendChild(fragment); // Single reflow
```

### 2. Use requestAnimationFrame for Animations
```javascript
function animateElement(element, targetX) {
    let currentX = 0;
    
    function animate() {
        if (currentX < targetX) {
            currentX += 2;
            element.style.transform = `translateX(${currentX}px)`;
            requestAnimationFrame(animate);
        }
    }
    
    requestAnimationFrame(animate);
}
```

### 3. Debounce Expensive Operations
```javascript
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Usage
const expensiveOperation = debounce(() => {
    console.log('Expensive operation executed');
}, 300);

window.addEventListener('resize', expensiveOperation);
```

## Common DOM Methods Summary

| Method | Purpose | Example |
|--------|---------|---------|
| `getElementById()` | Select by ID | `document.getElementById('myId')` |
| `querySelector()` | Select by CSS selector | `document.querySelector('.class')` |
| `addEventListener()` | Add event listener | `element.addEventListener('click', fn)` |
| `createElement()` | Create new element | `document.createElement('div')` |
| `appendChild()` | Add child element | `parent.appendChild(child)` |
| `remove()` | Remove element | `element.remove()` |
| `setAttribute()` | Set attribute | `element.setAttribute('src', 'image.jpg')` |
| `classList.add()` | Add CSS class | `element.classList.add('active')` |
| `cloneNode()` | Clone element | `element.cloneNode(true)` |
| `getBoundingClientRect()` | Get element position/size | `element.getBoundingClientRect()` |
| `insertBefore()` | Insert before element | `parent.insertBefore(new, existing)` |
| `replaceChild()` | Replace child element | `parent.replaceChild(new, old)` |
| `contains()` | Check if contains element | `parent.contains(child)` |
| `matches()` | Check if matches selector | `element.matches('.class')` |
| `closest()` | Find closest ancestor | `element.closest('.parent')` |

## Browser Compatibility Notes

### Modern Methods (ES6+)
- `element.closest()` - IE not supported
- `element.matches()` - IE9+ (with prefix)
- `element.remove()` - IE not supported
- `element.classList` - IE10+
- Custom Elements - Modern browsers only
- Intersection Observer - Modern browsers only

### Polyfills for Older Browsers
```javascript
// Polyfill for element.remove()
if (!Element.prototype.remove) {
    Element.prototype.remove = function() {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}

// Polyfill for element.matches()
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
}
```

## Security Considerations

### XSS Prevention
```javascript
// Dangerous - can execute scripts
element.innerHTML = userInput; // Never do this with user input

// Safe - treats as text only
element.textContent = userInput;

// Safe - escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
```

### Content Security Policy
```javascript
// Avoid inline event handlers
// Bad
element.innerHTML = '<button onclick="alert(1)">Click</button>';

// Good
const button = document.createElement('button');
button.textContent = 'Click';
button.addEventListener('click', () => alert(1));
```

## Debugging DOM

### Console Methods
```javascript
// Inspect element
console.dir(element); // Shows all properties
console.log(element); // Shows HTML representation

// Monitor events
monitorEvents(element); // Chrome DevTools only
unmonitorEvents(element);

// Get event listeners
getEventListeners(element); // Chrome DevTools only
```

### Common Debugging Issues
```javascript
// Check if element exists
const element = document.getElementById('myId');
if (!element) {
    console.error('Element not found!');
    return;
}

// Check if DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

// Verify event listeners
function addEventListenerWithLog(element, event, handler) {
    console.log(`Adding ${event} listener to:`, element);
    element.addEventListener(event, handler);
}
```

## Remember
- DOM manipulation happens after the HTML is loaded
- Always check if elements exist before manipulating them
- Use event delegation for better performance with many elements
- Batch DOM operations to avoid multiple reflows
- Use modern methods but consider browser compatibility
- Always sanitize user input to prevent XSS attacks
- Use browser DevTools for debugging DOM issues
- Practice with real projects to master DOM manipulation!

## Quick Reference Cheat Sheet

**Selection**: `getElementById()`, `querySelector()`, `querySelectorAll()`
**Modification**: `innerHTML`, `textContent`, `setAttribute()`, `style`
**Creation**: `createElement()`, `createTextNode()`, `cloneNode()`
**Insertion**: `appendChild()`, `insertBefore()`, `prepend()`, `append()`
**Removal**: `remove()`, `removeChild()`
**Events**: `addEventListener()`, `removeEventListener()`
**Traversal**: `parentNode`, `children`, `nextSibling`, `previousSibling`
**Classes**: `classList.add()`, `classList.remove()`, `classList.toggle()`
**Dimensions**: `offsetWidth`, `clientWidth`, `scrollWidth`, `getBoundingClientRect()`