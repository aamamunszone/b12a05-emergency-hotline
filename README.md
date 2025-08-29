## Answers to the Following Questions

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?  
   **Ans :**
    - getElementById("idName")
      - শুধু একটাই element ধরে যেটার id দেওয়া আছে।
      - id সবসময় ইউনিক হয়।
    - Example:
      - `document.getElementById("title");`
  
    - getElementsByClassName("className")
      - একই ক্লাসের অনেকগুলো element ধরে।
      - এটাতে একটা collection (array-like object) পাওয়া যায়।
    - Example:
      - `document.getElementsByClassName("card");`
  
    - querySelector()
      - querySelector দিয়ে element সিলেক্ট করা যায় (id, class, tag—সবই কাজ করে)।
      - প্রথম ম্যাচ হওয়া element টাকে রিটার্ন করে।
    - Example:
      - `document.querySelector(".card");`
  
    - querySelectorAll()
      - querySelector-এর মতোই, কিন্তু সব element কে ধরে আনে (NodeList আকারে)।
      - এটাতে একটা collection (array-like object) পাওয়া যায়।
    - Example:
      - `document.querySelectorAll(".card");`

2. How do you **create and insert a new element into the DOM**?  
   **Ans :**
   1. `document.createElement()` দিয়ে element বানাতে হয়।
   2. `innerText` বা `innerHTML` দিয়ে কনটেন্ট যোগ করতে হয়।
   3. `appendChild()` বা `insertBefore()` দিয়ে DOM এ বসানো হয়।
   - Example
     - `const newDiv = document.createElement("div");` 
     - `newDiv.innerText = "Hello World!";`
     - `document.body.appendChild(newDiv);`

3. What is **Event Bubbling** and how does it work?  
   **Ans :**
    - Event Bubbling মানে হলো—যখন কোনো element এ event ঘটে (ধরি একটা বাটন ক্লিক), তখন সেই event শুধু বাটনে থাকে না, বরং ধাপে ধাপে তার parent > grandparent > document পর্যন্ত উঠে যায়।
    - একটা পানির বাবল যেভাবে নিচ থেকে ওপরে উঠে যায়, event ও তেমনি parent element পর্যন্ত পৌঁছে যায়।
    - Example
       - `document.getElementById("child").addEventListener("click", () => {`
         - `console.log("Child clicked!");`
       - `});`
       - `document.getElementById("parent").addEventListener("click", () => {`
         - `console.log("Parent clicked!");`
       - `});`
   -  Child এ ক্লিক করলে দুটোই ট্রিগার হবে।

4. What is **Event Delegation** in JavaScript? Why is it useful?  
   **Ans :**
    - Event Delegation মানে হলো, অনেকগুলো child element এর জন্য আলাদা আলাদা event listener না দিয়ে, তাদের common parent element এ একটাই listener বসানো।
    - পরে event.target দিয়ে চেক করে বুঝে নেওয়া যায় কোন child এ event হয়েছে।
  - **কেন দরকার?**
    - Performance ভালো হয় (একসাথে হাজারো element থাকলেও সমস্যা হয় না)।
    - Dynamic element (যেগুলো পরে add হবে) সেগুলোকেও সহজে হ্যান্ডেল করা যায়।
    - Example
         - `document.getElementById("list").addEventListener("click", function(e) {`
           - ` if (e.target.tagName === "li") {`
             - `console.log("You clicked:", e.target.innerText);`
         - `}`
           - `});`

5. What is the difference between **preventDefault() and stopPropagation()** methods?  
   **Ans :**
   - preventDefault()
      - কোনো element এর ডিফল্ট কাজ থামায়।
      - যেমন: form submit করলে পেজ reload হয় > সেটা থামাতে হলে ব্যবহার করি।
   - Example:
      - `form.addEventListener("submit", function(e) {`
        - ` e.preventDefault();`
      - `});`

   - stopPropagation()
      - Event Bubbling বন্ধ করে।
      - মানে child এ event হলে parent এ আর যাবে না।
   - Example:
      - `child.addEventListener("click", function(e) {`
        - `e.stopPropagation();`
      - `});`

---
---
## ASSIGNMENT-05 (Emergency Hotline)

### 📅 Deadline For 60 marks: 29th August, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks

### 📅 Deadline For 30 marks: Any time after 29th August.

---

## 👉 Main Requirements (50 Marks) 👈

### 1. Navbar ✅

- **Website name & logo** on the left as Figma
- **Heart icon, coin count (default-100), and Copy Count** on the right as Figma

---

### 2. Hero Section ✅

- **Background Gradient** in the Whole Section
- **A Relevant Logo** at the top-center
- **Section Title** in the center
- **A Relevant Slogan** in the bottom Center

---

### 2. Main Section ✅

This Section will have layout as figma

<table border=1 width="100%" cellpadding="50">
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
 </tr>
 <tr>
    <td colspan=9 >Card Section</td>
    <td colspan=3>History Section</td>
 </tr>
</table>

### Emergency Hotline Section ✅

- **Show Minimum 6 cards**. Each card will contain:
  - Icon or Image
  - Relevant Name
  - Relevant Name in English
  - Hotline number for calling
  - Category Badge
  - 💗 icon at left
  - **2 buttons** at the bottom: Copy and Call with icons as Figma

### History Section ✅

- **A white Background** in the whole section
- **History Title with icon** at the top-left as Figma
- **Clear History Button** at the top-right as Figma

---

### 3. Responsiveness ✅

- Website should be fully responsive for mobile devices (implementation up to you)
- Responsive done with Tailwind CSS :
  - `base sm: md: lg: xl: 2xl:`
  - `base sm: lg: 2xl:`

---

## 👉 Functionalities 👈

### 4. Heart Icons ✅

- Clicking on the 💗 **heart icon** of any card will increase the count in the Navbar

---

### 5. Call Buttons ✅

- On clicking a card's **Call Button**, following actions will happen:
  - Show an **alert** with a message including the service name and number
  - Each call will **cut 20 coins**. Reduce Coin after each click.
  - If coins are less than 20, show a relevant alert and terminate the process.
  - Add this service into the **Call History section** with:
    - Service name
    - Service number

---

### 5. Call History Section ✅

- Show all called services with name & number. This will empty initially. when call button clicked it will filled dynamically.
- A **Clear History button** on the right
- Clicking this button will remove all data from call history

---

## Create Readme ✅

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

## 🧪 Challenges Part (10 Marks) ✅

- On clicking the **Copy button**, show an alert and **increase the copy count** (3 Marks)

- Hotline number will be **copied on click** so it can be pasted anywhere (4 Marks)

💡Hint: You can ask for Help from `ChatGPT` Mamma . Just copy the below prompt , generate answer. use it with your own way.

```bash
I have a card with some text and a button inside it. I want that when a user clicks the button, some specific text from the card is copied to the clipboard using JavaScript. Please provide the code and explain it step by step.
```

- After clicking on the **Call button**, the **exact time of the call** will be shown in the Call History section (3 Marks)

💡Hint: Search Google with that below question

```bash
How to get current local time in js
```

---

## ⚙️ Technology Stack ✅

- HTML
- CSS ( Vanilla , Tailwind CSS , DaisyUI , Others - wheatever you like )
- JavaScript ( Vanilla only. No Framework / Library Allowed )

---

## 📌 Rules ✅

- ✅ Minimum **5 meaningful commits** required
- ❌ No Lorem Ipsum or dummy placeholder text. Use **relevant content only**

---

## 🔗 What to Submit ✅

- 📂 **GitHub Repository**
- 🌐 **Live Link**

---

# Let's Code and Achieve your Dream 🎯
