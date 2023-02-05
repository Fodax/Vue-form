const app = new Vue({
	el: '#app',
	data: {
	  errors: [],
	  name: null,
	  email: null,
	  phone: null
	},
	methods: {
	  checkForm: function (e) {
		this.errors = [];
  
		if (!this.name) {
		  this.errors.push('Укажите имя.');
		} else if (![...this.name].every((char) => char.charCodeAt(0) >= 1040 && char.charCodeAt(0) <= 1103)) {
			this.errors.push('Для имени можно использовать только кириллицу');
		}

		if (!this.email) {
			this.errors.push('Укажите электронную почту.');
		} else if (!this.validEmail(this.email)) {
			this.errors.push('Укажите корректный адрес электронной почты.');
		}

		if (!this.phone) {
			this.errors.push('Укажите номер телефона.');
		} else if (!this.validPhone(this.phone)) {
			this.errors.push('Укажите корректный номер телефона.');
		}

		if (!this.errors.length) {
			return true;
		}
  
		e.preventDefault();
	  },
	  validEmail: function (email) {
		var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	  },
	  validPhone: function (phone) {
		var re = /^((\+7|7|8)+([0-9]){10})$/;
		return re.test(phone);
	  },
	  onInput: function (event) {
		  if (this.name && this.email) {
			this.$refs.button.disabled = false;
		} else {
			this.$refs.button.disabled = true;
		}
	  }
	}
  })