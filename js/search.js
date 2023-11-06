function Search() {
    this.keyword = document.querySelector('input[name="search"]');
    this.engine = document.querySelector('.SelectSearch');
    this.form = document.querySelector('.search');
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      let engine = this.engine.value;
      let keyword = this.keyword.value;
      if (engine === 'google') {
        window.open('https://www.google.com/search?q=' + keyword, '_blank');
      } else if (engine === 'naver') {
        window.open('https://search.naver.com/search.naver?query=' + keyword, '_blank');
      } else if (engine === 'bing') {
        window.open('https://www.bing.com/search?q=' + keyword, '_blank');
      }
    });
  }
  
  new Search();
  