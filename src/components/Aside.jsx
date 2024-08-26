"use client"

import React from 'react';

function Aside() {
  return (
    <div>
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f8f8;
          margin: 0;
          padding: 20px;
        }
        .filter-sidebar {
          background-color: white;
          width: 250px;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h2 {
          color: #006666;
          font-size: 24px;
          margin-top: 0;
          margin-bottom: 20px;
        }
        h3 {
          color: #333;
          font-size: 16px;
          margin-bottom: 10px;
        }
        .slider {
          width: 100%;
          margin-bottom: 20px;
        }
        .checkbox-group {
          margin-bottom: 20px;
        }
        .checkbox-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }
        .checkbox-item input[type='checkbox'] {
          margin-right: 8px;
        }
        .show-more {
          color: #006666;
          text-decoration: none;
          font-size: 14px;
          display: inline-block;
          margin-top: 5px;
          border: 1px solid #006666;
          padding: 5px 10px;
          border-radius: 15px;
        }
        .tag-group {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .tag {
          background-color: #e0f0f0;
          color: #006666;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 14px;
        }
        .reset-filters {
          color: #006666;
          text-decoration: none;
          font-size: 14px;
          display: flex;
          align-items: center;
        }
        .reset-filters::before {
          content: '×';
          margin-right: 5px;
          font-size: 18px;
        }
      `}</style>

      <div className="filter-sidebar">
        <h2>Filter</h2>

        <h3>Preis</h3>
        <input type="range" className="slider" min="5" max="10" defaultValue="7.5" step="0.5" />
        <div>5 € - 10 €</div>

        <h3>Hersteller</h3>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input type="checkbox" id="adrexpharma" />
            <label htmlFor="adrexpharma">ADREXpharma</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="aurora" />
            <label htmlFor="aurora">Aurora</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="avaay" defaultChecked />
            <label htmlFor="avaay">Avaay</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="bedrocan" defaultChecked />
            <label htmlFor="bedrocan">Bedrocan</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="cannamedical" />
            <label htmlFor="cannamedical">Cannamedical</label>
          </div>
        </div>
        <a href="#" className="show-more">mehr anzeigen</a>

        <h3>THC Gehalt</h3>
        <input type="range" className="slider" min="11" max="18" defaultValue="14.5" step="0.5" />
        <div>11% - 18%</div>

        <h3>CBD Gehalt</h3>
        <input type="range" className="slider" min="1" max="5" defaultValue="3" step="0.5" />
        <div>1% - 5%</div>

        <h3>Genetik</h3>
        <div className="tag-group">
          <span className="tag">Indica</span>
          <span className="tag">Sativa</span>
          <span className="tag">Hybrid</span>
        </div>

        <h3>Bestrahlung</h3>
        <div className="tag-group">
          <span className="tag">bestrahlt</span>
          <span className="tag">nicht bestrahlt</span>
        </div>

        <h3>Terpene</h3>
        <div className="checkbox-group">
          {/* Add checkbox items for Terpene here */}
        </div>

        <a href="#" className="reset-filters">alle Filter zurücksetzen</a>
      </div>
    </div>
    
  );
}

export default Aside;
