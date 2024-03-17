export const Loading = () => {
  return (
    <div className="loading">
      <span className="loading-dot"></span>
      <span className="loading-dot"></span>
      <span className="loading-dot"></span>
      <style jsx>
        {`
            .loading {
                align-items: center;
                display: flex;
                justify-content: center;
            }
              .loading-dot {
                animation: dot ease-in-out 1s infinite;
                background-color: light-grey;
                display: inline-block;
                height: 9px;
                margin: 4px;
                width: 9px;
                border-radius: 50%;
              }
    
              .loading-dot:nth-of-type(2) {
                animation-delay: 0.1s;
              }
    
              .loading-dot:nth-of-type(3) {
                animation-delay: 0.2s;
              }
    
              @keyframes dot {
                0% {
                  background-color: light-grey;
                  transform: scale(1);
                }
                50% {
                  background-color: grey;
                  transform: scale(1.3);
                }
                100% {
                  background-color: light-grey;
                  transform: scale(1);
                }
            
            `}
      </style>
    </div>
  );
};
