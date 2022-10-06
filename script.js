fetch(
  "https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json"
)
  .then((response) => response.json())

  .then((data) => {
    candidatos = data.cand.map(function (f) {
      return f.nm;
    });

    totais = data.cand.map(function (f) {
      return f.pvap;
    });

    var options = {
      chart: {
        type: "bar",
      },
      series: [
        {
          name: "porcentagem",
          data: totais,
        },

        ,
      ],
      xaxis: {
        categories: candidatos,
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);

    chart.render();
  });
