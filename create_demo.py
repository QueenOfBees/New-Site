from django.conf import settings
import django


def maina():
    from galaxy.models import ClassRoom, Chart
    all_charts = [
        (10, 10,
         'aaa_aaaaaaa_aaa\r\naaa_aaaaaaa_aaa\r\naaa_aaaaaaa_aaa\r\nuaa_aaaaaaa_aau\r\naaa_aaaaaaa_aaa\r\naaa_aaaaaaa_aaa\r\naaa_aaaaaaa_aaa\r\naaa_aaaaaaa_aaa\r\naaa_aaaaaaa_aaa\r\naaa_aaaaaaa_aaa'),
        (5, 5, 'aa_aa\r\naa_aa\r\nua_au\r\naa_aa\r\naa_aa'),
        (7, 7, 'aaa_aaa\r\naaa_aaa\r\naaa_aaa\r\nuaa_aau\r\naaa_aaa\r\naaa_aaa\r\naaa_aaa')
    ]
    regions = ['a', 'b', 'c']
    seri = 1
    i = 0
    for floor in range(1, 6):
        for region in regions:
            for num in (1, 16):
                num_strf = str(num).rjust(2, '0')
                single_chart = Chart.objects.get_or_create(
                    owner='Me',
                    row_num=all_charts[i][0],
                    col_num=all_charts[i][1],
                    string=all_charts[i][2]
                )
                i += 1
                c = ClassRoom.objects.get_or_create(region_tag=region,
                                                    floor_tag=floor,
                                                    number=seri,
                                                    slug="1{}{}{}".format(region, floor, num_strf),
                                                    max_num=100,
                                                    usable=True,
                                                    current_num=30,
                                                    rate=8,
                                                    chart_id=seri
                                                    )

                seri += 1


maina()
