const Handlebars = require('handlebars');
module.exports = {
        sum: (a,b) => a+b, // cộng cho số thứ tự của bảng đếm từ 1
        sortable: (field, sort) => {
          const sortType = field === sort.column ? sort.type : 'default';
          const icons = {
            default: 'fa-solid fa-sort',
            asc: 'fa-solid fa-arrow-down-wide-short',
            desc: 'fa-solid fa-arrow-down-short-wide',
          };
          const types ={
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
          }
    
          const icon = icons[sortType];
          const type = types[sortType];

          const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)
    
          const result = `<a href="${href}">
            <i class="${icon}"></i>
          </a>`;
          return new Handlebars.SafeString(result);
        }
};