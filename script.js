function showHackAlert() {
    const overlay = document.createElement('div');
    overlay.innerHTML = `
        <div style="position:fixed; top:20%; left:20%; width:60%; padding:20px; background:#000; color:#0f0; border:2px solid #0f0; font-family:monospace; z-index:9999; border-radius:10px; box-shadow: 0 0 15px #0f0;">
            <h3 style="margin-top:0; border-bottom:1px solid #0f0;">[SYSTEM ACCESS GRANTED]</h3>
            <p>Scanning local network...</p>
            <p>Target ID: 548#######</p>
            <p style="color:red; font-weight:bold;">Status: Accessing account data...</p>
            <div style="width:100%; height:10px; background:#222; margin-top:10px;">
                <div style="width:70%; height:100%; background:#0f0;"></div>
            </div>
            <p>Operation Complete.</p>
        </div>
    `;
    document.body.appendChild(overlay);
}

setTimeout(showHackAlert, 1000);
