<template>
  <div class="list">

    <div class="input-group">
      <input type="text" class="form-control" v-model="personInput" placeholder="enter a name...">
      <button class="btn btn-primary" @click="addPerson(personInput)">Add</button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Opt</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(person, index) in persons">
          <td> {{ index }}</td>
          <td>{{ person }}</td>
          <td class="rm" @click="removePerson(index)">delete</td>
        </tr>
      </tbody>

    </table>
  </div>
  
</template>

<script>
  export default {
    data () {
      return {
        personInput: '',
        persons: ['Dayana', 'Lucy', 'Vasti'],
      }
    },
    methods: {
      addPerson(name) {
        if(name && name.length > 3) {
          this.persons.push(name);
          this.personInput = '';
        }
      },
      removePerson(idx) {
        this.persons.splice(idx, 1);
      }
    }
  }
</script>

<style scoped>
.list div {
  padding-bottom: 10px;
}
  input button { margin: 2px; }

  th:nth-child(3) {
    width: 30px;
  }

  td.rm {
    cursor: pointer;
    background-color: #dc3545;
    width: 30px;
    color: #fff;
  }
</style>
