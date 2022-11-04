import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';
import { Col, Form } from 'react-bootstrap';

import Car from './CardCar';

import { logoUsers, logoClock } from './imageimport.js';
import { getCars } from '../redux/actions/carsActions';

const FormSearchComponent = (props) => {
  const [driver, setDriver] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [jam, setJam] = useState('');
  const [penumpang, setPenumpang] = useState('');
  const [carsData, setCarsData] = useState('');

  const { getCarsListResult, getCarsListLoading } = useSelector((state) => state.carsReducer);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);
  
  const filterCar = async () => {
    setCarsData(getCarsListResult);
    console.log(driver, tanggal, jam, penumpang);
    const sopir = driver === 'true' ? true : false;

    if (driver === undefined || driver === "") {
      return Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Input form filter',
        showConfirmButton: false,
        timer: 1000
      });
    } else if ((jam === undefined || jam === '' )&& (tanggal === undefined || tanggal === '')) {
      return Swal.fire({
        position: 'top',
        icon: 'warning',
        title: 'Please select a date and time greater than now',
        showConfirmButton: false,
        timer: 1000,
      });

    } else if (penumpang === undefined || penumpang === '') {
      const filter = getCarsListResult.filter((car) => car.available == sopir && car.availableAt.slice(0, 10) + car.availableAt.slice(11, 16) <= tanggal + jam);
      if (filter.length === 0) if (filter.length === 0) return setCarsData(0);
      setCarsData(filter);
    }else {
      const filter = getCarsListResult.filter((car) => car.available == sopir && car.availableAt.slice(0, 10) + car.availableAt.slice(11, 16) <= tanggal + jam && car.capacity == penumpang);
      if (filter.length === 0) {
        
        Swal.fire({
          position: 'top',
          icon: 'error',
          title: 'Data Cars you search not Found',
          showConfirmButton: false,
          timer: 1000,
        });
        setCarsData(0);

      } else {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Data Cars you search Found',
          showConfirmButton: false,
          timer: 1000,
        });
        setCarsData(filter);
      }
    }
  };

  return (
    <>
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 col-12 d-flex justify-content-center">
            <div className="cars-filter">
              <div className="row row-cols-lg-auto align-items-center">
                <div className="col-12 col-md-6 col-lg select-tipe">
                  <label className="form-label" htmlFor="typeDriver">
                    Tipe Driver{' '}
                  </label>
                  <Form.Select id="typeDriver" value={driver} onChange={(e) => setDriver(e.target.value)} required>
                    <option value="">Pilih Tipe Driver</option>
                    <option value={true}>Dengan Supir</option>
                    <option value={false}>Tanpa Supir(Lepas Kunci)</option>
                  </Form.Select>
                </div>

                <div className="col-12 col-md-6 col-lg">
                  <label htmlFor="Tanggal" className="form-label">
                    Tanggal
                  </label>
                  <Form.Control id="Tanggal" type="date" className="form-control" value={tanggal} onChange={(e) => setTanggal(e.target.value)} placeholder="Pilih Tanggal" required />
                </div>
                <div className="col-12 col-md-6 col-lg">
                  <label className="form-label" htmlFor="time">
                    Waktu Jemput/Ambil
                  </label>
                  <div className="input-group">
                    <Form.Select id="time" className="form-select select2" value={jam} onChange={(e) => setJam(e.target.value)} required>
                      <option value="">Pilih Waktu</option>
                      <option value="00:00:00">00.00 WIB</option>
                      <option value="01:00:00">01.00 WIB</option>
                      <option value="02:00:00">02.00 WIB</option>
                      <option value="03:00:00">03.00 WIB</option>
                      <option value="04:00:00">04.00 WIB</option>
                      <option value="05:00:00">05.00 WIB</option>
                      <option value="06:00:00">06.00 WIB</option>
                      <option value="07:00:00">07.00 WIB</option>
                      <option value="08:00:00">08.00 WIB</option>
                      <option value="09:00:00">09.00 WIB</option>
                      <option value="10:00:00">10.00 WIB</option>
                      <option value="11:00:00">11.00 WIB</option>
                      <option value="12:00:00">12.00 WIB</option>
                      <option value="13:00:00">13.00 WIB</option>
                      <option value="14:00:00">14.00 WIB</option>
                      <option value="15:00:00">15.00 WIB</option>
                      <option value="16:00:00">16.00 WIB</option>
                      <option value="17:00:00">17.00 WIB</option>
                      <option value="18:00:00">18.00 WIB</option>
                      <option value="19:00:00">19.00 WIB</option>
                      <option value="20:00:00">20.00 WIB</option>
                      <option value="21:00:00">21.00 WIB</option>
                      <option value="22:00:00">22.00 WIB</option>
                      <option value="23:00:00">23.00 WIB</option>
                    </Form.Select>
                    <button className="btn btn-outline-secondary bg-white border-user border border-start-0" type="button">
                      <img src={logoClock} alt="" />
                    </button>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg">
                  <label htmlFor="passenger" className="form-label">
                    Jumlah Penumpang (Optional)
                  </label>
                  <div className="input-group">
                    <Form.Control id="passenger" type="number" className="form-control border-end-0" placeholder="Jumlah Penumpang" value={penumpang} onChange={(e) => setPenumpang(e.target.value)} />
                    <span className="input-group-text bg-white border-user border" id="basic-addon1">
                      <img src={logoUsers} alt="" />
                    </span>
                  </div>
                </div>

                <div className="col-12 col-lg">
                  <button onClick={() => filterCar()} className="nav-item-btn btn-form-cari" type="button">
                    Cari Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="pb-5 pt-4 main-mobil">
        <section className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="insert-card-cars row px-2">
                {carsData.length === 0 || getCarsListLoading ? (
                  <>
                    {/* <h1>Loading...</h1>
                    <div className="loader"></div> */}
                  </>
                ) : (
                  Object.values(carsData).map((car) => (
                    <Col key={car.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                      <Car car={car} />
                    </Col>
                  ))
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FormSearchComponent;
