const boardRepository = require("./board.repository");

exports.create = (data) => {
    const { title, writer, content } = data;
    const result = boardRepository.create(title, writer, content);

    return result;
};

exports.getFindOne = (board_id) => {
    const id = parseInt(board_id);
    const result = boardRepository.findOne(id);
    boardRepository.incrementHit(id);

    return result;
};

exports.getFindOneModify = (board_id) => {
    const id = parseInt(board_id);
    const result = boardRepository.findOne(id);

    return result;
};

exports.getFindAll = () => {
    const result = boardRepository.findAll();

    return result;
};

exports.update = (id, new_row) => {
    const id_num = ~~id;
    const boardUpdate = boardRepository.update(id_num, new_row);

    return boardUpdate;
};

exports.delete = (id) => {
    const id_num = ~~id;
    const boardDelete = boardRepository.delete(id_num);

    return boardDelete;
};
