const ItemActions = ({ index, total, onMoveUp, onMoveDown, onDuplicate }) => {
  const actionClass =
    "rounded-md border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-500 transition-all hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        className={actionClass}
        disabled={index === 0}
        onClick={onMoveUp}
      >
        Up
      </button>
      <button
        type="button"
        className={actionClass}
        disabled={index === total - 1}
        onClick={onMoveDown}
      >
        Down
      </button>
      <button type="button" className={actionClass} onClick={onDuplicate}>
        Copy
      </button>
    </div>
  );
};

export default ItemActions;
