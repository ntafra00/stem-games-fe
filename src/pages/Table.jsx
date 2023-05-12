import React from "react";

const Table = (props) => {

    return (
        <table className="table table-vcenter card-table">
                      <thead>
                        <tr>Test vectors for sample X</tr>
                        <tr>
                        {/* {columns.map((product) => {
                return (
                    <th key={product.id} />
                )
            })} */}
                          <th>Id</th>
                          <th>Title</th>
                          <th>Role</th>
                          <th className="w-1"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex py-1 align-items-center">
                              <span className="avatar me-2" style="background-image: url(./static/avatars/006m.jpg)"></span>
                              <div className="flex-fill">
                                <div className="font-weight-medium">Lorry Mion</div>
                                <div className="text-muted"><a href="#" className="text-reset">lmiona@livejournal.com</a></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>Automation Specialist IV</div>
                            <div className="text-muted">Accounting</div>
                          </td>
                          <td className="text-muted">
                            User
                          </td>
                          <td>
                            <a href="#">Edit</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex py-1 align-items-center">
                              <span className="avatar me-2" style="background-image: url(./static/avatars/004f.jpg)"></span>
                              <div className="flex-fill">
                                <div className="font-weight-medium">Leesa Beaty</div>
                                <div className="text-muted"><a href="#" className="text-reset">lbeatyb@alibaba.com</a></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>Editor</div>
                            <div className="text-muted">Services</div>
                          </td>
                          <td className="text-muted">
                            Admin
                          </td>
                          <td>
                            <a href="#">Edit</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex py-1 align-items-center">
                              <span className="avatar me-2" style="background-image: url(./static/avatars/007m.jpg)"></span>
                              <div className="flex-fill">
                                <div className="font-weight-medium">Perren Keemar</div>
                                <div className="text-muted"><a href="#" className="text-reset">pkeemarc@yahoo.com</a></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>Analog Circuit Design manager</div>
                            <div className="text-muted">Services</div>
                          </td>
                          <td className="text-muted">
                            User
                          </td>
                          <td>
                            <a href="#">Edit</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex py-1 align-items-center">
                              <span className="avatar me-2">SA</span>
                              <div className="flex-fill">
                                <div className="font-weight-medium">Sunny Airey</div>
                                <div className="text-muted"><a href="#" className="text-reset">saireyd@prlog.org</a></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>Nuclear Power Engineer</div>
                            <div className="text-muted">Engineering</div>
                          </td>
                          <td className="text-muted">
                            Owner
                          </td>
                          <td>
                            <a href="#">Edit</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex py-1 align-items-center">
                              <span className="avatar me-2" style="background-image: url(./static/avatars/009m.jpg)"></span>
                              <div className="flex-fill">
                                <div className="font-weight-medium">Geoffry Flaunders</div>
                                <div className="text-muted"><a href="#" className="text-reset">gflaunderse@loc.gov</a></div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div>Software Test Engineer II</div>
                            <div className="text-muted">Accounting</div>
                          </td>
                          <td className="text-muted">
                            Admin
                          </td>
                          <td>
                            <a href="#">Edit</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
    );
};

export default Table;