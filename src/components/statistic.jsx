import React from 'react';

const Statistic = ({ state }) => {
  return (
    <div className="statistic">
      <label className="note-label">Thống kê: </label>
      <div className="formStatistic">
        <div>
          <label>Tổng số ghi chú: </label>
          <label>{state.count}</label>
        </div>
        <div>
          <label>Số phiếu đánh giá của thành viên lớn hơn 16 tuổi: </label>
          <label>{state.count16}</label>
        </div>
        <div>
          <label>Số phiếu đánh giá của thành viên nhỏ hơn 17 tuổi: </label>
          <label>{state.count17}</label>
        </div>
      </div>
    </div>
  );
};

export default Statistic;