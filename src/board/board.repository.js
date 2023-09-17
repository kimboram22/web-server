const Board = require("./board.entity");

let data = [];

const latestId = () => {
    return data.length + 1;
};

exports.findAll = () => {
    return data;
};

exports.findOne = (id) => {
    const [board] = data.filter((row) => {
        return row.id === id;
    });
    return board;
};

exports.incrementHit = (id) => {
    const index = data.findIndex((v) => v.id === id);
    data[index].hit += 1;
};

exports.create = (title, writer, content) => {
    const id = latestId();
    const board = new Board(id, title, writer, content);
    data.push(board);

    return board;
};

exports.update = (id, new_row) => {
    const index = data.findIndex((v) => v.id === id);
    if (index === -1) return null;

    data[index] = { ...data[index], ...new_row };
    return data[index];
};

exports.delete = (id) => {
    const result = data.filter((row) => row.id !== id);
    data = result;
    return result;
};
