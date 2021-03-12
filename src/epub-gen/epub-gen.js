const epub = require('epub-gen');

const options = {
  title: 'Moby-Dick',
  author: 'Herman Melville',
  output: './moby-dick.epub',
  content: [
    {
      title: 'Chapter 1: Loomings',
      data: `
      <table>
        <tr>
            <th>English</th>
            <th>Russian</th>
        </tr>
        <tr>
            <td>
                <p>Call me Ishmael. Some years ago—never mind how long precisely</p>
            </td>
            <td>
                <p>Зовите меня Измаил. Несколько лет назад - неважно, сколько именно</p>
            </td>
        </tr>
      </table>`
    }
  ]
};

new epub(options, './moby-dick-en-ru.epub').promise.then(() => console.log('Done'));
