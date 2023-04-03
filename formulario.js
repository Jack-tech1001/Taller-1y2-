
class Comentario {
  constructor(form) {
    this.form = form;
    this.nameInput = this.form.querySelector('#name');
    this.emailInput = this.form.querySelector('#email');
    this.commentInput = this.form.querySelector('#comment');
    this.submitButton = this.form.querySelector('button[type="submit"]');
    this.comments = [];
    this.addEventListeners();
  }
  
  addEventListeners() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const name = this.nameInput.value.trim();
    const email = this.emailInput.value.trim();
    const comment = this.commentInput.value.trim();
    if (!name || !email || !comment) {
      alert('Por favor complete todos los campos.');
      return;
    }
    const data = {
      name,
      email,
      comment,
      date: new Date().toLocaleString(),
    };
    this.addComment(data);
    this.showAlert(data);
    this.resetForm();
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  editComment(index, comment) {
    this.comments[index] = comment;
  }

  deleteComment(index) {
    this.comments.splice(index, 1);
  }

  showAlert(data) {
    alert(`Comentario agregado con éxito!\nUsuario: ${data.name}\nFecha: ${data.date}`);
  }

  resetForm() {
    this.nameInput.value = '';
    this.emailInput.value = '';
    this.commentInput.value = '';
  }
}

const commentForm = new Comentario(document.querySelector('#comment-form'));
