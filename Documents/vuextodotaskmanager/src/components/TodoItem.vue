<template>
  <div>
    <form>
      <p>Awesome Todo List</p>
      <input placeholder="What do you need to do today?" />

      <button type="submit">Add</button>
      <ul>
        <li>
          <input class="" type="checkbox" />Print bills
          <i class="fa fa-times" aria-hidden="true"></i>
        </li>

        <li>
          <input type="checkbox" />Call Ramboo
          <i class="fa fa-times" aria-hidden="true"></i>
        </li>
        <li>
          <input type="checkbox" />Print statements
          <i class="fa fa-times" aria-hidden="true"></i>
        </li>
        <li>
          <input type="checkbox" />Business meeting
          <label></label>
          <i class="fa fa-times" aria-hidden="true"></i>
        </li>
        <li>
          <input type="checkbox" />Shopping
          <i class="fa fa-times" aria-hidden="true"></i>
        </li>
        <li>
          <input type="checkbox" />Visit the hospital
          <i class="fa fa-times" aria-hidden="true"></i>
        </li>
      </ul>
    </form>
  </div>
</template>

<style scoped>
.container {
}
form {
  background: white;
  margin-top: 150px;
  width: 500px;
  height: fit-content;
  border: solid 1px black;
  margin-left: 200px;
}
button {
  background: navy;
  color: white;
}
p {
  font-size: 14px;
  font-weight: 400;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: rgba(56, 53, 53, 0.913);
}
.input {
}
</style>

<script>
export default {
  name: "TodoItem",
};
</script>
